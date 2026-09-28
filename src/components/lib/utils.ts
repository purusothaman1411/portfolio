import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// Note: intentionally does NOT import the "lightswind" package itself.
// The published package's entry point auto-fires a phone-home beacon
// (hostname + "package-init") on load. Since we only need this one
// helper, it's reimplemented locally instead of pulling that in.
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
