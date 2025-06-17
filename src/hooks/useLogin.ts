import { useState } from 'react';
import apiService from '@/utils/apiService';

type LoginPayload = {
  email: string;
  password: string;
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<any>(null);

  const login = async (payload: LoginPayload) => {
    setLoading(true);
    setError(null);

    try {
      const response = await apiService.post('/auth/login', payload);
      setData(response.data);
      // Optionally store token, set user state, etc.
      return response.data;
    } catch (err: any) {
      setError(err.response?.data?.message || 'Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error, data };
};

export default useLogin;
