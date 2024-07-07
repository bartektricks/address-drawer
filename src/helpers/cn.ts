import clsx, { type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines multiple class names into a single string.
 *
 * @param classes - The class names to combine.
 * @returns The combined class names as a string.
 */
export const cn = (...classes: ClassValue[]) => twMerge(clsx(...classes));
