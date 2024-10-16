import { useQuery } from '@tanstack/react-query';
import { axiosInstance } from '../../../lib/axios';
import { useState } from 'react';

const useFetchFilms = (endpoint) => {
  const [data, setData] = useState(null);
    // const setFilmsData = useGetFilmsStore((state) => state.setFilmsData);
    // const filmsData = useGetFilmsStore((state) => state.filmsData[endpoint]);
  
    // const shouldFetch = !filmsData || filmsData.length === 0;
  
    // const query = useQuery({
    //   queryKey: [endpoint],
    //   queryFn: async () => {
    //     const response = await axiosInstance.get(`/${endpoint}`);
    //     setFilmsData(endpoint, response.data); 
    //     return response.data;
    //   },
    //   retry: 1,
    //   enabled: shouldFetch, 
    //   initialData: filmsData, 
    // });

    const fectDataQuery =  useQuery({
      queryKey: [endpoint],
      queryFn: async () => {
        const response = await axiosInstance.get(`/${endpoint}`);

        setData(response.data);
        return response.data;
      },
      retry: 1,
      
    })


  
    return { data, isLoading : fectDataQuery.isLoading, isError: fectDataQuery.isError, error : fectDataQuery.error };
  };
export default useFetchFilms;
