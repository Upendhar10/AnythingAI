import axiosClient from "../../api/axios";

type LoginPayload = {
  email: string;
  password: string;
};

type RegisterPayload = {
  fullName: string;
  email: string;
  password: string;
};

export const authService = {
  login(payload: LoginPayload) {
    return axiosClient.post("/auth/login", payload);
  },
  register(payload: RegisterPayload) {
    return axiosClient.post("/auth/register", payload);
  },
  getMe(){
    return axiosClient.get("/auth/me");
  }
};