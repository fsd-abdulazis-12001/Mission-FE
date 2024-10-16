/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
const EditModal = ({ openConfirm, onClose,handleAgreConfirm, title,image,modalTitle,top10,neweps } ) => {
  
  return (
    <>
     <Dialog
        open={openConfirm}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        PaperProps={{
          component: 'form',
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const imgurl = formJson.image;
            console.log(imgurl);
            handleAgreConfirm(imgurl);
            onClose();
          },
        }}
      >
        <DialogTitle id="alert-dialog-title bg-[#181A1C]">
          {modalTitle}
        </DialogTitle>
        <DialogContent className='flex justify-center items-center bg-[#181A1C]'>
        <TextField
            autoFocus
            required
            margin="dense"
            id="image"
            name="image"
            label="Image URL"
            type="text"
            color="info"
            fullWidth
            variant="filled"
            sx={{ label: { color: 'white' } , input: { color: 'white' } }}
          />
         
        </DialogContent>
        <DialogActions className='bg-[#181A1C] flex justify-center'>
          <Button variant="contained" onClick={onClose}>Batal</Button>
          <Button variant="contained" type='submit' autoFocus>
            Oke!
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default EditModal;
