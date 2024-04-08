import { ApiResponse, create } from "apisauce";
import { AxiosRequestConfig } from "axios";
import cache from "../utility/cache";
import authStore from "../auth/storage";
import settings from "../config/settings";

const apiClient = create({
  baseURL: settings.apiUrl,
});
apiClient.addAsyncRequestTransform(async (request) => {
  const authToken = await authStore.getToken();
  if (!authToken) return;
  request.headers!["x-auth-token"] = authToken;
});

const get = apiClient.get;
apiClient.get = async <T, U = T>(
  url: string,
  params?: any,
  axiosConfig?: AxiosRequestConfig<any>
): Promise<ApiResponse<T, U>> => {
  const response = await get<T, U>(url, params, axiosConfig);
  if (response.ok) {
    await cache.store({ key: url, value: response.data });
  } else {
    const cachedData = await cache.get(url);
    if (cachedData) {
      return { ok: true, data: cachedData } as ApiResponse<T, U>;
    }
  }
  return response as ApiResponse<T, U>;
};

export default apiClient;
