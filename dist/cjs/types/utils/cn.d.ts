import { ClassValue } from "clsx";
/**
 * Merges classes using clsx and tailwind-merge
 * @example
 * clsxMerge('text-red-500', 'text-2xl', 'font-bold', 'text-center')
 * // => 'text-red-500 text-2xl font-bold text-center'
 * @param classes {ClassValue[]} - Array of classes to merge
 * @returns {string}
 */
export declare const cn: (...classes: ClassValue[]) => string;
