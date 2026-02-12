import TaskCard from "../components/TaskCard";
import { mockTasks } from "../data/mockData";

const TaskList = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">My Tasks</h1>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {mockTasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
};

export default TaskList;
