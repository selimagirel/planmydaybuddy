"use client";
import { TodoTable } from "@/components/todos/todos-table";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";
import { TodoItemProps, generateTasks } from "./actions";

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
    <div className="w-full h-full p-10">
      <div className="space-y-5 text-center">
        <h1 className="text-2xl font-bold">Plan your day</h1>
        <p className="text-md">
          To help you organize your day, please follow these steps: submit your
          API key, outline your general daily structure, and receive a
          productive daily plan.
        </p>
      </div>
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
        className="mt-10 space-y-5"
        onSubmit={async (e) => {
          setInputValue("");
          process.env.OPENAI_API_KEY = apiKey;
        }}
      >
        <Label className="text-lg font-semibold">Enter your prompt</Label>
        <Textarea
          placeholder=" For example, Your day might look like this: wake up at 6 AM, breakfast at 7 AM, work until 9 AM, school, return by 4 PM, study until 11 PM."
          onChange={(event) => {
            setInputValue(event.target.value);
          }}
        />
      </form>
      <div className="w-full flex justify-end items-end mt-2">
        <Button
          onClick={async () => {
            const result = await generateTasks(inputValue, apiKey);

            setGeneration(result);
          }}
        >
          Start Planning
        </Button>
      </div>
      <div className="mt-10 overflow-auto mb-10">
        <h1 className="text-2xl font-bold">Your tasks for the day</h1>
        <TodoTable todos={generation} />
      </div>
    </div>
  );
}
