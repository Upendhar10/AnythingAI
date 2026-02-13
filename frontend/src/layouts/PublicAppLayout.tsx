import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

import {Loader} from "../features/auth/components/Branding"

function PublicAppLayout() {
  const { isAuthenticated, isInitialized } = useAppSelector( (state) => state.auth);

  if (!isInitialized) {
    return <Loader/>;
  }

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
}

export default PublicAppLayout;
