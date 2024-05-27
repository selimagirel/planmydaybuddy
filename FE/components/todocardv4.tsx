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
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

export function TodoCardv4({
  id,
  title,
  complete,
  startTime,
  endTime,
  info,
  prioritization,
}: TodoItemProps) {
  const router = useRouter();
  const [inputValue, setInputValue] = useState(title);
  const [generation, setGeneration] = useState<SubItemProps[]>([]);

  return (
    <>
        <table className="table">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr>
              <th>
                <label>
                  <input
                    id={id}
                    type="checkbox"
                    defaultChecked={complete}
                    className="checkbox checkbox-sm checkbox-success cursor-pointer peer"
                  />
                </label>
              </th>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src="/2.jpeg" alt="Avatar Tailwind CSS Component" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{title}</div>
                    <div className="text-sm opacity-50">
                      <span className="flex items-center justify-between">
                        {startTime} - {endTime}
                        <CalendarIcon className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </div>
              </td>
              <td className="md:text-sm max-w-sm text-lg text-center">
                {info}
              </td>
              <td>
                <Badge
                  className={`rounded-sm border px-2 text-black ${
                    prioritization === "Urgent"
                      ? "bg-red-400 peer-checked:line-through peer-checked:text-black"
                      : "bg-green-400 peer-checked:line-through peer-checked:text-black"
                  }`}
                >
                  {prioritization}
                </Badge>
              </td>
              <th className="flex items-center justify-between mt-4 gap-2">
                <button className="btn btn-xs">Details</button>
                <button
                  onClick={() => ({})}
                  className="btn btn-xs"
                >
                  {<Trash2Icon className="h-4 w-4" />}
                </button>
              </th>
            </tr>
          </tbody>
        </table>
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
