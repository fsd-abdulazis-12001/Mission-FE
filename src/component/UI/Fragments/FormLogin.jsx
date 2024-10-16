/* eslint-disable no-unused-vars */
import React , { useEffect, useState } from 'react'
import { Navigate, useNavigate } from "react-router-dom";
import googleIcon from '../../../assets/img/icon/google.png';
import InputForm from '../Elements/InputAuth';
import Button from '../Elements/Button';
import { Link } from 'react-router-dom';
import LoadingComponent from '../Elements/Loading';
import { jwtDecode } from "jwt-decode";
import useAuth from '../../hooks/Auth/useAuth';
import { GoogleLogin ,useGoogleLogin } from '@react-oauth/google';
import { axiosInstance } from '../../../lib/axios';
const FormLogin = () => {
 const [user, setUser] = useState(null)
 const [loading, setLoading] = useState(false); // Add a loading state to control UI rendering
 const [email, setEmail] = useState(''); // State to store email
 const [password, setPassword] = useState(''); // State to store password
 const [error, setError] = useState(''); // State to handle error messages
 const auth = useAuth("auth");
 const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    setError('');
   
    try {
      // Call the login function from useLogin hook
      setLoading(true);
      await auth.Login(email, password);

      // You can set the user state to control redirection or other actions on successful login
      setUser({ email }); 
      console.log('Login successful!');
    } catch (error) {
      setError('Failed to log in. Please check your credentials.');
      console.error('Error during sign-in:', error);
    } finally {
      setLoading(false);
    }
  };
 
  const handleGoogleSignIn = useGoogleLogin({
    onSuccess: async (codeResponse) => {
      try {
        setLoading(true);
        const code = codeResponse.code;
        const res = await axiosInstance.post(`/auth/google/callback`, {
          code
        });
  
        //console.log("Response from backend:", res.data);
  
        await auth.HandleAuthentication(res.data);
        setUser({ email }); 
        console.log('Login successful!');
      } catch (error) {
        console.error("Authentication failed:", error);
      } finally {
        setLoading(false);
      }
    },
    flow: 'auth-code',
  });


  if (loading) {
    return <LoadingComponent/>;  
  }

  if (user) {
    return <Navigate to="/" replace={true} />;
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <InputForm
          htmlFor="username"
          placeholder="Masukkan username"
          label="Username"
          type="text"
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
        <div className="flex justify-between items-center mb-4">
          <p className="font-lato text-sm text-gray-500">
            Belum punya akun? <Link to="/register" className="text-white">Daftar</Link>
          </p>
          <a href="/" className="font-lato text-sm white">Lupa kata sandi?</a>
        </div>
        {error && <p className="text-red-500 text-center">{error}</p>} {
          loading && <p className="text-red-500 text-center">Loading...</p>}
        <Button disabled={loading} btntype="submit" variant="bg-btn-gray" opacity="bg-opacity-50" hasLogo={null}>
          Masuk
        </Button>
      </form>
      <div className="text-center pt-2">
        <p className="font-lato text-gray-500">atau</p>
      </div>
      <Button disabled={loading} onClick={() => handleGoogleSignIn() } variant="bg-black" opacity="bg-opacity-0" hasLogo={[{ img: googleIcon, alt: "Google Logo" }]}>
        Masuk dengan Google
      </Button>
       
    </div>
  );
}

export default FormLogin
