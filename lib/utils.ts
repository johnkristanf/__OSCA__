import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

export const toSnakeCase = (str: string) =>
    str
        .toLowerCase()
        .replace(/[^\w\s]/g, '') // remove non-alphanumeric characters
        .replace(/\s+/g, ' ') // normalize spaces
        .trim()
        .replace(/\s/g, '_') // replace spaces with underscores
