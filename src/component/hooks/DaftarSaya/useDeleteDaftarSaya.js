import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import { Notification } from "../../UI/Elements/Notification";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const useDeleteDaftarSaya = (endpoint) => {
  const authHeader = useAuthHeader(); 

  const mutation = useMutation({
    mutationFn: async (id) => {
      const response = await axiosInstance.delete(`/${endpoint}/${id}`, {
        headers: {
          Authorization: authHeader,
        },
      });
      return response.data;
    },
  });

  const deleteDaftarSaya = (id) => {
    const mutationPromise = mutation.mutateAsync(id);

    Notification("Item deleted successfully", "promise", mutationPromise);
  };

  return {
    deleteDaftarSaya,
  };
};

export default useDeleteDaftarSaya;
