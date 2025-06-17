import { useState, useEffect, useCallback } from 'react';
import apiService from '@/utils/apiService';

type Method = 'get' | 'post' | 'put' | 'delete' | 'patch';

type UseApiProps = {
  method: Method;
  url: string;
  data?: any;
  params?: any;
  onSuccess?: (res: any) => void;
  onError?: (err: any) => void;
  manual?: boolean;
};

const useApi = ({
  method,
  url,
  data,
  params,
  onSuccess,
  onError,
  manual = false,
}: UseApiProps) => {
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(!manual);

  const callApi = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await apiService[method](url, method === 'get' ? params : data);
      setResponse(res.data);
      onSuccess?.(res.data);
    } catch (err: any) {
      setError(err);
      onError?.(err);
    } finally {
      setLoading(false);
    }
  }, [method, url, data, params, onSuccess, onError]);

  useEffect(() => {
    if (!manual) {
      callApi();
    }
  }, [callApi, manual]);

  return { response, error, loading, refetch: callApi };
};

export default useApi;
