/* eslint-disable react/prop-types */

import getErrorMessage from '../../../../utils/errorCode'
import { FaExclamationTriangle } from "react-icons/fa";
const CardError = ({errorObject}) => {
  return (
    <div className='w-full h-full flex flex-col justify-center items-center text-center p-6 bg-red-500/10 rounded-lg'>
    <FaExclamationTriangle className='text-6xl text-red-500 mb-4' />
    <h1 className='text-3xl font-bold text-red-400'>Oops! Something went wrong.</h1>
    <p className='text-xl mt-2'>{errorObject.message}</p>
    <p className='text-sm text-red-300 mt-1'>{getErrorMessage(errorObject.request.status)}</p>
    <p className='text-sm text-green-300 mt-1'>Sengaja Saya Limit, Buat Testing Tampilan</p>
  </div>
  )
}

export default CardError
