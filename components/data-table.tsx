'use client'

import React from 'react'
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
  getFilteredRowModel,
  getPaginationRowModel,
  VisibilityState,
  ColumnFiltersState,
  getFacetedRowModel,
  getFacetedUniqueValues,
} from '@tanstack/react-table'

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from '@/components/ui/dropdown-menu'
import { Button } from '@/components/ui/button'
import { ChevronDownIcon, FilterIcon, SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[]
  data: TData[]
  filterableColumns?: string[]
}

export function DataTable<TData, TValue>({
  columns,
  data,
  filterableColumns = [],
}: DataTableProps<TData, TValue>) {
  // Determine initial column visibility
  // Set the first 5 columns to true, others to false
  const initialColumnVisibility: VisibilityState = React.useMemo(() => {
    const visibility: VisibilityState = {};
    columns.forEach((column, index) => {
      // Assuming accessorKey or id exists and is unique for column identification
      const columnId = (column as any).accessorKey || (column as any).id;
      if (columnId) {
        visibility[columnId] = index < 8; // Set true for the first 5, false otherwise
        // Always ensure 'actions' or 'documents' (if they exist) are not hidden by this rule
        if (columnId === 'actions' || columnId === 'documents') {
          visibility[columnId] = true;
        }
      }
    });
    return visibility;
  }, [columns]); // Re-calculate only if columns change

  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>(initialColumnVisibility);
  const [globalFilter, setGlobalFilter] = React.useState('')
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onGlobalFilterChange: setGlobalFilter,
    onColumnFiltersChange: setColumnFilters,
    getFacetedRowModel: getFacetedRowModel(),
    getFacetedUniqueValues: getFacetedUniqueValues(),
    state: {
      columnVisibility,
      globalFilter,
      columnFilters,
    },
    globalFilterFn: 'includesString',
  })

  return (
    <div className="rounded-md border">
      <div className="flex items-center py-4 px-4 gap-2">
        {/* Global Filter for Full Name */}
        <div className="relative flex-grow max-w-sm">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search columns..."
            value={globalFilter ?? ''}
            onChange={(event) => setGlobalFilter(event.target.value)}
            className="pl-9 pr-3 py-2 border rounded-md w-full"
          />
        </div>

        {/* Column Filters Dropdown */}
        {filterableColumns.length > 0 && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="shrink-0">
                <FilterIcon className="mr-2 h-4 w-4" /> Filter Columns
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-[200px]">
              <DropdownMenuLabel>Filter by:</DropdownMenuLabel>
              <DropdownMenuSeparator />
              {filterableColumns.map((columnId) => {
                const column = table.getColumn(columnId)
                if (!column || !column.getCanFilter() || column.id === 'fullname') return null

                const uniqueValues = Array.from(column.getFacetedUniqueValues().keys())
                  .sort()
                  .slice(0, 50);

                const currentFilterValue = (column.getFilterValue() || []) as string[];

                return (
                  <DropdownMenuSub key={column.id}>
                    <DropdownMenuSubTrigger>
                      <span>{column.id.replace(/_/g, ' ')}</span>
                    </DropdownMenuSubTrigger>
                    <DropdownMenuPortal>
                      <DropdownMenuSubContent className="max-h-60 overflow-y-auto">
                        {uniqueValues.map((value) => (
                          <DropdownMenuCheckboxItem
                            key={value}
                            checked={currentFilterValue.includes(String(value))}
                            onCheckedChange={(checked) => {
                              if (checked) {
                                column.setFilterValue([...currentFilterValue, String(value)]);
                              } else {
                                column.setFilterValue(currentFilterValue.filter((v) => v !== String(value)));
                              }
                            }}
                          >
                            {String(value)}
                          </DropdownMenuCheckboxItem>
                        ))}
                        {uniqueValues.length === 0 && (
                            <DropdownMenuLabel className="text-gray-500 italic">No values found.</DropdownMenuLabel>
                        )}
                      </DropdownMenuSubContent>
                    </DropdownMenuPortal>
                  </DropdownMenuSub>
                )
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {/* Column Visibility Dropdown */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="ml-auto">
              Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {table
              .getAllColumns()
              .filter(
                (column) => column.getCanHide() && column.id !== 'actions' && column.id !== 'documents'
              )
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className="capitalize"
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                  >
                    {column.id.replace(/_/g, ' ')}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      <Table>
        <TableHeader className="bg-green-600">
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                return (
                  <TableHead className="text-white" key={header.id}>
                    {header.isPlaceholder
                      ? null
                      : flexRender(header.column.columnDef.header, header.getContext())}
                  </TableHead>
                )
              })}
            </TableRow>
          ))}
        </TableHeader>

        <TableBody>
          {table.getRowModel().rows?.length ? (
            table.getRowModel().rows.map((row) => (
              <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                {row.getVisibleCells().map((cell) => (
                  <TableCell key={cell.id} className="py-1">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </TableCell>
                ))}
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={columns.length} className="h-24 text-center">
                No results.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  )
}