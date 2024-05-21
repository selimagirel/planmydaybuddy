"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";

import Link from "next/link";
import { HomeIcon } from "@radix-ui/react-icons";
import { TodoItemProps, generateTasks } from "./actions";
import { Textarea } from "@/components/ui/textarea";
import { TodoCardv4 } from "@/components/todocardv4";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/theme-toggle";

export default function Page() {
  const [inputValue, setInputValue] = useState<string>("");
  const [generation, setGeneration] = useState<TodoItemProps[]>([]);
  const [apiKey, setApiKey] = useState("");

  // const handleInputChange = (event: any) => {
  //   setApiKey(event.target.value);
  // };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setApiKey(event.target.value);
  };

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   // Save the API key in an environment variable or use it directly in your application
  //   process.env.OPENAI_API_KEY = apiKey;
  // };

  const handleApiKeySubmit = (event: React.FormEvent) => {
    event.preventDefault();
    toast("API key submitted", {
      description: "Now you can start planning!",
      action: {
        label: "Close",
        onClick: () => console.log("Close"),
      },
    });
  };

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
            <ThemeToggle />
          </div>
          <div className="text-center space-y-2 mb-4">
            <h1 className="text-3xl font-bold">Plan Buddy</h1>
            <p className="text-gray-500 dark:text-gray-400">
              To help you organize your day, please follow these steps: submit
              your API key, outline your general daily structure, and receive a
              productive daily plan.
            </p>
          </div>
          <div className="w-full">
            <form onSubmit={handleApiKeySubmit} className="flex justify-center">
              <label className="">
                <span className="mr-2">API KEY</span>
                <input
                  className="border bg-slate-50"
                  type="text"
                  value={apiKey}
                  placeholder="Write your own api key"
                  onChange={handleInputChange}
                />
                <Button
                  type="submit"
                  value="Submit"
                  variant="outline"
                  className="ml-3 mb-2"
                >
                  Submit
                </Button>
              </label>
            </form>
            <form
              className="flex items-center mb-4"
              onSubmit={async (e) => {
                setInputValue("");
                process.env.OPENAI_API_KEY = apiKey;
              }}
            >
              <Textarea
                className="rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary flex-1 mr-4"
                placeholder=" For example, Your day might look like this: wake up at 6 AM, breakfast at 7 AM, work until 9 AM, school, return by 4 PM, study until 11 PM."
                value={inputValue}
                onChange={(event) => {
                  setInputValue(event.target.value);
                }}
              />
            </form>
            <Button
              className=""
              onClick={async () => {
                
                const result = await generateTasks(inputValue, apiKey);

                setGeneration(result);
              }}
            >
              Start Planning
            </Button>
          </div>
        </div>
        <div className="max-h-[450px] overflow-auto space-y-2 w-[700px]">
          {generation.map((todo: TodoItemProps) => (
            <div
              className="w-full max-w-6xl max-h-[500px] overflow-auto"
              key={todo.id}
            >
              <TodoCardv4
                id={todo.id}
                title={todo.title}
                complete={todo.complete}
                startTime={todo.startTime}
                endTime={todo.endTime}
                info={todo.info}
                key={todo.id}
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
