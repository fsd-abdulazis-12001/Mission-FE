/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated'

const AuthGuard = ({ children }) => {
  const isAuthenticated = useIsAuthenticated();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      // Redirect if the user is already logged in
      navigate('/'); // or any other route you want
    }
  }, [isAuthenticated, navigate]);

  return (
    <>
      {/* Render the login/register content only if the user is not authenticated */}
      {!isAuthenticated && children}
    </>
  );
};

export default AuthGuard;
