import React from 'react'
import { useDispatch } from 'react-redux';
import { newaddentry } from '../redux/Visaslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function PersonEdit({person, editpoppup}) {

  const dispatch=useDispatch()
    const [persons, setperson] = React.useState({
  id: person.persons.id,
  traveldate: person.persons.traveldate,
  name: person.persons.name,
  gender: person.persons.gender,
  visacenter: person.persons.visacenter,
  visatype: person.persons.visatype,
  status: person.persons.status,
  agent: person.persons.agent,
  travelcountry: person.persons.travelcountry,
  firstName: person.persons.firstName,
  lastName: person.persons.lastName,
  dob: person.persons.dob,
  passportNo: person.persons.passportNo,
  passportExpiry: person.persons.passportExpiry,
  contact: person.persons.contact,
  email: person.persons.email,
  address1: person.persons.address1,
  address2: person.persons.address2,
  state: person.persons.state,
  city: person.persons.city,
  nationality:person.persons.nationality,
  postcode: person.persons.postcode,
  note: person.persons.note,
});

 
   const updatedetails = (e) => {
  e.preventDefault();
  const stored = localStorage.getItem('visa');
  if (stored) {
    const parsed = JSON.parse(stored); // Parse JSON string to array

    const finditem = parsed.find((item) => item.id === persons.id);
    
    if (finditem) {
      finditem.persons = persons; // ✅ Update the persons field
      localStorage.setItem("visa", JSON.stringify(parsed));
      dispatch(newaddentry(parsed));
    toast.success(`${person.persons.name} Edited successfully!`, {
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
    }
   else {
      console.log("Item with matching ID not found");
    }
  } else {
    console.log("No data found in localStorage for 'visa'");
  }
};

    const handlechange=(e)=>{
      console.log(e.target.value)
        setperson({...persons,[e.target.name]:e.target.value})
    }
  return (
   <div className="fixed bg-black/75 inset-0 z-40 place-content-center place-items-center h-screen">
    
        <form 
        onSubmit={updatedetails}
        className="scrollbar-hidden italic relative overflow-y-auto h-[600px] bg-white pb-4 pt-14 px-6 rounded-3xl shadow-lg w-[35%]">

 <ToastContainer
    enableMultiContainer
    containerId="form-toast"
    position="top-center"
    
  />


 <div className="relative mb-3">
        <input type="Date"
         name="traveldate" 
         
         onChange={handlechange} 
         value={persons.traveldate}
         placeholder='traveldate'
         className="w-full py-2 text-sm text-black mb-3  font-bold pl-4 outline-none rounded-full border-2 border-green-500"  />
         <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Traveldate</div>
         </div>

        <div className="relative mb-3">
        <input type="text"
        
         name="name" 
         onChange={handlechange} 
         placeholder='name'
         value={persons.name}
         className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"  />
         <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Fullname</div>
         </div>

<div className="relative mb-3">
        <select 
        
         name="visacenter" 
         onChange={handlechange} 
         value={persons.visacenter}
         placeholder='visacenter'
         className="w-full py-2 text-sm text-black mb-3 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
         <option value="" className="">select Visacenter</option>
         <option value="London" className="">London</option>
         <option value="Manchester" className="">Manchester</option>
         <option value="Edinburgh" className="">Edinburgh</option>
        </select>
       <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Visacenter</div>
         </div>



<div className="relative mb-3">
        <input type="email"
        
         name="email" 
         onChange={handlechange} 
         placeholder='email'
         value={persons.email}
         className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"  />
         <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Email</div>
         </div>

<div className="relative mb-3">
        <select 
        
         name="status" 
         onChange={handlechange} 
         placeholder='traveldate'
         className="w-full py-2 text-sm text-black mb-3 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Status</option>
         <option value="Activated" className="">activated</option>
         <option value="Pending" className="">pending</option>
         <option value="cancelled" className="">cancelled</option>
         <option value="Refunded" className="">refunded</option>
         <option value="Appoinment" className="">appointment</option>
        </select>
       <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Status</div>
         
         </div>

<div className="relative mb-3">
        <select 
        
         name="agent" 
         onChange={handlechange} 
         placeholder='traveldate'
         className="w-full py-2 text-sm text-black mb-3 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Agent</option>
         <option value="Rohit" className="">Rohit</option>
         <option value="Sumit" className="">Sumit</option>
         <option value="Pankaj" className="">Pankaj</option>
        
        </select>
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Agent</div>
         
         </div>

<div className="relative mb-3">
        <select 
        
         name="travelcountry"
         value={persons.travelcountry} 
         onChange={handlechange} 
         placeholder='travelcountry'
         className="w-full py-2 text-sm text-black mb-3 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Country</option>
         <option value="America" className="">America</option>
         <option value="Denmark" className="">Denmark</option>
         <option value="Switzerland" className="">Switzerland</option>
          <option value="Norway" className="">Norway</option>
         <option value="France" className="">France</option>
         <option value="Ireland" className="">Ireland</option>
        
        </select>
       <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Travelcountry</div>
         
         </div>


         <div className="relative mb-3">
        <select 
        
         name="gender" 
         onChange={handlechange} 
         placeholder='visatype'
         className="w-full py-2 text-sm text-black mb-3 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Gender</option>
         <option value="male" className="">Male</option>
         <option value="female" className="">Female</option>
         <option value="other" className="">Other</option>
         
        
        
        </select>
 <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Gender</div>
         
         </div>


         <div className="relative mb-3">
        <select 
        
         name="visatype" 
         onChange={handlechange} 
         placeholder='visatype'
         className="w-full py-2 text-sm text-black mb-3 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Visatype</option>
         <option value="Family/friendvisit" className="">Family/friendvisit</option>
         <option value="tourist" className="">Tourist</option>
          <option value="business" className="">Business</option>
         <option value="other" className="">other</option>
        
        
        </select>
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Visatype</div>
         
         </div>

<div className="relative mb-3">
        <input type="text"
         name="firstName" 
         
         onChange={handlechange} 
         placeholder='First Name'
         className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
          value={persons.firstName} />
       <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Firstname</div>
         </div>

<div className="relative mb-3">
        <input type="text"
        onChange={handlechange} 
        name='lastName'
        
        placeholder='Last Name'
        className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.lastName} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Lastname</div>

        </div>

<div className="relative mb-3">
 <input type="date"
        onChange={handlechange} 
        name='dob' 
        
        placeholder="DD/MM/YYYY"
        className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.dob} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Dob</div>
</div>

<div className="relative mb-3">
        <input type="text"
        onChange={handlechange} 
        
        name='passportNo' 
        placeholder='Passport No'
        className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.passportNo} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Passport No</div>
