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
  {
    id: "4",
    title: "Create Profile Page",
    description: "Display user details and allow editing full name.",
    status: "completed",
  },
  {
    id: "5",
    title: "Setup Redux Toolkit",
    description: "Configure store, slices, and async thunks.",
    status: "completed",
  },
  {
    id: "6",
    title: "Integrate Search Feature",
    description: "Filter tasks dynamically based on search query.",
    status: "in-progress",
  },
  {
    id: "7",
    title: "Improve UI Styling",
    description: "Enhance overall UI using Tailwind CSS.",
    status: "todo",
  },
  {
    id: "8",
    title: "Handle Page Refresh Auth",
    description: "Persist user session using loadUser endpoint.",
    status: "completed",
  },
  {
    id: "9",
    title: "Configure CORS",
    description: "Allow frontend and backend communication locally.",
    status: "completed",
  },
  {
    id: "10",
    title: "Logout Functionality",
    description: "Clear token and redirect to landing page.",
    status: "todo",
  },
];

