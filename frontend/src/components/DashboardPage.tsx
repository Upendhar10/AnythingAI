import Greeting from "../features/profile/components/Greeting";
import TaskList from "../features/tasks/components/TaskList";
import Header from "../features/profile/components/Header";

const DashboardPage = () => {
  return (
    <div className="p-6 space-y-6">
      <Header/>
      <Greeting username="Upendhar" />
      <TaskList/>
    </div>
  );
};

export default DashboardPage
