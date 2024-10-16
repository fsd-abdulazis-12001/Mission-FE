/* eslint-disable no-unused-vars */
import React , { useState } from 'react'

import googleIcon from '../../../assets/img/icon/google.png';
import InputForm from '../Elements/InputAuth';
import Button from '../Elements/Button';
import {Link, Navigate} from 'react-router-dom';
import useAuth from '../../hooks/Auth/useAuth';


const FormRegister = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const auth = useAuth("auth");
 


  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password, confirmPassword);
    setError(''); // Clear any previous errors
    setLoading(true);

     
    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      setLoading(false);
      return;
    }

    try {
      await auth.SignUp(email, password);

      //await register(email, password);
      console.log('User registered successfully!');
    } catch (error) {
      setError('Failed to create account. Please try again.');
      console.error('Error during registration:', error);
    } finally {
      setLoading(false);
    }
  };

  
  return (
    <div>
      <form onSubmit={submitHandler}>
        <InputForm
          htmlFor="email"
          placeholder="Masukkan email"
          label="Email"
          type="email"
          isrequired={true}
          value={email}
          onChange={(e) => setEmail(e.target.value)}  
        />
        <InputForm
          htmlFor="password"
          placeholder="Masukkan kata sandi"
          label="Kata Sandi"
          type="password"
          isrequired={true}
          value={password}
          onChange={(e) => setPassword(e.target.value)}  
        />
        <InputForm
          htmlFor="confirmPassword"
          placeholder="Konfirmasi kata sandi"
          label="Konfirmasi Kata Sandi"
          type="password"
          isrequired={true}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}  
        />
        <div className="flex justify-between items-center mb-4">
          <p className="font-lato text-sm text-gray-500">
            Sudah punya akun? <Link to="/login" className="text-white">Masuk</Link>
          </p>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>} {  }
        <Button btntype="submit" variant="bg-btn-gray" opacity="bg-opacity-50" hasLogo={null} disabled={loading}>
          {loading ? 'Processing...' : 'Daftar'}
        </Button>
      </form>
    </div>
  );

}

export default FormRegister
