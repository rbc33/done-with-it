import { ApiResponse } from "apisauce";
import apiClient from "./client";

export interface LoginProps {
  email: string;
  password: string;
}

const login = ({ email, password }: LoginProps): Promise<ApiResponse<string>> =>
  apiClient.post("/auth", { email, password });

export default { login };
