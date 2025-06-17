import axiosInstance from './axiosInstance';

const apiService = {
  get: <T>(url: string, params?: any) => axiosInstance.get<T>(url, { params }),

  post: <T>(url: string, data?: any) => axiosInstance.post<T>(url, data),

  put: <T>(url: string, data?: any) => axiosInstance.put<T>(url, data),

  patch: <T>(url: string, data?: any) => axiosInstance.patch<T>(url, data),

  delete: <T>(url: string, params?: any) => axiosInstance.delete<T>(url, { params }),
};

export default apiService;
