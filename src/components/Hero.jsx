import { Users } from "lucide-react";
import { Hourglass } from "lucide-react";
import { CheckCircle } from "lucide-react";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function Hero() {
  const{filterdetails}=useSelector((state)=>state.visa);
  const pending = filterdetails.filter((item) => item.persons.status === "Pending").length;
  const activated = filterdetails.filter((item) => item.persons.status === "Activated").length;
  return (
    <motion.div 
    initial={{ opacity: 0, y: -500 }}   // starting position
      animate={{ opacity: 1, y: 0 }}     // final position
      transition={{ duration: 1,delay:0.5 }}     // animation duration
           // hover animation
    
    className="fixed  top-[130px] left-[20%]  z-10 w-[78%]">
    <div className='w-full grid grid-cols-3 gap-5 px-14 text-green-500'>

        <div
        className="h-[130px] relative hover:scale-105 transform-transition duration-300 bg-green-500 text-white rounded-2xl shadow-lg shadow-gray-300 p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold italic opacity-80">Travellers</h2>
          <h2 className="text-4xl font-bold opacity-90 mt-3">{filterdetails.length}</h2>
        </div>
        <Users className="absolute top-9 right-4 w-10 h-10 opacity-80" />
      </div>

<div
        
        className="h-[130px] relative hover:scale-105 transform-transition duration-300  bg-green-500 border-t-1 text-white rounded-2xl shadow-lg shadow-gray-300 p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold italic opacity-80">Pending</h2>
          <h2 className="text-4xl font-bold opacity-90 mt-3">{pending}</h2>
        </div>
        <Hourglass className="absolute top-9 right-4 w-10 h-10 opacity-80" />
      </div>


  <div
     
  className="h-[130px] relative bg-green-500 hover:scale-105 transform-transition duration-300  text-white rounded-2xl shadow-lg shadow-gray-300 p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-2xl font-bold  italic opacity-80">Activated</h2>
          <h2 className="text-4xl font-bold  opacity-90 mt-3">{activated}</h2>
        </div>
        <CheckCircle className="absolute top-9 right-4 w-10 h-10 opacity-80" />
      </div>


     
    </div>
    </motion.div>
  )
}

export default Hero
