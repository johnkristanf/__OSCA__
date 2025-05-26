// lib/filters.ts

import { FilterFn } from '@tanstack/react-table';

export const multiSelectFilter: FilterFn<any> = (row, columnId, filterValues: string[]) => {
  if (filterValues.length === 0) return true;

  // IMPORTANT: For multi-select, it's best if the column definition
  // uses `getFilterDisplayValue` to provide the string for comparison.
  // row.getValue(columnId) should ideally give you the raw value,
  // and getFilterDisplayValue translates it for the dropdown options.
  // The filter should compare against the value that `getFilterDisplayValue` returns.

  // To make this filter more robust and work with `getFilterDisplayValue`,
  // we need to access the column definition itself to get the display value.
  // However, FilterFn doesn't directly give us access to the columnDef.
  // A common pattern is to ensure your `accessorFn` or `accessorKey` provides
  // the string you want to filter on, and `getFilterDisplayValue` is only for display.

  // Let's assume for simplicity here that row.getValue(columnId) gives us
  // a string-like value that directly matches the filterValues.
  // For complex objects, ensure your `accessorFn` for the column creates a filterable string.

  const comparableValue = String(row.getValue(columnId)).toLowerCase();

  return filterValues.some(filterValue => comparableValue === String(filterValue).toLowerCase());
};


// Generic fuzzy filter for text-based search (e.g., full name)
// This filter relies on `row.getValue(columnId)` returning the string
// that should be searched against. This is why `accessorFn` is crucial for 'fullname'.
export const fuzzyTextFilter: FilterFn<any> = (row, columnId, filterValue: string) => {
  const value = row.getValue(columnId); // This will now correctly get the value from accessorFn
  const searchTerm = String(filterValue).toLowerCase();

  // Handle cases where the value might be null or undefined
  const rowValueString = typeof value === 'string' || typeof value === 'number'
    ? String(value)
    : ''; // Default to empty string for non-string/non-number values

  return rowValueString.toLowerCase().includes(searchTerm);
};