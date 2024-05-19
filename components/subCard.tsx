"use client";

export type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  startTime: string;
  endTime: string;
  info: string;
  prioritization: string;
};

import {
  AccordionTrigger,
  AccordionContent,
  AccordionItem,
  Accordion,
} from "@/components/ui/accordion";
import { JSX, SVGProps, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Clock9Icon, Trash2Icon } from "lucide-react";
import { SubItemProps, generateSubtask } from "@/app/planner/actions";

export function SubCard({
  id,
  title,
  complete,
  startTime,
  endTime,
  info,
  prioritization,
}: TodoItemProps) {
  const [inputValue, setInputValue] = useState(title);
  const [generation, setGeneration] = useState<SubItemProps[]>([]);


  return (
    <>
      <div className="">
        <Accordion className="space-y-4" collapsible type="single">
          <AccordionItem value="todo-1">
            <AccordionTrigger className="flex items-center justify-between  rounded-lg shadow-sm px-4 py-3 ">
              <div className="flex items-center space-x-3">
                <input
                  id={id}
                  type="checkbox"
                  className="cursor-pointer peer"
                  defaultChecked={complete}
                  onChange={() => ({})}
                />
                <label
                  htmlFor={id}
                  className="cursor-pointer peer-checked:line-through peer-checked:text-green-400"
                >
                  {title}
                </label>
                <label
                  className={`rounded-sm border px-2 text-black ${
                    prioritization === "Urgent"
                      ? "bg-red-400 peer-checked:line-through peer-checked:text-black"
                      : "bg-green-400 peer-checked:line-through peer-checked:text-black"
                  }`}
                >
                  {prioritization}
                </label>
                <Clock9Icon className="h-4 w-4" />
                <label
                  htmlFor={id}
                  className="cursor-pointer peer-checked:line-through peer-checked:text-red-300"
                >
                  {startTime}
                </label>
              </div>
            </AccordionTrigger>
            <AccordionContent className=" rounded-lg shadow-sm p-4 ">
              <div className="space-y-2">
                <p>{info}</p>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <CalendarIcon className="h-5 w-5" />
                  <span>
                    {startTime} - {endTime}
                  </span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Button onClick={() => ({})} size="sm">
                    {<Trash2Icon className="h-4 w-4" />}
                  </Button>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </>
  );
}

function CalendarIcon(
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
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  );
}

function ChevronDownIcon(
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
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function NotebookIcon(
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
      <path d="M2 6h4" />
      <path d="M2 10h4" />
      <path d="M2 14h4" />
      <path d="M2 18h4" />
      <rect width="16" height="20" x="4" y="2" rx="2" />
      <path d="M16 2v20" />
    </svg>
  );
}
function setOpenModalDeleted(arg0: boolean) {
  throw new Error("Function not implemented.");
}
