import type { Task } from "../types";

export const mockTasks: Task[] = [
  {
    id: "1",
    title: "Design Dashboard Layout",
    description: "Create the basic dashboard layout with sidebar and header.",
    status: "in-progress",
  },
  {
    id: "2",
    title: "Implement Authentication",
    description: "Setup login and register with JWT.",
    status: "completed",
  },
  {
    id: "3",
    title: "Build Task Filtering",
    description: "Add filtering functionality based on status.",
    status: "todo",
  },
];
