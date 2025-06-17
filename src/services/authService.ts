import apiService from '@/utils/apiService';

export const login = (data: { email: string; password: string }) => {
  return apiService.post('/auth/login', data);
};

export const getProfile = () => {
  return apiService.get('/user/profile');
};