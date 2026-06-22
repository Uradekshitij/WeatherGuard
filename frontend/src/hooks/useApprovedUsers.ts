import { useQuery } from '@tanstack/react-query';
import api from '../api/axios';

export const useApprovedUsers = () => {
return useQuery({
queryKey: ['approved-users'],


queryFn: async () => {
  const { data } =
    await api.get('/users/approved');

  return data;
},


});
};
