'use client';

import { useMemo } from 'react';
import gear from '@fireballgg/sdk/data/gear.json';
import { DollarSign, Minus } from 'lucide-react';
import { UpscaleIcon } from './upscale-icon';
import { useItemsLastSale } from '@/hooks/use-items-last-sale';
import { useEthPrice } from '@/hooks/use-eth-price';
import { Skeleton } from '@/components/ui/skeleton';
import { formatPrice } from '@/lib/utils';

interface Gear {
  GAME_ITEM_ID_CID: number;
  NAME_CID: string;
  GEAR_TYPE_CID: number;
  TIER_CID: number;
  EQUIPPABLE_TO_CID: number;
  DURABILITY_CID_array: number[];
  REPAIR_COUNT_CID: number;
  itemEffects?: any[];
  repairCost?: any;
  LOOT_ID_CID?: number;
  LOOT_AMOUNT_CID?: number;
}

const gearTypeNames: Record<number, string> = {
  1: 'Head',
  2: 'Body',
  3: 'Legs',
  4: 'Weapon',
  5: 'Accessory',
};

const equipToNames: Record<number, string> = {
  1: 'Fighter',
  2: 'Mage',
  3: 'Tank',
  4: 'Ranger',
  5: 'Support',
};

export function GearTable() {
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

  const getDurabilityRange = (durabilityArray: number[]) => {
    if (!durabilityArray || durabilityArray.length === 0) return <Minus className="h-3.5 w-3.5 text-fd-muted-foreground" />;
    const min = Math.min(...durabilityArray);
    const max = Math.max(...durabilityArray);
    return min === max ? `${min}` : `${min}-${max}`;
  };

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
              <th className="px-4 py-3 text-left text-sm font-semibold">Gear Type</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Tier</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Equippable To</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Durability</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Repairs</th>
              <th className="px-4 py-3 text-left text-sm font-semibold">Price</th>
            </tr>
          </thead>
          <tbody>
            {gear.map((item: Gear) => (
              <tr
                key={item.GAME_ITEM_ID_CID}
                className="border-b border-fd-border hover:bg-fd-muted/50 transition-colors"
              >
                <td className="px-4 py-3 align-middle">
                  <UpscaleIcon itemId={item.GAME_ITEM_ID_CID} size={40} />
                </td>
                <td className="px-4 py-3 text-sm text-fd-muted-foreground align-middle">{item.GAME_ITEM_ID_CID}</td>
                <td className="px-4 py-3 text-sm font-medium align-middle">{item.NAME_CID}</td>
                <td className="px-4 py-3 text-sm align-middle">{gearTypeNames[item.GEAR_TYPE_CID] || item.GEAR_TYPE_CID}</td>
                <td className="px-4 py-3 text-sm align-middle">{item.TIER_CID}</td>
                <td className="px-4 py-3 text-sm align-middle">{equipToNames[item.EQUIPPABLE_TO_CID] || item.EQUIPPABLE_TO_CID}</td>
                <td className="px-4 py-3 text-sm align-middle">{getDurabilityRange(item.DURABILITY_CID_array)}</td>
                <td className="px-4 py-3 text-sm align-middle">{item.REPAIR_COUNT_CID}</td>
                <td className="px-4 py-3 text-sm align-middle">
                  {isPriceLoading ? (
                    <Skeleton className="h-4 w-16" />
                  ) : priceMap.has(item.GAME_ITEM_ID_CID) && ethPrice ? (
                    <span className="flex items-center gap-0.5">
                      <DollarSign className="h-3.5 w-3.5" />
                      {formatPrice(priceMap.get(item.GAME_ITEM_ID_CID)! * ethPrice)}
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
