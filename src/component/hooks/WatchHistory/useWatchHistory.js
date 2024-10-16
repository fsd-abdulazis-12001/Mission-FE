import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import useAuthHeader from 'react-auth-kit/hooks/useAuthHeader';

const useFetchWatchHistory = (endpoint, type) => {
  const authHeader = useAuthHeader();  

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [endpoint, type], 
    queryFn: async () => {
      
      const response = await axiosInstance.get(endpoint, {
        headers: {
          Authorization: authHeader,  
        }
      });

      // Filter data berdasarkan tipe (movie atau series)
      const filteredData = response.data.filter(item => {
        
        if (type === "movie") {
          return item.type === "movie";
        } else if (type === "serie") {
          return item.type === "series";
        }
        return false; 
      });
      console.log(filteredData)
      return filteredData; 
    },
    retry: 1,  
  });

  return {
    data,
    isLoading,
    isError,
    error
  };
};

export default useFetchWatchHistory;
