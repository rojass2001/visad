import { motion } from "framer-motion";
import { Users } from "lucide-react";
import { Hourglass } from "lucide-react";
import { CheckCircle } from "lucide-react";

function Hero() {
  return (
    <div className="fixed  top-[190px] left-[20%]  z-10 w-[78%]">
    <div className='w-full grid grid-cols-3 gap-5 px-14 text-green-500'>

        <motion.div 
         initial={{ opacity: 0, x: -300 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1,delay:1.2 }}
        className="h-[170px] relative  bg-green-500 text-white rounded-2xl shadow-lg shadow-gray-300 p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold italic opacity-80">Travellers</h2>
          <h2 className="text-5xl font-bold opacity-90 mt-3">20</h2>
        </div>
        <Users className="absolute top-9 right-4 w-12 h-12 opacity-80" />
      </motion.div>

<motion.div 
         initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1,delay:1.7 }}
        className="h-[170px] relative bg-green-500 border-t-1 text-white rounded-2xl shadow-lg shadow-gray-300 p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold italic opacity-80">Pending</h2>
          <h2 className="text-5xl font-bold opacity-90 mt-3">20</h2>
        </div>
        <Hourglass className="absolute top-9 right-4 w-12 h-12  opacity-80" />
      </motion.div>


  <motion.div
     initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1,delay:2 }}
  className="h-[170px] relative bg-green-500 text-white rounded-2xl shadow-lg shadow-gray-300 p-5 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-bold  italic opacity-80">Activated</h2>
          <h2 className="text-5xl font-bold  opacity-90 mt-3">20</h2>
        </div>
        <CheckCircle className="absolute top-9 right-4 w-12 h-12 opacity-80" />
      </motion.div>


     
    </div>
    </div>
  )
}

export default Hero