</div>

<div className="relative mb-3">
         <input type="date"
        onChange={handlechange} 
        
        name='passportExpiry' 
        placeholder='Passport Expiry'
        className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.passportExpiry} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Passport Expiry</div>
</div>

<div className="relative mb-3">
         <input type="text"
        onChange={handlechange} 
        placeholder='Contact'
        name='contact'
        
        className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.contact} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Contact</div>
   </div>

<div className="relative mb-3">
         <input type="text"
        onChange={handlechange}
         
        placeholder='Nationality'
        name='nationality'
        className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.nationality} />
       <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Nationality</div>
   </div>

<div className="relative mb-3">  
         <input type="text"
         
        onChange={handlechange} 
        name='address1'
        placeholder='Address 1'
        className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.address1} />
         <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Address</div>
</div>


 <div className="relative mb-3">  
         <input type="text"
        onChange={handlechange} 
        name='address2'
        
        placeholder='Address 2'
        className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.address2} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Address 2</div>
</div>

<div className="relative mb-3"> 
          <input type="text"
        onChange={handlechange} 
        name='state'
        
        placeholder='State'
        className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.state} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Visacenter</div>
</div>

<div className="relative mb-3"> 
 <input type="text"
        onChange={handlechange} 
        name='city'
        
        placeholder='City'
        className="w-full py-2 text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.city} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>City</div>
</div>

<div className="relative mb-3"> 
          <input type="text"
        onChange={handlechange} 
        name='postcode'
        
        placeholder='postcode'
        className="w-full py-2 bg-white text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.postcode} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Postcode</div>
         </div> 

         <div className="relative "> 
          <input type="text"
        onChange={handlechange} 
        name='note'
        
        placeholder='Note'
        className="w-full py-2 bg-white text-sm text-black mb-3 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.note} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Travelnote</div>
         </div> 

 <button 
       className="w-8 h-8 text-sm not-italic z-20 bg-green-500 absolute top-3 right-3.5 text-white rounded-full"
       onClick={editpoppup}
       type="button"
       >
        X
      </button>
 
      <button type='submit' className="p-2 rounded-full w-full bg-green-500 border-2 border-green-500 text-black font-bold text-sm">Submit</button>
        </form>
      
    </div>
  )
}

export default PersonEdit