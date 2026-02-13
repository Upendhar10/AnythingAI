import { useState } from "react";
import type { Task } from "../types";
import { FaEdit } from "react-icons/fa";

interface TaskCardProps {
  task: Task;
}

const TaskCard = ({ task }: TaskCardProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState<Task>(task);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setEditedTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSave = () => {
    setIsEditing(false);
    // Later: dispatch(updateTask(editedTask))
    console.log("Updated Task:", editedTask);
  };

  const handleCancel = () => {
    setEditedTask(task);
    setIsEditing(false);
  };

  return (
    <div className="border rounded-lg p-4 shadow-sm  space-y-3">
      {isEditing ? (
        <>
          <input
            type="text"
            name="title"
            value={editedTask.title}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          <textarea
            name="description"
            value={editedTask.description}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          />

          <select
            name="status"
            value={editedTask.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2 bg-black"
          >
            <option value="todo">Todo</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>

          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-gray-500 text-white rounded hover:bg-gray-400 transition"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 bg-gray-500 rounded hover:bg-gray-400 transition"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold">{editedTask.title}</h3>

            <div>
              <button
                onClick={() => setIsEditing(true)}
                className="mt-3 text-xl text-white hover:text-blue-400 cursor-pointer"
              >
                <FaEdit/>
              </button>
            </div>
          </div>

          <p className="text-gray-600">{editedTask.description}</p>

          <span
            className={`inline-block px-3 py-1 text-sm rounded-full ${
              editedTask.status === "completed"
                ? "bg-green-100 text-green-700"
                : editedTask.status === "in-progress"
                ? "bg-yellow-100 text-yellow-700"
                : "bg-gray-100 text-gray-700"
            }`}
          >
            {editedTask.status}
          </span>
        </>
      )}
    </div>
  );
};

export default TaskCard;
