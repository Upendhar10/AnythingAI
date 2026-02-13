import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

function ProtectedAppLayout() {
  const { isAuthenticated, isInitialized } = useAppSelector((state) => state.auth);

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
}

export default ProtectedAppLayout;
