import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";

// Custom hook to fetch DaftarSaya list
const useGetDaftarSaya = (endpoint) => {
  const authHeader = useAuthHeader();

  
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["daftarSayaList"],
    queryFn: async () => {
      const response = await axiosInstance.get(`/${endpoint}`, {
        headers: {
          Authorization: authHeader,
        },
      });
      console.log("daftarSayaList", response.data);
      return response.data;
    },
    retry: 1,
  });

  return {
    data,
    error,
    isLoading,
    isError,
  };
};

export default useGetDaftarSaya;
