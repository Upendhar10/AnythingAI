import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { loadUserThunk } from "./features/auth/authThunks";

import { Routes, Route } from "react-router-dom";
import PublicAppLayout from "./layouts/PublicAppLayout";
import ProtectedAppLayout from "./layouts/ProtectedAppLayout";

import LandingPage from "./components/LandingPage";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";
import DashboardPage from "./components/DashboardPage";

function App() {

  const dispatch = useAppDispatch();
  const token = useAppSelector((state) => state.auth.token);
  const isInitialized = useAppSelector((state) => state.auth.isInitialized);

  useEffect(() => {
    if (token) {
      dispatch(loadUserThunk());
    } else {
      // no token → mark initialized
      dispatch({ type: "auth/setInitialized" });
    }
  }, []);

  if (!isInitialized) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

  return (
    <Routes>

      {/* Public Routes */}
      <Route element={<PublicAppLayout />}>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<ProtectedAppLayout />}>
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>

    </Routes>
  )
}

export default App
