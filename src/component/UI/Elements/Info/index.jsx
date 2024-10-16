/* eslint-disable react/prop-types */
 
const Info = ({message}) => {
   
  return (
    <div className="flex justify-center items-center h-full w-full text-center">
              <p className="text-2xl font-semibold text-gray-400 italic animate-pulse">
                 {message}
              </p>
    </div>
  )
  
}

export default Info
