import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

import {Loader} from "../features/auth/components/Branding"

function ProtectedAppLayout() {
  const { isAuthenticated, isInitialized } = useAppSelector((state) => state.auth);

  if (!isInitialized) {
    return <Loader/>;
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
