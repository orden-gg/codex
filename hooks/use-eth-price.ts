import { useQuery } from "@tanstack/react-query";

interface EthPriceResponse {
  success: boolean;
  data: {
    price: number;
  };
  message?: string;
}

export function useEthPrice() {
  return useQuery({
    queryKey: ["eth-price"],
    queryFn: async () => {
      const response = await fetch("/api/eth-rpice");
      if (!response.ok) {
        throw new Error("Failed to fetch ETH price");
      }
      const data: EthPriceResponse = await response.json();
      if (!data.success) {
        throw new Error(data.message || "Failed to fetch ETH price");
      }
      return data.data.price;
    },
    staleTime: 5 * 60 * 1000,
    refetchInterval: 5 * 60 * 1000,
  });
}
