import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../.././../lib/axios"
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
// import { Notification } from "../../UI/Elements/Notification";
 

const useAddToWatchHistory = (endpoint) => {
  const authHeader = useAuthHeader();  

  const addToWatchHistoryMutation = useMutation({
    mutationFn: async ({ movieId, seriesId, currentEpisode, progress, isFinished }) => {
      console.log({ movieId, seriesId, currentEpisode, progress, isFinished })
      const response = await axiosInstance.post(
        endpoint,  // API endpoint to add watch history
        {
          movieId,
          seriesId,
          currentEpisode,
          progress,
          isFinished
        },
        {
          headers: {
            Authorization: authHeader,  
          },
        }
      );
      return response.data;
    },
    onSuccess: () => {
     console.log("Successfully added to watch history")
    },
    onError: (error) => {
      console.log(error.response.data.message)
     
    }
  });
  const addToWatchHistory = (movieId, seriesId, currentEpisode, progress, isFinished) => {
    addToWatchHistoryMutation.mutateAsync({ movieId, seriesId, currentEpisode, progress, isFinished });
      
  
  };

  return {
    addToWatchHistory
  };
};

export default useAddToWatchHistory;
