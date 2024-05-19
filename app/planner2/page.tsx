"use client";

import { useState } from "react";
import { useUIState, useActions } from "ai/rsc";

import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { Input } from "@/components/ui/input";

import Link from "next/link";
import { ChevronDownIcon, HomeIcon } from "@radix-ui/react-icons";
import { TodoItemProps, generateTasks } from "./actions";
import { Textarea } from "@/components/ui/textarea";
import { TodoCardv4 } from "@/components/todocardv4";

export default function Page() {
  const [inputValue, setInputValue] = useState("");
  const [generation, setGeneration] = useState<TodoItemProps[]>([]);

  return (
    <div
      key="1"
      className="flex flex-col items-center justify-center min-h-screen px-4 py-8 w-full "
    >
      <div className="">
        <div className="w-full max-w-md ml-[140px]">
          <div className="flex items-center justify-between mb-6">
            <Link
              className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 py-2 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href="/"
            >
              <HomeIcon className="h-4 w-4 mr-2" />
              Home
            </Link>
          </div>
          <div className="text-center space-y-2 mb-4">
            {/* <h1 className="text-3xl font-bold">Daily Tasks</h1> */}
            <p className="text-gray-500 dark:text-gray-400">
              Enter your day and let us generate your daily to-do list.
            </p>
          </div>
          <div className="w-full">
            <form
              className="flex items-center mb-4"
              onSubmit={async (e) => {
                setInputValue("");
              }}
            >
              <Textarea
                className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary flex-1 mr-4"
                placeholder="Write your day here"
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
            </form>
            <Button
              className="rounded-md bg-primary px-4 py-2 text-white hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              onClick={async () => {
                const result = await generateTasks(inputValue);

                setGeneration(result);
              }}
            >
              Generate
            </Button>
          </div>
        </div>
        <div className="max-h-[450px] overflow-auto space-y-2 w-[700px]">
          {generation.map((todo: TodoItemProps, index: number) => (
            <div
              className="w-full max-w-6xl max-h-[500px] overflow-auto"
              key={index}
            >
              <TodoCardv4
                id={todo.id}
                title={todo.title}
                complete={todo.complete}
                startTime={todo.startTime}
                endTime={todo.endTime}
                info={todo.info}
                key={index}
                prioritization={todo.prioritization}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CalendarDaysIcon(
  props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>
) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
      <path d="M8 14h.01" />
      <path d="M12 14h.01" />
      <path d="M16 14h.01" />
      <path d="M8 18h.01" />
      <path d="M12 18h.01" />
      <path d="M16 18h.01" />
    </svg>
  );
}
