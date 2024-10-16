/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import Logonya from '../Elements/logo';
import BgImage from '../../../assets/img/bg/bg-masuk.jpeg';
const AuthLayouts = (props) => {
const {children, title, description} = props
  return (
    <div className="flex items-center justify-center min-h-screen bg-cover bg-center" style={{ backgroundImage: `url(${BgImage})` }}>
      <div className="bg-bg-gray bg-opacity-80 p-8 rounded-lg max-w-md w-full text-white">
        <div className="text-center mb-6">
          <Logonya height = "h-[50px]" wdith = "w-50px]" center = {true} />
          <h1 className="text-2xl weight-700 mt-4 font-lato">{title}</h1>
          <p className='font-lato'>{description}</p>
        </div>
      {children}
      </div>
      
    </div>
  )
}

export default AuthLayouts
