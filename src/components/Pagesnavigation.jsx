import React from 'react'

function Pagesnavigation({handlenext, handlePrev,page}) {
  

  return (
    <div className='fixed h-13  rounded-lg items-center justify-center flex bottom-5 left-[300px] w-[calc(100%-400px)]  text-white'>
     <div className="shadow-md shadow-gray-300 px-12 border-t border-gray-200 rounded-full py-2">
      <button onClick={handlenext} className="p-1.5 bg-white shadow-md text-green-500 shadow-gray-300 rounded-l-2xl  mr-3">Prev</button>
         <span className="text-md font-bold text-green-500">{page+1}</span>
       <button onClick={handlePrev} className="p-1.5 text-green-500 bg-white shadow-md shadow-gray-300 ml-3  rounded-r-2xl">Next</button>
   </div>
    </div>
  )
}

export default Pagesnavigation
