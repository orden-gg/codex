'use client';

import { useMemo } from 'react';
import items from '@fireballgg/sdk/data/items.json';
import { DollarSign, Minus } from 'lucide-react';
import { UpscaleIcon } from './upscale-icon';
import { useItemsLastSale } from '@/hooks/use-items-last-sale';
import { useEthPrice } from '@/hooks/use-eth-price';
import { Skeleton } from '@/components/ui/skeleton';
import { formatPrice } from '@/lib/utils';

interface Item {
  ID_CID: number;
  NAME_CID: string;
  DESCRIPTION_CID?: string;
  RARITY_CID: number;
  RARITY_NAME?: string;
  ICON_URL_CID?: string;
  TYPE_CID?: string;
  GUIDE_CID?: string;
}

const rarityColorVars: Record<number, string> = {
  0: 'var(--color-common)',
  1: 'var(--color-uncommon)',
  2: 'var(--color-rare)',
  3: 'var(--color-epic)',
  4: 'var(--color-legendary)',
  5: 'var(--color-relic)',
  6: 'var(--color-giga)',
};

export function ItemsTable() {
  const { data: lastSaleItems, isLoading: isLoadingItems } = useItemsLastSale();
  const { data: ethPrice, isLoading: isLoadingEthPrice } = useEthPrice();

  const isPriceLoading = isLoadingItems || isLoadingEthPrice;

  const priceMap = useMemo(() => {
    if (!lastSaleItems) return new Map<number, number>();

    const map = new Map<number, number>();
    lastSaleItems.forEach((item) => {
      const itemId = parseInt(item.id);
      if (item.currentPriceETH) {
        map.set(itemId, parseFloat(item.currentPriceETH));
      }
    });

    return map;
  }, [lastSaleItems]);

  return (
    <div className="space-y-4">

      {/* Table */}
      <div>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b border-fd-border bg-fd-muted">
              <th className="px-4 py-3 text-left text-sm font-semibold">Icon</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">ID</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Name</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Type</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Rarity</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Description</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Price</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item: Item) => (
              <tr
                key={item.ID_CID}
                className="border-b border-fd-border hover:bg-fd-muted/50 transition-colors"
              >
                <td className="px-4 py-3 align-middle">
                  <UpscaleIcon itemId={item.ID_CID} size={40} />
                </td>
                <td className="px-4 py-3 text-sm text-fd-muted-foreground align-middle">{item.ID_CID}</td>
                <td className="px-4 py-3 text-sm font-medium align-middle">{item.NAME_CID}</td>
                <td className="px-4 py-3 text-sm align-middle">{item.TYPE_CID || <Minus className="h-3.5 w-3.5 text-fd-muted-foreground" />}</td>
                <td
                  className="px-4 py-3 text-sm font-medium align-middle"
                  style={{ color: rarityColorVars[item.RARITY_CID] }}
                >
                  {item.RARITY_NAME || <Minus className="h-3.5 w-3.5 text-fd-muted-foreground" />}
                </td>
                <td className="px-4 py-3 text-sm text-fd-muted-foreground max-w-md align-middle">
                  {item.DESCRIPTION_CID || <Minus className="h-3.5 w-3.5 text-fd-muted-foreground" />}
                </td>
                <td className="px-4 py-3 text-sm align-middle">
                  {isPriceLoading ? (
                    <Skeleton className="h-4 w-16" />
                  ) : priceMap.has(item.ID_CID) && ethPrice ? (
                    <span className="flex items-center gap-0.5">
                      <DollarSign className="h-3.5 w-3.5" />
                      {formatPrice(priceMap.get(item.ID_CID)! * ethPrice)}
                    </span>
                  ) : (
                    <Minus className="h-3.5 w-3.5 text-fd-muted-foreground" />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
