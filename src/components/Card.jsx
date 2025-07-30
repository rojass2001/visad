import { Edit, Trash } from 'lucide-react'
import React, { useState } from 'react'
import PersonEdit from './Edit';
import Cotraveleredit from './Cotraveleredit';
import Addcotraveler from './Addcotraveler';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { newaddentry } from '../redux/Visaslice';

function Card({persons}) {

    const[open,setopen]=useState(false);
    const[edit,setedit]=useState(false);
    const[cotraveleredit,setcotraveleredit]=useState(false);
     const[addcotraveler,setaddcotraveler]=useState(false);
     const dispatch=useDispatch();

 const updatedetails = (id,index) => {
 

  const stored = localStorage.getItem('visa');
  if (stored) {
    const parsed = JSON.parse(stored); // Parse JSON string to array

    const finditem = parsed.find((item) => item.id===id);
    
    if (finditem) {
      finditem.cotravelers.splice(index,1); // ✅ Update the `persons` field
      localStorage.setItem("visa", JSON.stringify(parsed));
      dispatch(newaddentry(parsed));

     toast.success("Co-traveler removed successfully!", {
  containerId: 'form-toast',
  style: {
    background: '#fff',
    color: '#000',
    fontWeight: 'lighter',
    marginTop: '150px',
    borderRadius: '12px',
    padding: '12px 20px',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  position: "top-center",
  autoClose: 3000,
});

    } else {
      console.log("Item with matching ID not found");
    }
  } else {
    console.log("No data found in localStorage for 'visa'");
  }
};


  return (
    <>
      <div className={`w-full ${open?"h-auto":"h-16"} bg-white shadow-[4px_4px_8px_rgba(0,0,0,0.1),_-4px_-4px_8px_rgba(0,0,0,0.1)] relative overflow-hidden border-[1px] border-green-400 flex flex-col space-y-4 px-3 mb-15 py-2 rounded-3xl `}key={persons.id}>
                 <div className={`h-18 ${open?'border-b-2 border-green-500':""} flex justify-between  relative items-center px-3`}>
                  <h1 className="font-bold text-[23px] italic text-black">
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.name}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.traveldate}</span></h1>

   <h1 className="font-bold text-[23px] italic text-black"><span className='text-gray-600 text-xl ml-2' >{persons?.persons?.visacenter}</span>
      </h1>

        <h1 className="font-bold text-[23px] italic text-black">
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.agent}</span></h1>

      <h1 className="font-bold text-[23px] italic text-black">
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.status}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.travelcountry}</span></h1>   

                    <h1 className="font-bold text-[23px] italic text-black">
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.visatype}</span></h1>  

                    <h1 className="font-bold text-[23px] italic text-black">
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.contact}</span></h1>  
  <button
    onClick={()=>setopen(!open)}
     className="w-12 h-12   cursor-pointer bg-white  text-center text-3xl font-bold rounded-full ">{open?'-':'+'}
                </button>  
                                     
                </div>
                <div className="py-4 ">
           <div className="grid grid-cols-4 rounded-3xl py-3 gap-x-6 gap-y-9 px-2">
                <h1 className="font-bold text-[23px] italic text-black">First Name: 
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.firstName}</span></h1>
                <h1 className="font-bold text-[23px] italic text-black">Last Name: 
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.lastName}</span></h1>
                
