
import { useEffect, useState } from "react";
import useAuth from "../../component/hooks/Auth/useAuth"
import { useNavigate, useSearchParams } from "react-router-dom";
const Succes = () => {
 const auth = useAuth("auth");
  
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const navigate = useNavigate();
  const [verificationStatus, setVerificationStatus] = useState(null);

  useEffect(() => {
    const verif = async () => {
        if (token) {
            await auth.VerifEmail(token);
            setVerificationStatus('success');
        navigate('/login');
        } else {
            setVerificationStatus('error');
        }
    }
   
    verif();
  }, [token]);


  return (
    <div>
     {verificationStatus === 'success' ? (
        <p>Your email has been verified successfully. Redirecting...</p>
      ) : verificationStatus === 'error' ? (
        <p>There was an issue with your email verification link.</p>
      ) : (
        <p>Verifying your email...</p>
      )}
    </div>
  )
}

export default Succes
