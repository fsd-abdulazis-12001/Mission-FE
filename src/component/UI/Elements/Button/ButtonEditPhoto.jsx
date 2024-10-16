/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';


const ButtonEditPhoto = ({togglePremium}) => {
  return (
    <div className='w-full flex flex-col justify-center items-start gap-2'>

      <button className='w-[80%] h-[40px] ring-[2px] outline-[1px] outline-[#3254FF] rounded-full bg-opacity-0 text-[#3254FF] ' onClick={togglePremium} >Ubah Photo</button>
      <div className='w-full flex flex-row justify-center items-center'>
        <UploadFileIcon/>
        Maksimal 2MB 
      </div>
    </div>
  )
}

export default ButtonEditPhoto
