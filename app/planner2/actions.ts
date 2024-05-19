'use server'

import { generateObject, generateText } from 'ai'
import { openai } from '@ai-sdk/openai'
import { z } from 'zod'

export type TodoItemProps = {
  id: string;
  title: string;
  complete: boolean;
  startTime: string;
  endTime: string;
  info: string;
  prioritization: string;
};
export type SubItemProps = {
  id: string;
  title: string;
  complete: boolean;
  startTime: string;
  endTime: string;
  info: string;
  prioritization: string;
};
export type InfoItemProps = {
  info: string;
};


export async function generateTasks(content: string) {
  'use server'


  const result = await generateObject({
    model: openai('gpt-4o'),
    system: `"Generate a daily task list based on the user’s input ${content}. Each task should have the following structure:
    {
      "taskName": "Task Name",
      "task": "Task Description",
      "info": "Additional Information",
      "duration": "Task Duration",
      "startTime": "Task Start Time",
      "endTime": "Task End Time",
      "prioritization": "important or Urgent"
    },
    For example, a task could be:
    {
      "taskName": "Workout",
      "task": "Cardio and strength training session",
      "info": "Visit the gym for a 30-minute cardio session followed by other exercises",
      "duration": "30 minutes",
      "startTime": "6 am",
      "endTime": "6.30 am",
      "prioritization": "Important"
    },
    Please ensure that the tasks are created according to the user’s input and follow the timeline of tasks to generate the user’s day.
  `,
    messages: [{ role: "user", content: content }],
    schema: z.object({
      todo: z.array(
        z.object({
          title: z.string().describe("taskname that it needs to be done"),
          startTime: z.string().describe("time for starting the task"),
          endTime: z.string().describe("time for finishing the task"),
          info: z.string().describe("additional task details and strategies"),
          prioritization: z
            .string()
            .describe("important or urgency of the task"),
          id: z.string().describe("id"),
          complete: z.boolean().describe("True or false at start its false"),
        })
      ),
    }),
  });

  const generatedTasks: TodoItemProps[] = result.object.todo.map(
    (task: any) => ({
      id: task.id,
      title: task.title,
      complete: task.complete,
      startTime: task.startTime,
      endTime: task.endTime,
      info: task.info,
      prioritization: task.prioritization,
    })
  );



  return generatedTasks;
}

export async function generateInfo(content: string) {
  'use server'


  const result2 = await generateObject({
    model: openai('gpt-4o'),
    system: `Generate detailed and relevant information about the task: ${content}. Ensure the information is specific to the nature of the task. For example:

    Input: "Prepare and eat a hearty breakfast to fuel the day's activities."
    info: "here is a quick try  smoothie bowl. Ingredients:

    1 ripe banana
    1 cup of mixed frozen berries (such as strawberries, blueberries, raspberries)
    1/2 cup of spinach or kale (fresh or frozen)
    1/2 cup of yogurt (Greek yogurt or any plant-based yogurt for a dairy-free option)
    1/4 cup of milk (dairy or plant-based)
    1 tablespoon of honey or maple syrup (optional, for sweetness)
    Toppings of your choice (granola, sliced fruits, nuts, seeds)
    Instructions:
    
    In a blender, combine the banana, mixed berries, spinach or kale, yogurt, milk, and honey or maple syrup (if using).
    Blend until smooth and creamy. If the smoothie is too thick, you can add more milk to reach your desired consistency.
    Pour the smoothie into a bowl.
    Top with your favorite toppings such as granola, sliced fruits, nuts, and seeds.
    Enjoy your nutritious and delicious smoothie bowl!"

    make it diffirent but similer structre 
    `,
    messages: [{ role: "user", content: content }],
    schema: z.object({
      info: z.array(
        z.object({
          info: z.string().describe("detailed and relevant information about the task:"),
        })
      ),
    }),
  });

  const generatedInfo: InfoItemProps[] = result2.object.info.map(
    (info: any) => ({
      info: info.info,
    })
  );

  return generatedInfo;
}
export async function generateSubtask(content: string) {
  'use server'


  const result2 = await generateObject({
    model: openai('gpt-4o'),
    system: `Generate detailed and relevant subtasks for the following task: ${content}. If the task can be split, divide it into smaller, manageable subtasks; if not, leave it as is. dont forget to check the timing on the task`,
    messages: [{ role: "user", content: content }],
    schema: z.object({
      sub: z.array(
        z.object({
          title: z.string().describe("taskname that it needs to be done"),
          startTime: z.string().describe("time for starting the task"),
          endTime: z.string().describe("time for finishing the task"),
          info: z.string().describe("additional task details and strategies"),
          prioritization: z
            .string()
            .describe("important or urgency of the task"),
          id: z.string().describe("id"),
          complete: z.boolean().describe("True or false at start its false"),
        })
      ),
    }),
  });

  const generatedSub: SubItemProps[] = result2.object.sub.map(
    (sub: any) => ({
      id: sub.id,
      title: sub.title,
      complete: sub.complete,
      startTime: sub.startTime,
      endTime: sub.endTime,
      info: sub.info,
      prioritization: sub.prioritization,
    })
  );

  return generatedSub;
}