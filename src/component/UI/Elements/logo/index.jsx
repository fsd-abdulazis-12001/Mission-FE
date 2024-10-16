import logo from '../../../../assets/img/logo/movie-open.png';
import {Link} from "react-router-dom";
const index = ({height , wdith, center}) => {



  return (
    <>
        <Link to="/" className={`flex items-center  ${center ? ('justify-center') : ('justify-start')}`} >
            <div className={`flex items-center space-x-2 }`}>
              <img src={logo} alt="Chill Logo" className={`${height && height }  ${wdith && wdith }`}/>
             <span className="text-2xl font-bold">CHILL</span>
           </div>
        </Link>
    </>
   
  )
}

export default index
