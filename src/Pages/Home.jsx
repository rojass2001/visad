import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Filter from '../components/Filter'
import {visa} from '../Visa'
import { useDispatch, useSelector } from 'react-redux'
import { setvisadetails } from '../redux/Visaslice'
import Card from '../components/Card'
import { motion } from 'framer-motion'

function Home() {
    const {alldetails}=useSelector((state)=>state.visa)
    const dispatch=useDispatch()
    useEffect(()=>{
    setdetails()
    },[])
   
   function setdetails(){
      dispatch(setvisadetails(visa))
   }
  return (
    <div>
      <motion.div className="w-[76%] fixed z-10  pt-8 top-[38%] right-2  left-[20%]"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.9, delay:1.2, ease: "easeOut" }}
      >
        <div className="rounded-3xl w-full relative overflow-y-auto border-green-500 px-20 py-7"

    style={{height:'calc(100vh - 500px)'}}>
      {alldetails.length===0&&
      
      <h1 className="text-4xl text-green-500 italic text-center font-bold opacity-85">No Search Found</h1>
      
      }
         {
            alldetails?.map((persons)=>(
              <Card persons={persons} key={persons.id}/>
            ))
         }

{alldetails.length>0&&

         <div className="p-2 justify-between text-white rounded-2xl shadow-sm font-bold border-2 border-green-500 shadow-gray-400 items-center bg-white flex">
      <button className="px-5 py-3.5 bg-green-500">1</button>
 <div className="flex gap-3">
 <button className="p-2 bg-green-500">1</button>
 <button className="p-2 bg-green-500">1</button>
 <button className="p-2 bg-green-500">1</button>
         </div>
        
<button className="px-5 py-3.5 bg-green-500">1</button>

        </div> }
        </div>
      </motion.div>
    </div>
  )
}

export default Home
