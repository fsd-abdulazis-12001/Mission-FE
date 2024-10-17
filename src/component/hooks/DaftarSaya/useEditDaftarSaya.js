import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import { Notification } from "../../UI/Elements/Notification";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

const useEditDaftarSaya = (endpoint) => {
  const authHeader = useAuthHeader(); 

    const mutation = useMutation({
        mutationFn: async ( {id, image} ) => {
            console.log("Sending to API:", { id,image});
            const response = await axiosInstance.patch(`/${endpoint}/${id}`, {
              "image":image
            },
            {
              headers: {
                Authorization: authHeader,  
              },
            }
          );
            return response.data;
        },
      });
  const editDaftarSaya = (id,image) => {
    if (!id || !image) {
        return Notification("idf or image url not found", "error");
    }
    console.log(image)
    const mutationPromise = mutation.mutateAsync({id,image});
    Notification("Item edited successfully", "promise", mutationPromise);
  };

  return {
    editDaftarSaya,
  };
 
}

export default useEditDaftarSaya