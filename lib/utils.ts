import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge class names using clsx and tailwind-merge.
 * @param inputs - The class values to merge.
 * @returns The merged class names.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format price with conditional decimal places.
 * - Prices >= 50: No decimals (e.g., 373)
 * - Prices >= 0.01: 2 decimals (e.g., 12.34)
 * - Prices < 0.01: 4 decimals (e.g., 0.0045)
 * @param price - The price to format.
 * @returns The formatted price string.
 */
export function formatPrice(price: number): string {
  if (price >= 50) {
    return price.toFixed(0);
  }
  if (price >= 0.01) {
    return price.toFixed(2);
  }
  return price.toFixed(4);
}
