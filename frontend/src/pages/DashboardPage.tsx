import Greeting from "../features/profile/components/Greeting";
import TaskList from "../features/tasks/components/TaskList";
import Header from "../features/profile/components/Header";

import { useAppSelector } from "../app/hooks";

const DashboardPage = () => {
  const user = useAppSelector((state) => state.auth.user)
  const fullName = user?.fullName;
  return (
    <div className="p-6 space-y-6">
      <Header/>
      <Greeting name={fullName?.split(" ")[0]} />
      <TaskList/>
    </div>
  );
};

export default DashboardPage
