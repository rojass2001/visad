import { CheckCircle, Home, Hourglass, Settings, User } from 'lucide-react';
import React from 'react'

function Sidebaricons() {
    const items = [
    { icon: <Home className="w-7 h-7" />, label: "Home" },
    { icon: <User className="w-7 h-7" />, label: "Profile" },
    { icon: <Settings className="w-7 h-7" />, label: "Settings" },
    { icon: <Hourglass className="w-7 h-7" />, label: "Pending" },
    { icon: <CheckCircle className="w-7 h-7 " />, label: "Activated" },
  ];
  return (
    <div className='w-full'>
      {
        items.map((item,i)=>(
         <div className="p-2 flex mb-4 gap-3  items-center hover:scale-105 transform-transition duration-300" key={item.label}>
           {item.icon}
           <label htmlFor="" className="text-xl font-bold">{item.label}</label>
         </div>

        ))
      }
    </div>
  )
}

export default Sidebaricons
