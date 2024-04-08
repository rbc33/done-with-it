import { ApiResponse } from "apisauce";
import { useState } from "react";

const useApi = <T, U>(apiFunc: (arg?: any) => Promise<ApiResponse<T, U>>) => {
  const [data, setData] = useState<T>();
  const [error, setError] = useState<boolean>(false);
  const [isloading, setIsLoading] = useState(false);

  const request = async (args?: any) => {
    setIsLoading(true);
    const response = await apiFunc(args);
    setIsLoading(false);

    setError(!response.ok);
    if (response.data !== undefined) {
      setData(response.data as T);
    }
    return response;
  };

  return { data, error, isloading, request };
};
export default useApi;
