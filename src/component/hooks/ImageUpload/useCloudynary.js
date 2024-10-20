import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Notification } from '../../UI/Elements/Notification';

const useCloudinary = () => {

  const mutation = useMutation({

    mutationFn: async( file ) => {
    
        const formData = new FormData();
        formData.append('file', file);
        formData.append('api_key', import.meta.env.VITE_CLOUDYNARY_API_KEY);
        formData.append('upload_preset', import.meta.env.VITE_CLOUDYNARY_UPLOAD_PRESET);
    
        const response = await axios.post(
          `https://api.cloudinary.com/v1_1/${import.meta.env.VITE_CLOUDYNARY_NAME}/image/upload`,
          formData
        );
        
          return response.data;
        },
  })
   

  const UploadImage = (file) => {
   const response = mutation.mutateAsync(file);
    Notification("Uploading Image to Cloudinary...", "promise", response);
    return response;
  };
 
  return {
    UploadImage
  };
}

export default useCloudinary;