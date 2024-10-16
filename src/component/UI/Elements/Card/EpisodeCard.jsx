/* eslint-disable react/prop-types */
 
const Episode = ({episode,image, filmname, duration, filmdescription}) => {
  return (
    <div className='w-full h-[137px] flex justify-center items-center rounded-md bg-[#424242] hover:cursor-pointer bg-opacity-0 hover:bg-opacity-100'>
    <div className='w-full h-[90%] flex justify-between items-center px-5 space-x-5'>
      <span className='w-[11px] text-xl text-white text-left'>{episode}</span>
      <div className='w-[170px] h-[96px] rounded-sm'>
        <img src={image} alt="" className='w-full h-full object-cover'/>
      </div>
      <div className='w-[80%] h-full flex flex-col justify-start items-center pt-2 space'>
          <div className='w-full flex justify-between items-center'>
            <h3 className='text-xl text-white text-left'>{filmname}</h3>
            <span className='text-md text-white text-left'>{duration}</span>
          </div>
          <div className='w-full flex justify-between items-center'>
          
            <span className='text-md text-[#C1C2C4] text-left md:line-clamp-2 line-clamp-1'>{filmdescription}</span>
          </div>
      </div>
    </div>
  </div>
  )
}

export default Episode
