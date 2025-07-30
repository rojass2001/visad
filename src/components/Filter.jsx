import { Filter, Globe, MapPin, User, CheckCircle, Calendar, User2Icon, UserCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateascendingsort, datedescendingsort, Nameascendingsort, Namedescendingsort, statusfilter } from "../redux/Visaslice";
import Sidebaricons from "./Sidebaricons";
import { Typewriter } from "react-simple-typewriter";

export default function SidePanel() {
 
  const [status,setstatus]=useState([])
  const[category,setcategory]=useState("")
 const{filterdetails1}=useSelector((state)=>state.visa)
 const dispatch=useDispatch()

 useEffect(()=>{
    setcategory("")
    setstatus([])
 },[filterdetails1])
 const nameascending=(value)=>{
  setcategory(value)
  dispatch(Nameascendingsort())
 }

  const namedescending=(value)=>{
  setcategory(value)
  dispatch(Namedescendingsort())
 }

const dateascending=(value)=>{
  setcategory(value)
  dispatch(dateascendingsort())
 }

  const datedescending=(value)=>{
  setcategory(value)
  dispatch(datedescendingsort())
 }

function handlechange(value) {
  const updatedStatus = status.includes(value)
    ? status.filter(a => a !== value)
    : [...status, value];

  setstatus(updatedStatus);
 setcategory("")
  dispatch(statusfilter(updatedStatus));
  
}



  return (
    <motion.aside 
    initial={{ opacity: 0, x: -500 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.9,delay:2 }}
    style={{height:'calc(100vh-200px)'}}
    className="w-[17%] rounded-4xl scrollbar-hide  text-white italic pt-2 pb-[100px] overflow-y-auto fixed left-4 top-5 bottom-6 z-10  shadow-xl bg-green-500 px-3  border border-gray-200">
      <div className="w-full mb-1 py-3 rounded-3xl place-items-center">
        <div className="relative">
        <img src="https://t4.ftcdn.net/jpg/10/00/85/93/360_F_1000859366_P6SmEvxeMgvXUhx5oFnsbM8rOiGN6SAG.jpg" 
        alt=""
         className="w-[100px] h-[100px] rounded-full" />
         <button className="w-10 h-10 text-xl font-bold rounded-full bottom-1.5 right-[-8px] bg-green-500 absolute  shadow-md shadow-gray-300">+</button>
        </div>
     <h2 
                    className="text-2xl mt-3 font-semibold  leading-tight">
         <Typewriter
           words={['Hi Rojass Cherian']}
           loop={Infinity}
           cursor
           cursorStyle="|"
           typeSpeed={200}
           deleteSpeed={300}
           delaySpeed={1000}
         />
         </h2>


        
      </div>
      
<Sidebaricons/>


      <div className="text-4xl font-bold flex items-center gap-4 mb-7  mt-5">
        <Filter className="w-8 h-8 text-white" />
        Filters
      </div>

 {/* sortby date Filter */}
      <div className="t">
        <h3 className="text-2xl py-2  px-2 font-bold flex items-center gap-4 mb-4">
          <Calendar className="w-7 h-7 " />
          By Date
        </h3>
        <ul className="space-y-5 text-xl pl-6 font-bold">
          <li><input
          checked={category==="dateasc"}
            onChange={()=>dateascending("dateasc")}
          type="radio" className="mr-3 w-4 h-4" name="date" />Low - High</li>
          <li><input
          checked={category==="datedesc"}
            onChange={()=>datedescending("datedesc")}
          type="radio" className="mr-3 w-4 h-4"  name="date" />High - Low</li>
        </ul>
      </div>

      <div className="mt-6 mb-6">
        <h3 className="text-2xl py-2 px-2 font-bold flex items-center gap-4 mb-4">
          <UserCircle2 className="w-6.5 h-6.5 " />
          By Name
        </h3>
        <ul className="space-y-5 text-xl pl-6 font-bold ">
          <li><input 
          onChange={()=>nameascending("nameasc")}
          checked={category==="nameasc"}
          type="radio" className="mr-3 w-4 h-4" name="date" />Low - High</li>
          <li><input 
          checked={category==="namedesc"}
            onChange={()=>namedescending("namedesc")}
          type="radio" className="mr-3 w-4 h-4"  name="date" />High - Low</li>
        </ul>
      </div>

      {/* Status Filter */}
      <div className="mt-6">
        <h3 className="text-[26px] font-bold p-2 flex items-center gap-4 mb-4">
          <CheckCircle className="w-7 h-7 " />
          Status
        </h3>
        <ul className="space-y-3 pl-6 text-xl font-bold ">
          <li><input type="checkbox"
          onClick={()=>handlechange("Pending")}
           checked={status.includes("Pending")}  className="mr-3 w-5 h-5" />Pending</li>
           
           <li><input type="checkbox"
          onClick={()=>handlechange("Refunded")}
            checked={status.includes("Refunded")}  className="mr-3 w-5 h-5" />Refunded</li>

          <li><input type="checkbox"
          onChange={()=>handlechange("Cancelled")}
          checked={status.includes("Cancelled")}
         className="mr-3 w-5 h-5" />Cancelled</li>


          <li><input type="checkbox"
          onChange={()=>handlechange("Appointment")}
       
           checked={status.includes("Appointment")}
          className="mr-3 w-5 h-5" />Appointment</li>

          <li><input type="checkbox"
          
          onChange={()=>handlechange("Activated")}
          checked={status.includes("Activated")}
           className="mr-3 w-5 h-5" />Activated</li>
        </ul>
      </div>

       {/* Visa Center Filter */}
      <div className="mt-6">
        <h3 className="text-2xl font-bold pl-2 flex items-center gap-2 mb-4">
          <MapPin className="w-7 h-7" />
          Visa Center
        </h3>
        <ul className="space-y-3 text-xl pl-6 font-bold">
         
          <li><input type="checkbox"
           onChange={()=>handlechange("London")}
          checked={status.includes("London")}
          className="mr-3 w-5 h-5" />London</li>
          <li><input type="checkbox"
           onChange={()=>handlechange("Manchester")}
          checked={status.includes("Manchester")}
          className="mr-3 w-5 h-5" />Manchester</li>

          <li><input type="checkbox"
          onChange={()=>handlechange("Edinburgh")}
          checked={status.includes("Edinburgh")}
          className="mr-3 w-5 h-5" />Edinburgh</li>
        </ul> 
      </div>

      {/* Country Filter */}
      <div className="mt-6">
        <div className="text-2xl font-bold p-2 flex items-center gap-4 mb-4">
          <Globe className="w-7 h-7 " />
          Country
        </div>
        <ul className="space-y-3 text-xl pl-6 font-bold">
         
          <li><input
          onChange={()=>handlechange("America")}
          type="checkbox" value="America" className="mr-3 w-5 h-5" />America</li>
          <li><input
          onChange={()=>handlechange("Portugal")}
          type="checkbox" value="Portugal" className="mr-3 w-5 h-5" />Portugal</li>
          <li><input
          onChange={()=>handlechange("France")}
          type="checkbox" value="France" className="mr-3 w-5 h-5" />France</li>
           <li><input 
           onChange={()=>handlechange("Norway")}
           type="checkbox" value="Denmark" className="mr-3 w-5 h-5" />Denmark</li>
        </ul>
      </div>

     

     
    </motion.aside>
  );
} 