<h1 className="font-bold text-[23px] italic text-black">Gender: 
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.gender}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">Dob: 
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.dob}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">Passport No: 
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.passportNo}</span></h1>

                    <h1 className="font-bold text-[23px] italic text-black">Passport expiry: 
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.passportExpiry}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">Contact: 
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.contact}</span></h1>

                    <h1 className="font-bold text-[23px] italic text-black">Email: 
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.email}</span></h1>

                    <h1 className="font-bold text-[23px] italic text-black">Address 2: 
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.address2}</span></h1>

                    <h1 className="font-bold text-[23px] italic text-black">State: 
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.state}</span></h1>

                     <h1 className="font-bold text-[23px] italic text-black">City: 
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.city}</span></h1>

                     <h1 className="font-bold text-[23px] italic text-black">Postcode: 
                    <span className='text-gray-600 text-xl ml-2' >{persons?.persons?.postcode}</span></h1>
    
    
         </div>

              {
  addcotraveler&&
  <Addcotraveler id={persons.id} editpoppup={()=>setaddcotraveler(false)}/>
 }     
 <div className="flex items-center gap-4 mt-3 ml-3">
                    <button
        onClick={()=>setedit(true)}
         className="w-[200px] text-2xl items-center gap-2 text-center justify-center italic text-black font-bold  border-2 border-green-500  rounded-full  py-2.5 flex bg-white">
          <Edit/> Edit</button>

           <button
       
         className="w-[200px] text-2xl items-center gap-2 text-center justify-center  italic text-black font-bold  border-2 border-green-500 rounded-full py-2.5 flex bg-white">
          <Trash/>Remove</button>  
    </div>

    

    
 
  
 
                </div>
{  /* */}
 <div className="text-[29px] italic font-bold mt-3 pb-2 border-b-2 border-green-500">Co-Travelers:</div>
 
{persons?.cotravelers?.length>0? 

<div className=''> 
  
    <div className="">
      {persons.cotravelers.map((traveler,i)=>(
        <div className='grid grid-cols-3 mb-6  rounded-3xl border-black border-2 py-3 gap-8 px-4' key={traveler.passportNo}>
        <h1 className="font-bold text-[23px] italic text-black">First Name: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.firstName}</span></h1>

 <h1 className="font-bold text-[23px] italic text-black">Last Name: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.lastName}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">Gender: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.gender}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">Dob: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.dob}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">Nationality: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.nationality}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">Passport No: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.passportNo}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">Passport Expiry:
                    <span className='text-gray-600 text-xl ml-2' >{traveler.passportExpiry}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">Contact: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.contact}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">Email: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.email}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">AddressLine1: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.addressLine1}</span></h1>

                    <h1 className="font-bold text-[23px] italic text-black">AddresssLine2: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.addressLine2}</span></h1>
<h1 className="font-bold text-[23px] italic text-black">State: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.state}</span></h1>

<h1 className="font-bold text-[23px] italic text-black">City: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.city}</span></h1>

                    <h1 className="font-bold text-[23px] italic text-black">Postcode: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.postcode}</span></h1>

                    <h1 className="font-bold text-[23px] italic text-black">TravelNote: 
                    <span className='text-gray-600 text-xl ml-2' >{traveler.note}</span></h1>
                  
                    <div className="flex items-center gap-4">
                    <button
        onClick={()=>setcotraveleredit(true)}
         className="w-[200px] text-2xl items-center gap-2 text-center justify-center italic text-black font-bold  border-2 border-green-500  rounded-full  py-2.5 flex bg-white">
          <Edit/> Edit</button>

           <button
        onClick={()=>updatedetails(persons.id,i)}
         className="w-[200px] text-2xl items-center gap-2 text-center justify-center  italic text-black font-bold  border-2 border-green-500 rounded-full py-2.5 flex bg-white">
          <Trash/>Remove</button> 
         </div>
         
                     {
  cotraveleredit &&(
  <Cotraveleredit person={traveler} index={i} id={persons.id} editpoppup={()=>setcotraveleredit(!cotraveleredit)}/>
  )
 }
 
  </div>
     )) }
  </div>
 



</div>:

<h3 className="text-2xl font-bold italic text-gray-400 ">No Cotravellers found</h3>
}
<div className="flex gap-3">
        <button
        onClick={()=>setaddcotraveler(true)}
         className="w-[15%] text-2xl h-14 italic bg-white border-2 text-black border-green-500  rounded-full mt-4 font-bold">+ Cotraveler</button>


</div>

 {edit&&
<PersonEdit person={persons} editpoppup={()=>setedit(prev=>!prev)}/>
}
   </div>
   </>
  )
}

export default Card
