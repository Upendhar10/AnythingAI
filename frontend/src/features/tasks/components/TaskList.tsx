import { useState, useMemo } from "react";
import { FaSearch } from "react-icons/fa";
import TaskCard from "../components/TaskCard";
import { mockTasks } from "../data/mockData";

const TaskList = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const statusOptions = ["all", "todo", "in-progress", "completed"];

  const filteredTasks = useMemo(() => {
    return mockTasks.filter((task) => {
      const matchesSearch =
        task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        task.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesStatus =
        statusFilter === "all" || task.status === statusFilter;

      return matchesSearch && matchesStatus;
    });
  }, [searchQuery, statusFilter]);

  const clearFilters = () => {
    setSearchQuery("");
    setStatusFilter("all");
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 gap-4">
        <h1 className="text-2xl font-bold">
          My Tasks
          <span className="ml-3 text-sm bg-blue-100 text-gray-700 px-3 py-1 rounded-full">
            {filteredTasks.length} / {mockTasks.length}
          </span>
        </h1>

        {(searchQuery || statusFilter !== "all") && (
          <button
            onClick={clearFilters}
            className="text-sm text-red-500 hover:text-red-600"
          >
            Clear Filters
          </button>
        )}
      </div>

      <div className="relative mb-5 ">
        <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full border rounded-lg pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {statusOptions.map((status) => (
          <button
            key={status}
            onClick={() => setStatusFilter(status)}
            className={`px-4 py-1.5 rounded-full text-sm transition ${
              statusFilter === status
                ? "bg-gray-600 text-white"
                : "bg-gray-100 text-black hover:bg-gray-200"
            }`}
          >
            {status === "all"
              ? "All"
              : status === "in-progress"
              ? "In Progress"
              : status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {filteredTasks.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          <p className="text-lg font-medium">No tasks found</p>
          <p className="text-sm">Try adjusting your search or filters.</p>
        </div>
      ) : (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
      )}
    </div>
  );
};

export default TaskList;
