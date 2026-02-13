import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

function PublicAppLayout() {
  const { isAuthenticated, isInitialized } = useAppSelector( (state) => state.auth);

  if (!isInitialized) {
    return <div>Loading...</div>;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default PublicAppLayout;
