import { CheckCircle, Home, Hourglass, Settings, User } from 'lucide-react';


function Sidebaricons() {
    const items = [
    { icon: <Home className="w-5 h-5 ml-0.5"/>, label: "Home" },
    { icon: <User className="w-5.5 h-5.5" />, label: "Profile" },
    { icon: <Settings className="w-5 h-5" />, label: "Settings" },
    { icon: <Hourglass className="w-5 h-5" />, label: "Pending" },
    { icon: <CheckCircle className="w-5 h-5 " />, label: "Activated" },
  ];
  return (
    <div className='w-full mt-2'>
      {
        items.map((item)=>(
         <div className="p-2 flex gap-3  items-center hover:scale-105 transform-transition duration-300" key={item.label}>
           {item.icon}
           <label htmlFor="" className="text-[15px] font-bold">{item.label}</label>
         </div>

        ))
      }
    </div>
  )
}

export default Sidebaricons
