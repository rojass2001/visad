import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { dropdownfilter, searchproducts } from '../redux/Visaslice';
import { User, Bell, Mail, User2, User2Icon, UserCheck } from "lucide-react";
import Passengersentry from './Addentries';
import { Typewriter } from 'react-simple-typewriter';
import MarqueeBanner from './Marqueebanner';
import { motion } from 'framer-motion';

function Navbar() {
  const [search, setsearch] = useState("");
  const [entries, setentries] = useState(false);
 const[searchbar,setsearchbar]=useState(false)
const {alldetails}=useSelector((state)=>state.visa)
  
  const dispatch = useDispatch();

  const searchdrowpdownfilter = (id) => {
   dispatch(dropdownfilter(id))
   setsearchbar(false)
  };

  const handlechange = (e) => {
  const value = e.target.value;
  setsearch(value); // Update state

  setsearchbar(value !==""); // Show/hide search dropdown
  dispatch(searchproducts(value));
  
  // Call search with updated input
};

const searchproduct=()=>{
  dispatch(searchproducts(search)); 
  setsearchbar(false)
}

  return (
    <motion.header 
    initial={{ scale: 0.1, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.8,delay:1, ease: "easeOut" }}
    className="relative">
      
      <nav className={`w-[78%] fixed ${searchbar?"z-30":"z-10"} top-6 left-[20%] right-4 bg-white border-t-1 border-white rounded-3xl px-6 pt-4 pb-[120px] shadow-sm shadow-gray-400`}>
        
        <div className="flex items-center justify-between w-full">
          <h1 className="text-5xl mb-3 font-bold opacity-80 text-green-500 italic">Dashboard</h1>
        {/* Left: Search Box */}
        <div 
        onBlur={()=>setTimeout(()=>{setsearchbar(false)},200)}
        className="flex relative transition-all duration-600 ease-in-out items-center pt-2 gap-2 bg-white rounded-full shadow-[2px_2px_8px_green] px-5 py-2 hover:shadow-[4px_4px_12px_green] transform hover:scale-[1.02]">
  <input
    type="text"
    onChange={handlechange}
    value={search}
   
    placeholder="Search here"
    className="rounded-full text-lg italic pl-3 border-none outline-none h-10 bg-white transition-all duration-500 ease-in-out w-40 focus:w-[430px]"
  />
  <button
    onClick={searchproduct}
    className="px-5 py-3 bg-white text-sm italic font-bold rounded-xl border-2 border-green-500 transition duration-300 hover:bg-green-100"
  >
    Search
  </button>

  {/* 🔽 Suggestion Box */}
  {searchbar && search !== "" ? (
    <div 
    
    className="w-full absolute top-20 rounded-3xl text-black right-0 left-0 bg-white shadow-sm shadow-gray-500 py-5 px-2 z-10 max-h-80 overflow-y-auto">
      {alldetails?.length > 0 ? (
        alldetails?.map((item,i) => (
          <div
          onClick={()=>searchdrowpdownfilter(item.id)}
          className="flex gap-3 border-1 border-gray-200 text-black italic font-bold bg-white hover:bg-gray-200 cursor-pointer py-2 px-4 rounded-md mb-2" key={item.id}>
            <p className="">{item?.id}</p>
            <p>{item?.persons?.name.split(" ")[0]}</p>     
             <p>{item?.persons?.visacenter}</p>
             <p>{item?.persons?.traveldate}</p>
              <p>{item?.persons?.status}</p>
              <p>{item?.persons?.agent}</p>
          </div>
        ))
      ) : (
        <p className="text-gray-400 italic">No results found</p>
      )}
    </div>
  ) : null}
</div>


        {/* Right: Icons and Profile */}
        <div className="flex items-center gap-6 text-green-500">
          <button
  onClick={() => setentries(true)}
  className="flex items-center gap-2 px-6 py-3 text-lg font-semibold text-white border-2 hover:text-white border-green-500 rounded-full bg-green-500 transition duration-200"
>
  <UserCheck className="w-7 h-7" />
  Add Entry
</button>
          {/* Icons Group */}
           <User className="w-10 h-10 cursor-pointer hover:text-blue-500" />

          <div className="relative">
            <Mail className="w-10 h-10 cursor-pointer hover:text-blue-500" />
            <button className="h-6 w-6 rounded-full animate-bounce bg-red-500 text-white font-bold text-md absolute -top-1.5 right-[-3px]">1</button>
          </div>

          <div className="relative">
            <Bell className="w-10 h-10 cursor-pointer hover:text-blue-500" />
            <button className="h-6 w-6 animate-bounce rounded-full bg-red-500 text-white font-bold text-md absolute -top-1.5 right-[-3px]">1</button>
          </div>

          {/* Profile */}
          
<div className="py-4 px-9 hover:scale-110 transform-transition duration-300 gap-4 flex items-center bg-white rounded-full shadow-md shadow-gray-300">
            <img
              src="https://t4.ftcdn.net/jpg/10/00/85/93/360_F_1000859366_P6SmEvxeMgvXUhx5oFnsbM8rOiGN6SAG.jpg"
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border border-green-400"
            />
            <div className="flex flex-col">
              <h2 
               className="text-lg font-semibold text-gray-700 leading-tight">
    <Typewriter
      words={['Hi']}
      loop={Infinity}
      cursor
      cursorStyle="|"
      typeSpeed={200}
      deleteSpeed={300}
      delaySpeed={1000}
    />
             
                 <span className="text-green-500 font-bold">
                  <Typewriter
      words={['Rojass']}
      loop={Infinity}
      cursor
      cursorStyle="|"
      typeSpeed={200}
      deleteSpeed={200}
      delaySpeed={2000}
    />
            </span>
              </h2>
              <p className="text-sm text-gray-500">Welcome back!</p>
            </div>
          </div>

        </div>
        </div>
      </nav>

      {entries && <Passengersentry popup={() => setentries(false)} />}
    </motion.header>
  );
}

export default Navbar;


