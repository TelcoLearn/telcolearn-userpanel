import { createAxiosInstance } from "@/config/api-config";
import { ApiResponse } from "@/types/common.type";
import { AxiosRequestConfig } from "axios";

export const createApiClient = (baseURL: string) => {
  const axiosInstance = createAxiosInstance(baseURL);

  const request = async <T>(
    config: AxiosRequestConfig
  ): Promise<ApiResponse<T>> => {
    try {
      const response = await axiosInstance.request<T>(config);
      return {
        data: response.data,
        status: response.status,
      };
    } catch (error) {
      throw handleError(error);
    }
  };

  return {
    get: async <T>(url: string, params?: any): Promise<T> => {
      const response = await request<T>({ method: "GET", url, params });
      return response.data;
    },

    post: async <T>(url: string, data?: any): Promise<T> => {
      const response = await request<T>({ method: "POST", url, data });
      return response.data;
    },

    put: async <T>(url: string, data?: any): Promise<T> => {
      const response = await request<T>({ method: "PUT", url, data });
      return response.data;
    },

    patch: async <T>(url: string, data?: any): Promise<T> => {
      const response = await request<T>({ method: "PATCH", url, data });
      return response.data;
    },

    delete: async <T>(url: string, data?: any): Promise<T> => {
      const response = await request<T>({
        method: "DELETE",
        url,
        data,
      });
      return response.data;
    },
  };
};

export const handleError = (error: any) => {
  const status = error.response?.status;
  const data = error.response?.data;

  return {
    status,
    message: data?.message || "An error occurred",
    data: data?.errors || data,
  };
};
