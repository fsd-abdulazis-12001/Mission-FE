/* eslint-disable no-unused-vars */
 import './index.css'
import React from 'react';
import ReactDOM from 'react-dom/client'
import App from './App';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import createStore from 'react-auth-kit/createStore';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthProvider from 'react-auth-kit';

const store = createStore({
  authName:'_auth',
  authType:'cookie',
  cookieDomain: window.location.hostname,
  cookieSecure: window.location.protocol === 'https:',
});
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <>
    <AuthProvider store={store}>
  
        <GoogleOAuthProvider clientId= {import.meta.env.VITE_GOOGLE_CLIENT_ID}>
          <App />
        </GoogleOAuthProvider>
            
      <ToastContainer draggable />

     </AuthProvider>
  </>
 
  // </React.StrictMode>
);
