"use client";

import type { Table } from "@tanstack/react-table";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { ListRestart } from "lucide-react";
import { DataTableViewOptions } from "@/components/tanstack-react-table/data-table-view-options";
import { DataTableFacetedFilter } from "@/components/tanstack-react-table/data-table-faceted-filter";

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
  searchColumnName?: string;
  searchColumnPlaceholder?: string;
  facetedFilterColumn1?: string;
  facetedFilterColumn2?: string;
  facetedFilterColumn3?: string;
  facetedFilterColumnOptions1?: { label: string; value: string }[];
  facetedFilterColumnOptions2?: { label: string; value: string }[];
  facetedFilterColumnOptions3?: { label: string; value: string }[];
}

export function DataTableToolbar<TData>({
  table,
  searchColumnPlaceholder,
  facetedFilterColumn1,
  facetedFilterColumn2,
  facetedFilterColumn3,
  facetedFilterColumnOptions1,
  facetedFilterColumnOptions2,
  facetedFilterColumnOptions3,
  searchColumnName,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;
  const title1 = `${facetedFilterColumn1
    ?.charAt(0)
    .toUpperCase()}${facetedFilterColumn1?.slice(1)}`;
  const title2 = `${facetedFilterColumn2
    ?.charAt(0)
    .toUpperCase()}${facetedFilterColumn2?.slice(1)}`;
  const title3 = `${facetedFilterColumn3
    ?.charAt(0)
    .toUpperCase()}${facetedFilterColumn3?.slice(1)}`;
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-1 items-center space-x-2">
        {searchColumnName && (
          <Input
            placeholder={searchColumnPlaceholder}
            value={
              (table.getColumn(searchColumnName)?.getFilterValue() as string) ??
              ""
            }
            onChange={(event) =>
              table
                .getColumn(searchColumnName)
                ?.setFilterValue(event.target.value)
            }
            className="h-8 w-[150px] lg:w-[250px]"
          />
        )}
        {facetedFilterColumn1 && facetedFilterColumnOptions1 && (
          <DataTableFacetedFilter
            column={table.getColumn(facetedFilterColumn1)}
            title={title1}
            options={facetedFilterColumnOptions1}
          />
        )}
        {facetedFilterColumn2 && facetedFilterColumnOptions2 && (
          <DataTableFacetedFilter
            column={table.getColumn(facetedFilterColumn2)}
            title={title2}
            options={facetedFilterColumnOptions2}
          />
        )}
        {facetedFilterColumn3 && facetedFilterColumnOptions3 && (
          <DataTableFacetedFilter
            column={table.getColumn(facetedFilterColumn3)}
            title={title3}
            options={facetedFilterColumnOptions3}
          />
        )}
        {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <ListRestart className="ml-2 h-4 w-4" />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
