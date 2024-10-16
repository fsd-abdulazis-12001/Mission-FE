import AuthLayouts from "../../component/UI/Layouts/AuthLayouts";
import FormRegister from "../../component/UI/Fragments/FormRegister";

const Index = () => {
  return (
    <>
     <AuthLayouts title="Login" description="Selamat datang kembali!"> 
     <FormRegister/>
     </AuthLayouts>

 
    </>
  
  );
};

export default Index;
