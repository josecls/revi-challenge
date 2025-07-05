import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// cn is an internal function used by shadcn to interact with tailwindcss.
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

// generateMonsterIdentifier defines a function responsible for generating ids for monsters.
export function generateMonsterIdentifier(name: string): string {
  const timestamp = Date.now().toString(36); // base36 timestamp
  const random = Math.random().toString(36).substring(2, 8); // random 6-char string
  const base = name
    .trim()
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');

  return `${base}-${timestamp}-${random}`;
}

// sleep defines a function that waits for the amount of time provided.
export const sleep = (ms: number): Promise<void> => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
