import { create } from 'zustand';
import { persist } from 'zustand/middleware';

//saya pakai localstorage buat lebih mengoptimasi data fetching,agar tidak melakukan fetching berkali kali seteiap merefresh page,
//Untuk kasus ini sangat tidak perlu,karena datanya tidak pernah berubah,beda kasus untukt yang list DaftarSaya karena datanya akan berubah

const useGetFilmsStore = create(
  persist(
    (set) => ({
      filmsData: {
        resumeMovies: [], 
        seriesPersembahanChill: [], 
        topRatingFilmSeriesHarIni: [],
        seriesTrending: [],
        rilisBaruMovies: [],
        topRatingFilmAndMovies: [],
        filmTrandingMovies: [],

      },
      setFilmsData: (endpoint, data) =>
        set((state) => ({
          filmsData: { ...state.filmsData, [endpoint]: data },
        })),
    }),
    {
      name: 'films-storage', 
      getStorage: () => localStorage,
    }
  )
);

export default useGetFilmsStore;
