/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useCallback } from 'react'
import UploadFileIcon from '@mui/icons-material/UploadFile';
import { useDropzone } from 'react-dropzone';

const ButtonEditPhoto = ({ setNewProfileImage }) => {
  
  const onDrop = useCallback((acceptedFiles) => {
  
    const file = acceptedFiles[0];
    const reader = new FileReader();

    reader.onload = () => {
      setNewProfileImage(reader.result); 
       
    };

    reader.readAsDataURL(file);
  }, [setNewProfileImage]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    maxFiles: 1,
    maxSize: 2 * 1024 * 1024
  });
  return (
    <div {...getRootProps()} className='w-full flex flex-col justify-center items-start gap-2'>
    <input {...getInputProps()} />
    <button className='w-[80%] h-[40px] ring-[2px] outline-[1px] outline-[#3254FF] rounded-full bg-opacity-0 text-[#3254FF]'>
      Ubah Photo
    </button>
    <div className='w-full flex flex-row justify-center items-center'>
      <UploadFileIcon className='mr-2' /> {/* Adjust margin or padding as needed */}
      Maksimal 2MB
    </div>
  </div>
  )
}

export default ButtonEditPhoto
