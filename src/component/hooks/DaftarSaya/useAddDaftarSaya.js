import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import { Notification } from "../../UI/Elements/Notification";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const useAddDaftarSaya = (endpoint) => {
  const authHeader = useAuthHeader(); 
  const mutation = useMutation({
    mutationFn: async( {id, image, neweps, top10, title} ) => {
      const response = await axiosInstance.post(`/${endpoint}`, {
        id,
        image,
        neweps,
        top10,
        title,
      },
      {
        headers: {
          Authorization: authHeader,  
        },
      });
      return response.data;
    },
   
  });

  const addDaftarSaya = (id, image, neweps, top10, title) => {
    const mutationPromise = mutation.mutateAsync({ id, image, neweps, top10, title });
      
    Notification("Item added successfully", "promise", mutationPromise);
  };

  return {
    addDaftarSaya
  };
};

export default useAddDaftarSaya;
