import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import { Notification } from "../../UI/Elements/Notification";

const useEditDaftarSaya = (endpoint) => {
  
    const mutation = useMutation({
        mutationFn: async ( {idf, imgurl} ) => {
            console.log("Sending to API:", { idf,imgurl});
            const response = await axiosInstance.patch(`/${endpoint}/${idf}`, {"image":imgurl});
            return response.data;
        },
      });
  const editDaftarSaya = (idf,imgurl) => {
    if (!idf || !imgurl) {
        return Notification("idf or image url not found", "error");
    }
    console.log(imgurl)
    const mutationPromise = mutation.mutateAsync({idf,imgurl});
    Notification("Item edited successfully", "promise", mutationPromise);
  };

  return {
    editDaftarSaya,
  };
 
}

export default useEditDaftarSaya