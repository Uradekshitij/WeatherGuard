import {
useMutation,
useQueryClient,
} from '@tanstack/react-query';

import api from '../api/axios';

export const useRejectUser = () => {
const queryClient =
useQueryClient();

return useMutation({
mutationFn: async (
id: string,
) => {
return api.patch(
`/users/${id}/reject`,
);
},


onSuccess: () => {
  queryClient.invalidateQueries({
    queryKey: ['pending-users'],
  });

  queryClient.invalidateQueries({
    queryKey: ['approved-users'],
  });
},


});
};
