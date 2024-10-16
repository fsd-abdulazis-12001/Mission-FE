import { useState } from 'react';
import Logonya from '../../component/UI/Elements/logo';
import { FaUser, FaStar, FaSignOutAlt } from 'react-icons/fa';
import profilelogo from '../../assets/img/icon/profile.png';
import { FiMenu, FiX } from 'react-icons/fi';
//import UseAuth from '../hooks/useAuth';
import { Link } from 'react-router-dom';
 

import useAuthUser from 'react-auth-kit/hooks/useAuthUser'
import useIsAuthenticated from 'react-auth-kit/hooks/useIsAuthenticated';
import useSignOut from 'react-auth-kit/hooks/useSignOut';
const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navOpen, setNavOpen] = useState(false);
  const isAuthenticated = useIsAuthenticated()
  const authUser = useAuthUser()
  const signOut = useSignOut();
 
   
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };


  const toggleNav = () => {
    setNavOpen(!navOpen);
  };

  const logout = async () => {
    signOut()
     window.location.reload();
  };

  let profileImage 
 
  if (isAuthenticated && authUser && authUser.profileImage !=="nan") {
    profileImage = authUser.profileImage
  }else{
    profileImage = profilelogo
  }
  return (
    <div className="w-full bg-[#181A1C] text-white flex items-center justify-center">
      <header className="w-[95%] bg-[#181A1C] text-white flex items-center justify-between px-5 py-4 ">
      <div className="flex items-center space-x-5 md:space-x-11">
        <Logonya />
        <button onClick={toggleNav} className="focus:outline-none md:hidden">
          {navOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
        <nav className={`md:flex space-x-2 sm:space-x-11 ${navOpen ? 'block' : 'hidden'}  `}>
          <Link to="/series" className="hover:underline">Series</Link>
          <Link to="/films" className="hover:underline">Film</Link>
          <Link to="/daftarsaya" className="hover:underline">Daftar Saya</Link>
        </nav>
      </div>
      <div className="relative">
        <button 
          onClick={toggleDropdown}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img src={profileImage} alt="Profile" className="w-8 h-8 rounded-full" />
          <span className="hidden md:inline"></span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        {dropdownOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-gray-900 text-white rounded-md shadow-lg py-2 z-10">
               <Link to="/profile" className="block px-4 py-2 flex items-center space-x-2 hover:text-blue-500">
                  <FaUser />
                  <span>Profil Saya</span>
               </Link>
           
               <Link to="/subscribe" className="block px-4 py-2 flex items-center space-x-2 hover:text-blue-500">
                  <FaStar />
                  <span>Ubah Premium</span>
               </Link>

               <button 
                onClick={logout} 
                className="block px-4 py-2 w-full text-left flex items-center space-x-2 hover:text-blue-500"
              >
                <FaSignOutAlt />
                <span>Keluar</span>
              </button>
            
          </div>
        )}
      </div>
      </header>
    </div>
   
  )
}

export default Header;
