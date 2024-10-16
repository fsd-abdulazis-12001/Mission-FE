/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Button } from '@mui/material'
import React , { useState } from 'react'
 
import DeleteAndAddModal from '../DialogModal/DeleteAndAddModal'
import EditModal from '../DialogModal/EditModal'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
const CardThumbnail = ({idf, image, top10, neweps, title,ignore,removeDaftarSaya,editDaftarSaya, loading}) => {
  
  const [openConfirm, setOpenConfirm] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);



  const handleClickOpenConfirm = () => {
   
    setOpenConfirm(true);
    console.log(openConfirm)
  };

  const handleClickOpenEdit = () => {
    setOpenEdit(true);
    console.log(openEdit)
  }
  const handleCloseConfirm = () => {
    setOpenConfirm(false);
  };
   
  const handleCloseEdit = () => {
    setOpenEdit(false);
  }
  return (
    <>
        <DeleteAndAddModal openConfirm={openConfirm} onClose={handleCloseConfirm} handleAgreConfirm={() => {removeDaftarSaya(idf) 
          setOpenConfirm(false) }} title={title} image={image} modalTitle={`Hapus ${title} dari Daftar Kamu?`}>
        
        </DeleteAndAddModal>
        <EditModal openConfirm={openEdit} onClose={handleCloseEdit} handleAgreConfirm={(imgur) => {
         
          editDaftarSaya(idf,imgur) 
          setOpenEdit(false) 
          }} title={title} image={image} modalTitle={`Edit ${title} Thumbnail?`} idf>
        
        </EditModal>
        <div className='relative group rounded-md w-[95px] h-[143px]  sm:w-[200px] sm:h-[300px] transition-transform duration-300 hover:scale-110 '>
       
          {loading ? (
          <Box sx={{ display: 'flex' }}>
            <CircularProgress />
          </Box>
          ) : (
            <img src={image} alt={title} className='w-full h-full object-cover rounded-md ' />
          )}
          {top10 === true && <span className="absolute top-0 right-2 p-2 w-6 sm:w-8 sm:h-18 rounded-md text-center bg-[#B71F1D] text-white text-[6px] sm:text-xs font-bold">Top 10</span>}
          {neweps === true && <span className="absolute top-1 sm:top-3 left-1 sm:left-3 p-2 w-auto h-auto rounded-xl text-center bg-[#0F1E93] text-white text-[6px] sm:text-xs font-bold">Episode Baru</span>}
          {ignore !== true && <div className='absolute w-auto h-auto flex justify-center items-center z-120 top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 trainsition-opacity duration-300 opacity-0 group-hover:opacity-100'>
            <Button variant="contained"  color="info" className=' rounded-xl text-center text-white text-[6px] sm:text-xs font-bold' onClick={() => handleClickOpenEdit()}>Edit</Button>
          </div>}
          {ignore !== true && <div className='absolute w-auto h-auto flex justify-center items-center z-120 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 trainsition-opacity duration-300 opacity-0 group-hover:opacity-100'>
            <Button variant="contained"  color="error" className=' rounded-xl text-center text-white text-[6px] sm:text-xs font-bold' onClick={() => handleClickOpenConfirm()}>Delete</Button>
          </div>}
        
          
        </div>
    </>
  
  )
}

export default CardThumbnail
