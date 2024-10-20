/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react'
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ButtonEditPhoto from '../Elements/Button/ButtonEditPhoto';
import profilelogo from '../../../assets/img/icon/profile.png';
import InputProfile from '../Elements/InputProfile';
import { useState } from 'react';
import useAuthUser from 'react-auth-kit/hooks/useAuthUser';
import useAuth from '../../hooks/Auth/useAuth';
import useCloudinary from '../../hooks/ImageUpload/useCloudynary';
import isBase64Image from '../../../utils/Base64ImageChecker';
import { useNavigate } from 'react-router-dom';


const FormProfile = ({height , title}) => {
  const { UploadImage } = useCloudinary();
  const [uploading, setUploading] = useState(false);
  const [updatingProfile, setUpdatingProfile] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  const auth = useAuthUser()
  
  const myAuth = useAuth("auth")
  const { email: myEmail = '', name: myName = '', profileImage = profilelogo } = auth || {};
  
  const [name, setName] = useState(myName);
  const [password, setPassword] = useState("MalasHehe");
  const [newProfileImage, setNewProfileImage] = useState(profilelogo);
  const navigate = useNavigate();
  
  useEffect(() => {
    if (profileImage && profileImage !== 'nan') {
      setNewProfileImage(profileImage);
    }
 
  }, [profileImage,auth]);
  const handleSave = async () => {
    const isNameChanged = name !== myName;
    let imgurl = null
    if (!isNameChanged && !isBase64Image(newProfileImage)) {
      console.log('Tidak ada perubahan data...');
      return;
    }
    if (newProfileImage && isBase64Image(newProfileImage)) {
 
     try {
        setUploading(true);
        const response = await UploadImage(newProfileImage);
        console.log('Image uploaded successfully:', response);
        imgurl = response.url;
        setUploading(false);
      } catch (error) {
        console.error('Error uploading image:', error);
        setUploading(false);
      } finally {
        setUploading(false);
      }
     
    }else{
      console.log('Profile image is not a valid base64 image:', newProfileImage);
    }
    
    try {
      setUpdatingProfile(true);
      const response = await myAuth.updateProfile(name, imgurl);
    
      // console.log(auth);
      // console.log(response.user);
      await myAuth.HandleAuthentication({token: auth.token, user: response.user }, true);
      navigate('/profile');
      setUpdatingProfile(false);
    } catch (error) {
      console.error('Error updating profile:', error);
      setUpdatingProfile(false);
    } finally {
      setUpdatingProfile(false);
    }


   
    
  };
  return (
  <div className={`flex justify-center bg-[#181A1C] text-white ${height} py-11`}>
  <div className='flex flex-col w-11/12 gap-5'>
    <h2 className="text-2xl font-bold text-left pt-3">{title}</h2>
    <div className='relative flex lg:flex-row flex-col space-y-5 items-center justify-between w-full pt-4'>

      <div className='relative lg:order-2 order-1 lg:w-[50%] w-[80%] h-full flex flex-col justify-start items-end'>
        {isPremium === true ? (
          <div className='relative flex flex-col justify-center items-center right-0 bg-[#3D4142] lg:w-[80%] w-full  h-[193px] rounded-md'>
            <div className='w-full h-[60%] flex flex-row justify-center items-center p-5'>
             
                    <div className='flex flex-row justify-around items-start'>
                      <Avatar alt="sound"
                      src="/img/icon/speakerlangganan.png"
                      sx={{ width: 78, height: 78 }}
                      />
                      <div className='flex flex-col justify-center items-start gap-2'>
                          <h1 className='text-xl'>
                          Saat ini anda belum berlangganan
                          </h1>
                          <span className='text-sm' >Dapatkan Akses Tak Terbatas ke Ribuan Film dan Series Kesukaan Kamu!</span>
                      </div>
               
                     </div>
                 
               
            </div>
            <div className='w-[80%] flex flex-row justify-end items-center'>
            <button className='w-[160px] bg-[#2F3334] rounded-full text-white p-2' >
                    Mulai Berlangganan
            </button>
            </div>
         
          </div>
        ) : (
          <div className='relative flex justify-center items-start right-0 bg-gradient-to-r from-[#5370D4] to-[#192DB7]  lg:w-[80%] w-[100%]  h-[193px] rounded-md'>
          <div className='w-full h-full flex flex-col justify-start items-start p-7 gap-3 overflow-hidden '>
            <button className='w-[81px] h-[37px] bg-[#C1C2C4] rounded-full text-[#0F1E93] p-2 text-center font-semibold' >
                   Aktif
            </button>
            <span className='text-xl font-bold text-white' >Akun Premium Individual✨</span>
            <span className='text-sm text-white' > Saat ini kamu sedang menggunakan akses akun premium</span>
            <span className='text-sm text-white' >  Berlaku hingga 31 Desember 2023</span>
           
          </div>
        </div>
        ) }
        
      </div>

      <div className='w-[80%] lg:w-[50%]  h-full flex flex-col justify-start gap-9 sm:order-1 order-2'>
        <div className='w-[287px] h-[140px] flex justify-start'>
          <Stack direction="row" spacing={2}>
            <Avatar
              alt="Remy Sharp"
              src={newProfileImage}
              sx={{ width: 140, height: 140 }}
            />
            
            <ButtonEditPhoto setNewProfileImage={setNewProfileImage} />
          
           
          </Stack>
        </div>

        <InputProfile
         type="text"
         label="Name Pengguna"
         value={name}
         onChange={(e) => setName(e.target.value)}
        />

        <InputProfile
         type="email"
         label="Email"
         value={myEmail}
         isEditable={false}
         />
        <InputProfile 
          type="password"
          label="Kata Sandi"
          value={password}
          isEditable={false}
        />
      </div>
      
    </div>
    <button onClick={handleSave} disabled={uploading || updatingProfile} className="order-last bg-customBlue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full w-[106px]">
       {uploading || updatingProfile ? 'Loading...' : 'Save'}
    </button>
    
  </div>
</div>

  )
}

export default FormProfile
