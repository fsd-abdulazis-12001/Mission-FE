/* eslint-disable react/prop-types */
import { Swiper } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LoadingComponent from '../Elements/Loading';
import CardError from '../Elements/Card/CardError';
import Info from '../Elements/Info';
 

const CardsLayouts = ({ title, children, height, amount, isError, isLoading, error, content = [], watchHistory }) => {
  // Use a default value for content to prevent errors when it's undefined or null
  content = content || []; // Ensure content is always an array

  // Set default amount to 1 if only one card is present
  if (watchHistory && content.length > 5) {
    amount = 5;
  } else if (watchHistory && content.length < 5) {
    amount = content.length;
  }

  // Adjust spaceBetween dynamically based on content length
  const spaceBetween = content.length === 1 ? 0 : content.length === 2 ? 30 : 15;

  // Adjust swiper slidesPerView based on content length
  const isSingleSlide = content.length === 1;

  return (
    <div className={`flex justify-center bg-[#181A1C] text-white ${height} py-11`}>
      <div className='flex flex-col w-11/12'>
        <h2 className="text-2xl font-bold text-left pt-3">{title}</h2>

        {/* Main content section */}
        <div className='relative flex flex-row items-center justify-between h-[80%] pt-4'>
          {content.length === 0 ? (
            watchHistory ? (
              <Info message={"Kamu Belom Menonton Apapun, Ayo Tonton Sekarang"} />
            ) : (
              <Info message={"Kosong!"} />
            )
          ) : (
            <div className={`overflow-y-visible overflow-x-clip h-full ${isSingleSlide ? 'w-full' : 'min-w-0'}`}>
              {isLoading ? (
                <LoadingComponent />
              ) : isError ? (
                <CardError errorObject={error} />
              ) : (
                <Swiper
                  slidesPerView={isSingleSlide ? 1 : amount} // Ensure single card takes full width
                  spaceBetween={isSingleSlide ? 0 : spaceBetween} // No space between when there's one card
                  centeredSlides={isSingleSlide} // Center the single slide
                  breakpoints={!isSingleSlide ? { // Only apply breakpoints if there's more than one item
                    340: {
                      slidesPerView: Math.max(amount - 3, 1), // Ensure slidesPerView is at least 1
                      spaceBetween: spaceBetween,
                    },
                    600: {
                      slidesPerView: Math.max(amount - 2, 1), // Ensure slidesPerView is at least 1
                      spaceBetween: spaceBetween,
                    },
                    900: {
                      slidesPerView: Math.max(amount - 1, 1), // Ensure slidesPerView is at least 1
                      spaceBetween: spaceBetween,
                    },
                    1300: {
                      slidesPerView: Math.max(amount, 1), // Ensure slidesPerView is at least 1
                      spaceBetween: spaceBetween,
                    },
                  } : undefined} // Skip breakpoints if there's only one item
                  navigation={isSingleSlide ? false : { // Disable navigation if there's only one item
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                  }}
                  modules={[Navigation]}
                  className="flex justify-center gap-2 h-full"
                >
                  {children}
                  {/* Navigation buttons */}
                  {content.length > 1 && (
                    <>
                      <div className="swiper-button-prev relative flex items-center justify-center invisible sm:visible">
                        <FaArrowLeft className='absolute z-100 text-white' />
                      </div>
                      <div className="swiper-button-next relative flex items-center justify-center invisible sm:visible">
                        <FaArrowRight className='absolute z-100 text-white' />
                      </div>
                    </>
                  )}
                </Swiper>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};



export default CardsLayouts;
