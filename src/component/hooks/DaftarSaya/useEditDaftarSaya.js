import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import { Notification } from "../../UI/Elements/Notification";

const useEditDaftarSaya = (endpoint) => {
  
    const mutation = useMutation({
        mutationFn: async ( {id, imgurl} ) => {
            console.log("Sending to API:", { id,imgurl});
            const response = await axiosInstance.patch(`/${endpoint}/${id}`, {"image":imgurl});
            return response.data;
        },
      });
  const editDaftarSaya = (id,imgurl) => {
    if (!id || !imgurl) {
        return Notification("idf or image url not found", "error");
    }
    console.log(imgurl)
    const mutationPromise = mutation.mutateAsync({id,imgurl});
    Notification("Item edited successfully", "promise", mutationPromise);
  };

  return {
    editDaftarSaya,
  };
 
}

export default useEditDaftarSaya