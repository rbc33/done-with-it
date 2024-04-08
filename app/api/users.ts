import { ApiResponse } from "apisauce";
import { User } from "../auth/context";

export interface RegisterProps {
  name: string;
  email: string;
  password: string;
}
export type RegisterError = {
  error: string;
};

import client from "./client";

const register = (
  userInfo: RegisterProps
): Promise<ApiResponse<User, RegisterError>> => client.post("/users", userInfo);

export default { register };
