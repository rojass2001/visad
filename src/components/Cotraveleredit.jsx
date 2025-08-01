import React from 'react'
import { useDispatch } from 'react-redux';
import { newaddentry } from '../redux/Visaslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cotraveleredit({person, editpoppup,index,id}) {
  const dispatch=useDispatch()
const [persons, setperson] = React.useState({
  firstName: person.firstName,
  lastName: person.lastName,
  gender: person.gender,
  nationality: person.nationality,
  dob: person.dob,
  passportNo: person.passportNo,
  passportExpiry: person.passportExpiry,
  contact: person.contact,
  email: person.email,
  addressLine1: person.addressLine1,
  addressLine2: person.addressLine2,
  state: person.state,
  city: person.city,
  postcode: person.postcode,
  note: person.note,
});

       const handlechange=(e)=>{
           setperson({...persons,[e.target.name]:e.target.value})
       }

  const updatedetails = (e) => {
  e.preventDefault();

  const stored = localStorage.getItem('visa');
  if (stored) {
    const parsed = JSON.parse(stored); // Parse JSON string to array

    const finditem = parsed.find((item) => item.id===id);
    
    if (finditem) {
      finditem.cotravelers[index] = persons; // ✅ Update the `persons` field
      localStorage.setItem("visa", JSON.stringify(parsed));
      dispatch(newaddentry(parsed));
 toast.success(`${person.firstName} Edited successfully!`, {
  containerId: "form-toast",
   style: {
    backgroundColor: "white",
    color: "black",
    height: "16px",
    padding: "0 6px",
    fontWeight: "bold",
    borderRadius: "4px",
    fontSize: "10px",
    lineHeight: "1",
    marginTop:"60px",
    width: "200px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
});
    
    } else {
      console.log("Item with matching ID not found");
    }
  } else {
    console.log("No data found in localStorage for 'visa'");
  }
};
    
     return (
       <div className="fixed inset-0 bg-black/75 z-50 place-content-center place-items-center h-screen">
       
<form 
          
           className="scrollbar-hidden italic h-[600px] flex flex-col space-y-3 overflow-y-auto relative bg-white pb-4 pt-14 px-6 rounded-3xl shadow-lg w-[35%] scrollbar-hide"
           onSubmit={updatedetails}
           
           >
             <ToastContainer
                 enableMultiContainer
                 containerId="form-toast"
                 position="top-center"
                 
               />
             
           <div className="relative">
           <input type="text"
            name="firstName" 
            onChange={handlechange} 
            
            placeholder='First Name'
            className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500" value={persons.firstName} />
             <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>First name</div>
            </div>
   
     <div className="relative">
           <input type="text"
           onChange={handlechange}
            
           name='lastName'
           value={persons.lastName}
           placeholder='Last Name'
           className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"  />
         <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Last name</div>
   
           </div>
   
   <div className="relative">
            <input type="text"
           onChange={handlechange}
            
           name='gender' 
           placeholder="gender"
           className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.gender} />
            <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Gender</div>
   
   </div>
   
   

   <div className="relative">
    <input type="date"
           onChange={handlechange}
            
           name='dob' 
           placeholder="DD/MM/YYYY"
           className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.dob} />
             <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Dob</div>
   </div>

   <div className="relative">
            <input type="text"
           onChange={handlechange}
            
           name='nationality' 
           placeholder='Nationality'
           className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.nationality} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Nationality</div>
   </div>
   
   <div className="relative">
           <input type="text"
           onChange={handlechange} 
           
           name='passportNo' 
           placeholder='Passport No'
           className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.passportNo} />
            <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Passport No</div>
   </div>
   
   <div className="relative">
            <input type="date"
           onChange={handlechange}
           name='passportExpiry' 
           placeholder='Passport Expiry'
           className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.passportExpiry} />
            <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Passport Expiry</div>
   </div>
   
   <div className="relative">
            <input type="text"
           onChange={handlechange} 
           placeholder='Contact'
           
           name='contact'
           className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.contact} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Contact</div>
      </div>
   
        <div className="relative">  
           <input type="email"
           onChange={handlechange}
           
           placeholder='Email'
           name='email'
           className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.email} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Email</div>
           </div>  
   
     <div className="relative">  
            <input type="text"
           onChange={handlechange} 
           
           name='addressLine1'
           placeholder='Address 1'
           className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.addressLine1} />
            <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Address1</div>
   </div>

   <div className="relative">  
            <input type="text"
           onChange={handlechange} 
           
           name='addressLine2'
           placeholder='Address 2'
           className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.addressLine2} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Address2</div>
   </div>
   
   <div className="relative"> 
             <input type="text"
           onChange={handlechange}
          
           name='state'
           placeholder='State'
           className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.state} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>State</div>
   </div>
   
   <div className="relative"> 
    <input type="text"
           onChange={handlechange}
          
           name='city'
           placeholder='City'
           className="w-full py-2 text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.city} />
          <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>City</div>
   </div>
   
   <div className="relative"> 
             <input type="text"
           onChange={handlechange} 
           
           name='postcode'
           placeholder='postcode'
           className="w-full py-2 bg-white text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.postcode} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Postcode</div>
            </div> 

<div className="relative"> 
             <input type="text"
           onChange={handlechange} 
           
           name='note'
           placeholder='Travelnote'
           className="w-full py-2 bg-white text-sm mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.note} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Note</div>
            </div>

              <button
              type='submit'
              className="w-full text-md py-2 rounded-2xl font-bold text-white bg-green-500">Edit</button>
         
          <button 
          type='button'
          className="w-8 h-8 text-xs not-italic font-bold bg-green-500 absolute top-2 right-2 text-white rounded-full"
          onClick={editpoppup}
          >
           X
         </button>

         
           </form>
          
        
       </div>
     )
}

export default Cotraveleredit
