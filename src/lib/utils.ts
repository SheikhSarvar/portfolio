import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge Tailwind classes without conflicts */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Format a date string for display */
export function formatDate(dateStr: string): string {
  return dateStr  // already formatted as "Apr 2024" etc.
}

/** Truncate text to n words */
export function truncate(text: string, words: number): string {
  const parts = text.trim().split(/\s+/)
  if (parts.length <= words) return text
  return parts.slice(0, words).join(' ') + '…'
}

/** External link props — opens in new tab safely */
export const externalLinkProps = {
  target:   '_blank',
  rel:      'noopener noreferrer',
} as const

/** Clamp a number between min and max */
export function clamp(val: number, min: number, max: number): number {
  return Math.min(Math.max(val, min), max)
}

/** Map a value from one range to another */
export function mapRange(
  value: number,
  inMin: number,
  inMax: number,
  outMin: number,
  outMax: number,
): number {
  return ((value - inMin) / (inMax - inMin)) * (outMax - outMin) + outMin
}
