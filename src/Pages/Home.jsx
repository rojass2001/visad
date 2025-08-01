import React, { useEffect, useState} from 'react'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import {visa} from '../Visa'
import { useDispatch, useSelector } from 'react-redux'
import { setvisadetails } from '../redux/Visaslice'
import Card from '../components/Card'
import Pagesnavigation from '../components/Pagesnavigation'
const itemsPerPage = 4;

function Home() {
    const {alldetails}=useSelector((state)=>state.visa)
    const dispatch=useDispatch()
    useEffect(()=>{
    setdetails()
    },[])
    const totalPages = Math.ceil(alldetails?.length / itemsPerPage);
  const [page, setPage] = useState(0);

  const handleNext = () => {
    setPage((prev) => (prev + 1 < totalPages ? prev + 1 : 0));
  };

  // Prev page with wrap
  const handlePrev = () => {
    setPage((prev) => (prev - 1 >= 0 ? prev - 1 : totalPages - 1));
  };


   function setdetails(){
      dispatch(setvisadetails(visa))
   }
  return (
    <div>
      <div className="w-[76%] fixed z-20 h-[300px] shadow-sm border-t border-gray-200 shadow-gray-300 pb-3 pt-2 scrollbar-hidden  overflow-y-auto  top-[280px] right-2  left-[20%]"
    
      >
        <div className="rounded-3xl   w-full relative overflow-y-auto  px-20 py-7"
       
    >
     
      <div className="w-full py-3 text-[13.5px] border-1 border-green-500 font-bold  italic pl-8 pr-15 flex justify-between shadow-sm shadow-gray-300 mb-6">
      <h1 className='text-gray-700'>Name</h1>
      <h1 className='text-gray-700'>Date</h1>
      <h1 className='text-gray-700'>Visacenter</h1>
      <h1 className='text-gray-700'>Agent</h1>
      <h1 className='text-gray-700'>Status</h1>
      <h1 className='text-gray-700'>Travelcountry</h1>
      <h1 className='text-gray-700'>Visatype</h1>
      <h1 className='text-gray-700'>Contact</h1>
      


      </div>
      {alldetails.length===0&&
      
      <h1 className="text-4xl text-green-500 italic text-center font-bold opacity-85">No Search Found</h1>
      
      }
      
         {
            alldetails?.slice(
    page * itemsPerPage,
    page * itemsPerPage + itemsPerPage
  ).map((persons)=>(
              <Card persons={persons} key={persons.id}/>
            ))
         }


        </div>
      </div>
       <Pagesnavigation handlePrev={handlePrev} page={page} handlenext={handleNext}/>
    </div>
  )
}

export default Home
