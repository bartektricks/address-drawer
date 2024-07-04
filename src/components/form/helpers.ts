import type { ClassValue } from "clsx";
import { cn } from "../../helpers/cn";

export const getInputClass = (className?: ClassValue) =>
	cn("border border-gray-300 rounded w-full py-2 px-1 text-sm", className);
