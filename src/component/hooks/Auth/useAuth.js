import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import { Notification } from "../../UI/Elements/Notification";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
import { useNavigate } from "react-router-dom";
import useAuthHeader from "react-auth-kit/hooks/useAuthHeader";
const useAuth = (endpoint) => {
  const navigate = useNavigate();
  const signIn = useSignIn();
  const signOut = useSignOut();
  const authHeader = useAuthHeader();  

  const signinMutation = useMutation({
    mutationFn: async ({ email, password }) => {
      const response = await axiosInstance.post(`/${endpoint}/signin`, {
        email,
        password,
      });
      return response.data;
    },
  });

  const signupMutation = useMutation({
    mutationFn: async ({ email, password, name }) => {
      const response = await axiosInstance.post(`/${endpoint}/signup`, {
        email,
        password,
        name,
      });
      return response.data;
    },
  });

  const verifyEmailMutation = useMutation({
    mutationFn: async (token) => {
      const response = await axiosInstance.get(`/auth/verify-email?token=${token}`);
      return response.data;
    },
  });

  const updateProfileMutation = useMutation({
    mutationFn: async ({  name, imgurl }) => {
      const response = await axiosInstance.post(`/${endpoint}/updateProfile`, {
        name,
        profileImage: imgurl
      },
      {
        headers: {
          Authorization: authHeader,  
        },
      });
      return response.data;
    },
  });
  const Login = async (email, password) => {
    try {
      const data = await signinMutation.mutateAsync({ email, password });
      const { token, user } = data;

    
      const isAuthenticated = signIn({
        auth: {
          token: token,
          type: 'Bearer'
        },
        userState: { id: user.id, email: user.email, name: user.name, profileImage: user.profileImage, token: token }
        
      });

      if (isAuthenticated) {
        Notification("You have successfully logged in.", "success");
       
      } else {
        Notification("Authentication failed.", "error");
      }
    } catch (error) {
      console.log(error);
      Notification("ERROR " + error.response.data.message, "error");
    }
  };

  const SignUp = async (email, password, name) => {
    try {
      if (!name) {
        name = email.split('@')[0];  // Get the part of the email before the '@'
      }
      console.log(email, password, name);
      const data = await signupMutation.mutateAsync({ email, password, name });
      Notification("Link Verification sent to " + email + ".", "success");
      navigate("/login");
      // // langsung login
      // await Login(email, password);
      console.log(data);
    } catch (error) {
      Notification("ERROR " +  error.response.data.message, "error");
    }
  };

  const VerifEmail = async (token) => {
    try {
      const data =  await verifyEmailMutation.mutateAsync(token);
      Notification("Your email has been verified.", "success");
      navigate("/login");
      console.log(data);
    } catch (error) {
      Notification("ERROR " + error.response.data.message, "error");
    }
  };
  
   // Function to handle authentication
   const HandleAuthentication = (data, alreadyLogin) => {
    let { token, user } = data;
   
    if (!token) {
      token = authHeader.split(' ')[1];
    }
  
    // Store the token and user data with react-auth-kit
    const isAuthenticated = signIn( 
      {
        auth: {
          token: token,
          type: 'Bearer'
        },
        userState: { id: user.id, email: user.email, name: user.name, profileImage: user.profileImage }
        
      }
    );

    // Handle successful authentication
    if (isAuthenticated) {
      if(!alreadyLogin){
        Notification("You have successfully logged in.", "success");
      }
     
    } else {
      Notification("Authentication failed.", "error");
    }
  };

  const updateProfile = async (name, imgurl) => {
    const mutationPromise =  updateProfileMutation.mutateAsync({ name, imgurl});
    Notification("Your profile has been updated.", "promise",mutationPromise);
    return mutationPromise;
    
  };

  return {
    Login,signOut,SignUp,HandleAuthentication,VerifEmail,updateProfile
  };
};

export default useAuth;
