import Header from '../../component/header';
import Footer from '../../component/footer';
import CardsLayouts from '../../component/UI/Layouts/CardsLayouts';
import MovieCard from '../../component/UI/Elements/Card/MovieCard';

import { SwiperSlide } from 'swiper/react';
import HeroLayouts from '../../component/UI/Layouts/HeroLayouts';


 

import genres from '../../component/constants/genres';

import React from 'react';
import useAddDaftarSaya from '../../component/hooks/DaftarSaya/useAddDaftarSaya';
import useFetchFilms from '../../component/hooks/FetchMovieOrSerie/useFetchFilms';
import useFetchWatchHistory from '../../component/hooks/WatchHistory/useWatchHistory';

const Series = React.memo(() => {
 
 // const { data: resumeSeries, isLoading: loadingResumeMovies, isError: errorResumeMovies , error :errorObjectresumeMovies } = useFetchFilms('serieTrendings');
 const { data: resumeMovies, isLoading: loadingResumeMovies, isError: errorResumeMovies, error :errorObjectresumeMovies } = useFetchWatchHistory('watchhistory','serie');
  const { data: seriesPersembahanChill, isLoading: loadingSeriesChill , isError: errorSeriesChill , error :errorObjectseriesPersembahanChill } = useFetchFilms('SeriePersembahanChills');
  const { data: topRatingFilmSeriesHarIni, isLoading: loadingTopRating, isError: errorTopRating, error :errorObjecttopRatingFilmSeriesHariIni } = useFetchFilms('serieTopRatins');
  const { data: seriesTrending, isLoading: loadingseriesTrending, isError: errorseriesTrending, error :errorObjectseriesTrending} = useFetchFilms('serieTrendings');
  const { data: rilisBaruMovies, isLoading: loadingrilisBaruMovies, isError: errorrilisBaruMovies, error :errorObjectsrilisBaruMovies} = useFetchFilms('serieNewReleases');
  const {addDaftarSaya}  = useAddDaftarSaya("daftarsaya")
  
  return (
    <>
      <Header />
      <HeroLayouts bgimage = {{imgsrc : "/img/bg/happiness.png", alt : "Happiness" }} genres = {genres} title = "Happiness" description = 'Mengisahkan tentang kelompok orang yang berjuang untuk bertahan hidup di dalam sebuah gedung apartemen yang penuh dengan zombie. Sayangnya, virus zombie hanya terdapat di dalam area apartemen tersebut dan tidak menyebar ke luar kawasan apartemen.'/>
      <CardsLayouts title="Melanjutkan Tonton Series" height="h-[309px]" amount = {4} isError={errorResumeMovies} isLoading={loadingResumeMovies} error = {errorObjectresumeMovies} content={resumeMovies}  watchHistory = {true}>
          {resumeMovies && resumeMovies.map((movie, index) => (
              <SwiperSlide key={index} className='hover:z-50'>
                  <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya}/>
              </SwiperSlide>
          ))}
      </CardsLayouts>  
     <CardsLayouts title="Series Persembahan Chill" height="h-[512px]" amount = {5} isError={errorSeriesChill} isLoading={loadingSeriesChill} error = {errorObjectseriesPersembahanChill} content={seriesPersembahanChill}>
        {seriesPersembahanChill && seriesPersembahanChill.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
        ))}
      </CardsLayouts>  
      <CardsLayouts title="Top Rating Series Hari Ini" height="h-[512px]" amount = {5} isError={errorTopRating} isLoading={loadingTopRating} error = {errorObjecttopRatingFilmSeriesHariIni} content={topRatingFilmSeriesHarIni}>
            {topRatingFilmSeriesHarIni && topRatingFilmSeriesHarIni.map((movie, index) => (
                <SwiperSlide key={index} className='hover:z-50'>
                    <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya}/>
                </SwiperSlide>
            ))}
      </CardsLayouts>  
      <CardsLayouts title="Series Trending" height="h-[512px]" amount = {5} isError={errorseriesTrending} isLoading={loadingseriesTrending} error = {errorObjectseriesTrending} content={seriesTrending}>
        {seriesTrending && seriesTrending.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
        ))}
      </CardsLayouts>  
      <CardsLayouts title="Rilis Baru" height="h-[512px]" amount = {5} isError={errorrilisBaruMovies} isLoading={loadingrilisBaruMovies} error = {errorObjectsrilisBaruMovies} content={rilisBaruMovies}>
        {rilisBaruMovies && rilisBaruMovies.map((movie, index) => (
            <SwiperSlide key={index} className='hover:z-50 '>
                <MovieCard key={index} index={index} {...movie} addDaftarSaya={addDaftarSaya} />
            </SwiperSlide>
        ))}
      </CardsLayouts>  

      <Footer />

    </>
  );
});

Series.displayName = 'Series';
export default Series;
