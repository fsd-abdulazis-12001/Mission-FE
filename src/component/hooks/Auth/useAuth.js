import { useMutation } from "@tanstack/react-query";
import { axiosInstance } from "../../../lib/axios";
import { Notification } from "../../UI/Elements/Notification";
import useSignIn from 'react-auth-kit/hooks/useSignIn';
import useSignOut from 'react-auth-kit/hooks/useSignOut';

const useAuth = (endpoint) => {
  const signIn = useSignIn();
  const signOut = useSignOut();

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

  const Login = async (email, password) => {
    try {
      const data = await signinMutation.mutateAsync({ email, password });
      const { token, user } = data;

    
      const isAuthenticated = signIn({
        auth: {
          token: token,
          type: 'Bearer'
        },
        userState: { id: user.id, email: user.email, name: user.name, profileImage: user.profileImage }
        
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
      Notification("You have successfully registered.", "success");

      // langsung login
      await Login(email, password);
      console.log(data);
    } catch (error) {
      Notification("ERROR " + error.message, "error");
    }
  };

  
   // Function to handle authentication
   const HandleAuthentication = (data) => {
    const { token, user } = data;

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
      Notification("You have successfully logged in.", "success");
    } else {
      Notification("Authentication failed.", "error");
    }
  };

  return {
    Login,signOut,SignUp,HandleAuthentication
  };
};

export default useAuth;
