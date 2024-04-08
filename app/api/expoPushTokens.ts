import apiClient from "./client";

interface RegisterPushTokenProps {
  pushToken: string;
}

const register = ({ pushToken }: RegisterPushTokenProps) =>
  apiClient.post("/expoPushTokens", { token: pushToken });

export default { register };
