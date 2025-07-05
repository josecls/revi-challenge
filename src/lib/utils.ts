import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// cn is an internal function used by shadcn to interact with tailwindcss.
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
}

// sleep defines a function that waits for the amount of time provided.
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};

