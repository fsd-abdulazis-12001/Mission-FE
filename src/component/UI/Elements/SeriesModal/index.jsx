/* eslint-disable no-unused-vars */
import React from 'react'
import Episode from '../Card/EpisodeCard';
import epsList from '../../../constants/episodeList';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
const index = ({handleClose, open}) => {
  return (
    <div className='relative bg-[#181A1C] w-full flex justify-center items-center'>
         <Modal
           open={open}
           onClose={handleClose}
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
           keepMounted 
           className='overflow-scroll flex justify-center items-start rounded-md space-y-[10%] '
           
          >
           <Fade in={open}>

             
              <div className='absolute flex-col justify-center items-start space-y-4 bg-[#181A1C] lg:w-[50%] w-[90%] rounded-md '>
                <div className='relative w-full h-[554px] '>
                    <img src="/img/thumbnail/PreviewSeries/tn1.png" alt="" className='w-full h-full object-cover'/>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] to-transparent h-full">
      
                    </div>
                   
                </div>

                <div className='relative w-full lg:h-[224px] h-[324px] flex lg:flex-row flex-col space-y-3 justify-start items-center '>
                
                    <div className='md:w-[50%] w-full md:h-80% h-[50%] px-10 flex flex-col justify-center items-start'>
                      <div className='w-full h-[48px] flex justify-start items-center space-x-2  text-[#C1C2C4]'>
                        <span className='text-sm '>2020</span>
                        <span className='text-sm '>10 episode</span>
                        <div className='w-10 h-10 border-2 border-[#C1C2C4] rounded-full flex justify-center items-center'>
                          18+
                        </div>
                      </div>
                      <div className='w-full h-[48px flex justify-start items-center text-[#C1C2C4]'>
                        <span className='text-sm '>Pelatih sepak bola perguruan tinggi Amerika Ted Lasso pergi ke London untuk mengelola AFC Richmond, tim sepak bola Liga Utama Inggris yang kesulitan.</span>
                        
                      </div>
                    </div>
                    <div className='md:w-[50%] w-full md:h-80% h-[50%] px-10 flex flex-col justify-center items-start'>
                      <div className='w-full h-[48px] flex flex-col justify-center items-start space-2  text-[#C1C2C4]'>
                        <div className="w-full flex flex justify-around items-start">
                          <span className="font-semibold text-left w-[35%]">Cast</span>
                          <span className='w-[65%] text-sm'>: Jason Sudeikis, Brett Goldstein, Brendan Hunt, Nick Mohammed, dan lain-lain</span>
                        </div>
                        <div className="w-full flex flex justify-around items-start">
                          <span className="font-semibold text-left w-[35%]">Genre</span>
                          <span className='w-[65%] text-sm'>: Komedi, Drama, Olahraga</span>
                        </div>
                        <div className="w-full flex flex justify-around items-start">
                          <span className="font-semibold text-left w-[35%]">Pembuat Film</span>
                          <span className='w-[65%] text-sm'>: Brendan Hunt, Joe Killy, Bill Lawrence </span>
                        </div>
                        
                      </div>
                     
                    </div>
                  
                </div>

                <div className='relative w-full h-[790px] flex flex-col justify-start items-center '>
                  <div className='w-[90%] py-5 flex flex-col justify-start items-center space-y-5'>
                    <h3 className='text-xl text-white text-left w-full'>Episode</h3>
                   <div className='w-full flex flex-col justify-start items-center'>
                    {epsList.map((item, index) => (
                      <Episode key={index} episode={item.episode} image={item.image} filmname={item.filmname} duration={item.duration} filmdescription={item.filmdescription}/>
                    ))}
                   
                   </div>
                  </div>
                </div>
 
              </div>
            </Fade>
         </Modal>
     </div>
   
  )
}

export default index
