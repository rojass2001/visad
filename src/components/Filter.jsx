// SidePanel.jsx
import { Filter, Globe, MapPin, UserCircle2, CheckCircle, Calendar } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { dateascendingsort, datedescendingsort, Nameascendingsort, Namedescendingsort, statusfilter } from "../redux/Visaslice";
import Sidebaricons from "./Sidebaricons";
import { motion } from "framer-motion";


export default function SidePanel() {
  const [status, setStatus] = useState([]);
  const [category, setCategory] = useState("");
  const { filterdetails1 } = useSelector((state) => state.visa);
  const dispatch = useDispatch();

  useEffect(() => {
    setCategory("");
    setStatus([]);
  }, [filterdetails1]);

  const nameascending = (value) => {
    setCategory(value);
    dispatch(Nameascendingsort());
  };

  const namedescending = (value) => {
    setCategory(value);
    dispatch(Namedescendingsort());
  };

  const dateascending = (value) => {
    setCategory(value);
    dispatch(dateascendingsort());
  };

  const datedescending = (value) => {
    setCategory(value);
    dispatch(datedescendingsort());
  };

  function handlechange(value) {
    const updatedStatus = status.includes(value)
      ? status.filter((a) => a !== value)
      : [...status, value];
    setStatus(updatedStatus);
    setCategory("");
    dispatch(statusfilter(updatedStatus));
  }

  return (
    <motion.aside
    
      initial={{ opacity: 0, x: -500 }}   // starting position
      animate={{ opacity: 1, x: 0 }}     // final position
      transition={{ duration: 0.9,delay:1.2 }}     // animation duration
           // hover animation
      className="fixed bg-green-500 pl-0.5  shadow-lg shadow-gray-300 top-[20px] left-4 bottom-[20px] w-[200px] pb-8 pt-7  rounded-3xl italic text-white overflow-y-auto scrollbar-hidden" style={{height:'calc(100vh-40px)'}}>
    
   
      <div className="place-items-center">
        <div className="relative w-18 h-18">
          <img
            src="https://t4.ftcdn.net/jpg/10/00/85/93/360_F_1000859366_P6SmEvxeMgvXUhx5oFnsbM8rOiGN6SAG.jpg"
            alt="Profile"
            className="w-18 h-18 rounded-full"
          />
          <button className="absolute bottom-[4px] text-green-500 flex items-center justify-center font-bold right-[-2px]  rounded-full w-6 h-6 bg-white">+</button>
        </div>
        <h2 className="text-xl font-bold mt-2 mr-3 text-white">
          Hi Rojas
        </h2>
      </div>

      <Sidebaricons />

      <div className="text-md flex items-center  font-bold text-[25px] mt-3 mb-4">
        <Filter className="w-8 h-8" /> Filters
      </div>

      <div className="text-sm">
        <h3 className="flex gap-2 pl-2  text-lg font-bold mb-2 items-center">
          <Calendar className="w-5 h-5" /> By Date
        </h3>
        <ul className="pl-3 font-bold ">
          <li className="flex gap-2 items-center"><input className="w-2.5 h-2.5" checked={category === "dateasc"} onChange={() => dateascending("dateasc")} type="radio" name="date" />Low - High</li>
          <li className="flex gap-2 mt-3 items-center"><input className="w-2.5 h-2.5" checked={category === "datedesc"} onChange={() => datedescending("datedesc")} type="radio" name="date" />High - Low</li>
        </ul>
      </div>

      <div>
        <h3 className="flex gap-2 pl-[7px] text-lg mt-4 font-bold mb-2 items-center">
          <UserCircle2 className="w-5.5 h-5.5" /> By Name
        </h3>
        <ul className="pl-3.5 font-bold">
          <li className="flex gap-2 text-sm items-center"><input className="w-2.5 h-2.5" checked={category === "nameasc"} onChange={() => nameascending("nameasc")} type="radio" name="name" />Low - High</li>
          <li className="flex gap-2 mt-3 text-sm items-center"><input className="w-2.5 h-2.5" checked={category === "namedesc"} onChange={() => namedescending("namedesc")} type="radio" name="name" />High - Low</li>
        </ul>
      </div>

      <div>
      <h3 className="flex gap-2 pl-1.5 text-lg font-bold mb-2 mt-3 items-center">
          <CheckCircle className="w-5 h-5" /> Status
        </h3>
        <ul className="font-bold text-sm flex flex-col gap-2 pl-4">
          {['Pending', 'Refunded', 'Cancelled', 'Appointment', 'Activated'].map(stat => (
            <li className="flex items-center gap-2" key={stat}><input type="checkbox" checked={status.includes(stat)} onChange={() => handlechange(stat)} />{stat}</li>
          ))}
        </ul>
      </div>

      <div>
       <h3 className="flex gap-1 pl-1 text-lg font-bold mb-2 mt-4 items-center">
          <MapPin className="w-5 h-5" /> Visa Center
        </h3>
         <ul className="font-bold text-sm flex flex-col gap-2 pl-4">
          {['London', 'Manchester', 'Edinburgh'].map(center => (
            <li className="flex gap-2 items-center" key={center}><input type="checkbox" checked={status.includes(center)} onChange={() => handlechange(center)} />{center}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="flex gap-1.5 pl-1 italic text-lg font-bold mb-2 mt-4 items-center">
          <Globe className="w-5 h-5 ml-0.5" /> Country
        </h3>
        <ul className="font-bold text-sm flex flex-col gap-2 pl-4">
          {['America', 'Portugal', 'France', 'Denmark'].map(country => (
            <li className="flex gap-2 items-center" key={country}><input type="checkbox" checked={status.includes(country)} onChange={() => handlechange(country)} />{country}</li>
          ))}
        </ul>
      </div>
    </motion.aside>
  );
}