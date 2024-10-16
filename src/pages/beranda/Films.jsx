import React from 'react';
import Header from '../../component/header';
import Footer from '../../component/footer';
import CardsLayouts from '../../component/UI/Layouts/CardsLayouts';
import MovieCard from '../../component/UI/Elements/Card/MovieCard';

import { SwiperSlide } from 'swiper/react';
import HeroLayouts from '../../component/UI/Layouts/HeroLayouts';

//import useFetch from '../../component/hooks/useFetch';

import genres from '../../component/constants/genres';
import useAddDaftarSaya from '../../component/hooks/DaftarSaya/useAddDaftarSaya';
import useFetchFilms from '../../component/hooks/FetchMovieOrSerie/useFetchFilms';
import useFetchWatchHistory from '../../component/hooks/WatchHistory/useWatchHistory';
 
const Films = React.memo(() => {
  console.log("Films component rendered");
  
  // const { data: resumeMovies, isLoading: loadingResumeMovies, isError: errorResumeMovies, error :errorObjectresumeMovies} = useFetch('resumeMovies');
  // const { data: seriesPersembahanChill, isLoading: loadingSeriesChill, isError: errorSeriesChill , error :errorObjectseriesPersembahanChill} = useFetch('seriesPersembahanChill');
  // const { data: topRatingFilmSeriesHarIni, isLoading: loadingTopRating, isError: errorTopRating , error :errorObjecttopRatingFilmSeriesHariIni } = useFetch('topRatingFilmSeriesHariIni');
  // const { data: seriesTrending, isLoading: loadingSeriesTrending, isError: errorSeriesTrending , error :errorObjectseriesTrending } = useFetch('seriesTrending');
  // const { data: rilisBaruMovies, isLoading: loadingrilisBaruMovies, isError: errorrilisBaruMovies , error :errorObjectsrilisBaruMovies} = useFetch('rilisBaruMovies');

  const { data: resumeMovies, isLoading: loadingResumeMovies, isError: errorResumeMovies, error :errorObjectresumeMovies } = useFetchWatchHistory('watchhistory','movie');
    const { data: topRatingFilmSeriesHarIni, isLoading: loadingTopRating, isError: errorTopRating, error: errorObjecttopRatingFilmSeriesHarIni } = useFetchFilms('movieTopRatings');
    const { data: seriesTrending, isLoading: loadingSeriesTrending, isError: errorSeriesTrending, error: errorObjectseriesTrending } = useFetchFilms('movieTrendings');
    const { data: rilisBaruMovies, isLoading: loadingrilisBaruMovies, isError: errorrilisBaruMovies, error: errorObjectsrilisBaruMovies } = useFetchFilms('movieNewReleases');
 
  const {addDaftarSaya}  = useAddDaftarSaya("daftarsaya")
   
  return (
    <>
      <Header />
      <HeroLayouts bgimage = {{imgsrc : "/img/bg/avatar.png", alt : "Avatar" }} genres = {genres} title = "Avatar" description = 'Avatar 3 melanjutkan cerita konflik antara manusia dan Navi di planet Pandora. Dalam pertempuran untuk sumber daya dan kekuasaan, manusia dan sekutu Navi bersatu untuk melindungi tanah mereka. Film ini mengangkat tema persatuan dan perlawanan terhadap eksploitasi.'/>
 
      <CardsLayouts title="Melanjutkan Tonton Films" height="h-[309px]" amount = {4} isError={errorResumeMovies} isLoading={loadingResumeMovies} error = {errorObjectresumeMovies} content={resumeMovies} watchHistory = {true}>
    
      {resumeMovies && resumeMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50'>
              <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
          ))
        }
      </CardsLayouts>
  
    
      
      <CardsLayouts title="Top Rating Films Hari Ini" height="h-[512px]" amount={5} isError={errorTopRating} isLoading={loadingTopRating} error={errorObjecttopRatingFilmSeriesHarIni} content={topRatingFilmSeriesHarIni}>
        {topRatingFilmSeriesHarIni && topRatingFilmSeriesHarIni.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
              <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
          ))
        }
      </CardsLayouts>
      
      <CardsLayouts title="Films Trending" height="h-[512px]" amount={5} isError={errorSeriesTrending} isLoading={loadingSeriesTrending} error={errorObjectseriesTrending} content={seriesTrending}>
        {seriesTrending && seriesTrending.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
              <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
          ))
        }
      </CardsLayouts>
      
      <CardsLayouts title="Rilis Baru" height="h-[512px]" amount={5} isError={errorrilisBaruMovies} isLoading={loadingrilisBaruMovies} error={errorObjectsrilisBaruMovies} content={rilisBaruMovies}>
        
        {rilisBaruMovies && rilisBaruMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
              <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
          ))
        }
      </CardsLayouts>

      <Footer />
    </>
  );
});

Films.displayName = 'Films';
export default Films;
