/* eslint-disable no-unused-vars */
import React from 'react'
import DaftarSayaFragments from '../../Fragments/DaftarSayaFragments';
import CardThumbnail from '../../Elements/Card/CardThumbnail' ;
import filmDetails  from '../../../constants/filmDetails';
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

                <div className='relative w-full lg:h-[224px] h-[696px] flex flex-col space-y-3 justify-start items-center '>
                    <div className='w-full lg:h-80% h-[50%] px-10 flex lg:flex-row flex-col justify-between lg:justify-center items-start'>
                      <div className='md:w-[50%] w-full md:h-80% h-[50%] px-10 flex flex-col justify-center items-start'>
                        <div className='w-full h-[48px] flex justify-start items-center space-x-2  text-[#C1C2C4]'>
                          <span className='text-sm '>2023</span>
                          <span className='text-sm '>2j 29m</span>
                          <div className='w-[47px] h-[22px] text-sm border-2 border-[#C1C2C4] rounded-md flex justify-center items-center'>
                          PG-13
                          </div>
                        </div>
                        <div className='w-full h-[48px flex justify-start items-center text-[#C1C2C4]'>
                          <span className='text-sm '>Masih goyah karena kehilangan Gamora, Peter Quill mengumpulkan timnya untuk mempertahankan alam semesta dan salah satu dari mereka - sebuah misi yang bisa berarti akhir dari Penjaga jika tidak berhasil.</span>
                          
                        </div>
                      </div>
                      <div className='md:w-[50%] w-full md:h-80% h-[50%] px-10 flex flex-col justify-center items-start'>
                        <div className='w-full h-[48px] flex flex-col justify-center items-start space-2  text-[#C1C2C4]'>
                          <div className="w-full flex flex justify-around items-start">
                            <span className="font-semibold text-left w-[35%]">Cast</span>
                            <span className='w-[65%] text-sm'>: Chris Pratt, Chukwudi Iwuji, Bradley Cooper, dan lain lain</span>
                          </div>
                          <div className="w-full flex flex justify-around items-start">
                            <span className="font-semibold text-left w-[35%]">Genre</span>
                            <span className='w-[65%] text-sm'>: Aksi, Petualangan, Komedi</span>
                          </div>
                          <div className="w-full flex flex justify-around items-start">
                            <span className="font-semibold text-left w-[35%]">Pembuat Film</span>
                            <span className='w-[65%] text-sm'>: James Gunn</span>
                          </div>
                          
                        </div>
                      
                      </div>

                    </div>
                  
                     <DaftarSayaFragments title="Rekomendasi Serupa">
                        { filmDetails.map((movie, index)=>(
                            <CardThumbnail key={index} {...movie} ignore = {true}/>
                        ))}
                      
                    </DaftarSayaFragments>

                </div>

                 
 
              </div>
            </Fade>
         </Modal>
     </div>
   
  )
}

export default index
