import { lazy, Suspense, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./app/hooks";
import { loadUserThunk } from "./features/auth/authThunks";
import { setInitialized } from "./features/auth/authSlice";

import { Routes, Route } from "react-router-dom";
import PublicAppLayout from "./layouts/PublicAppLayout";
import ProtectedAppLayout from "./layouts/ProtectedAppLayout";
import {Loader} from "./features/auth/components/Branding";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./features/auth/pages/LoginPage";
import RegisterPage from "./features/auth/pages/RegisterPage";

const DashboardPage = lazy(() => import("./pages/DashboardPage"));
const ProfilePage = lazy(() => import("./features/profile/ProfilePage"));

function App() {
  const dispatch = useAppDispatch();

  const token = useAppSelector((state) => state.auth.token);
  const isInitialized = useAppSelector((state) => state.auth.isInitialized);

  useEffect(() => {
    const initializeAuth = async () => {
      if (token) {
        await dispatch(loadUserThunk());
      } else {
        dispatch(setInitialized());
      }
    };

    initializeAuth();
  }, [dispatch, token]);

  if (!isInitialized) {
    return <Loader />;
  }

  return (
    <Suspense fallback={<Loader />}>
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
          <Route path="/profile" element={<ProfilePage />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
