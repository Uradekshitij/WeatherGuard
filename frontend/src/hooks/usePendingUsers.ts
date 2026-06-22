import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

export const usePendingUsers = () => {
return useQuery({
queryKey: ['pending-users'],


queryFn: async () => {
  const { data } =
    await api.get('/users/pending');

  return data;
},


});
};
