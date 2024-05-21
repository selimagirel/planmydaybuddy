"use client";

import { todoColumns } from "@/lib/columns";
import { DataTable } from "../tanstack-react-table/data-table";
import { useState } from "react";
import { Card } from "../ui/card";
import { TodoItemProps } from "@/app/planner2/actions";

type TodoTableProps = {
  todos: TodoItemProps[];
};

export const TodoTable = ({ todos }: TodoTableProps) => {


  return (
    <>
      {todos ? (
        <DataTable columns={todoColumns} data={todos} />
      ) : (
        <Card className="p-4 text-center text-md mt-10">
          Outline your general daily structure to receive a productive daily
          plan.
        </Card>
      )}

    </>
  );
};
