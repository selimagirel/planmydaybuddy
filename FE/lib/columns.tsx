"use client";

import type { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "@/components/tanstack-react-table/data-table-column-header";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { TodoItemProps } from "@/app/dashboard/actions";

type TodoType = {
  id: string;
  title: string;
  complete: boolean;
  startTime: string;
  endTime: string;
  info: string;
  prioritization: string;
};

export const todoColumns: ColumnDef<TodoItemProps>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    id: "title",
    header: ({ column }) => (
      <div>
        <DataTableColumnHeader column={column} title="title" />
      </div>
    ),
    cell: ({ row }) => <div className="min-w-max">{row.getValue("title")}</div>,
    accessorKey: "title",
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: "startTime",
    header: ({ column }) => (
      <div>
        <DataTableColumnHeader column={column} title="Start Time" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="min-w-max">{row.getValue("startTime")}</div>
    ),
    accessorKey: "startTime",
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: "endTime",
    header: ({ column }) => (
      <div>
        <DataTableColumnHeader column={column} title="endTime" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="min-w-max">{row.getValue("endTime")}</div>
    ),
    accessorKey: "endTime",
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: "info",
    header: ({ column }) => (
      <div>
        <DataTableColumnHeader column={column} title="Info" />
      </div>
    ),
    cell: ({ row }) => <div className="min-w-max">{row.getValue("info")}</div>,
    accessorKey: "info",
    enableSorting: true,
    enableHiding: true,
  },
  {
    id: "prioritization",
    header: ({ column }) => (
      <div>
        <DataTableColumnHeader column={column} title="Prioritization" />
      </div>
    ),
    cell: ({ row }) => (
      <div className="min-w-max">{row.getValue("prioritization")}</div>
    ),
    accessorKey: "prioritization",
    enableSorting: true,
    enableHiding: true,
  },
];
