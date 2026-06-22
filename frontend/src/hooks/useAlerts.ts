import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

export const useAlerts = () => {
return useQuery({
queryKey: ['alerts'],


queryFn: async () => {
  const { data } =
    await api.get('/weather/alerts');

  return data;
},

refetchInterval: 60000,


});
};
