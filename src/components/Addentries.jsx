import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { newaddentry } from '../redux/Visaslice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Passengersentry({ popup}) {
  const{alldetails}=useSelector(state=>state.visa)
  const dispatch=useDispatch()

    const[person, setperson]=React.useState({
    id:alldetails.length+2,
    persons:{
      id:alldetails.length+2,
      traveldate: "",
    name: "",
    visacenter: "",
     visatype:"",
    status: "",
    agent: "",
    travelcountry: "",
      firstName: "",
      lastName: "",
      nationality:"",
      gender: "",
      dob: "", // Not visible
      passportNo: "",
      passportExpiry: "",
      contact: "",
      email: "",
      address1:"",
      address2: "",
      state: "",
      city: "",
      postcode: "",
      note:""},
  cotravelers:[]})

      
 const handlechange = (e) => {
  const { name, value } = e.target;
 console.log(person.persons.email)
  // For nested fields like "persons.name"
  if (name.startsWith("persons.")) {
    const key = name.split(".")[1];
    setperson((prev) => ({
      ...prev,
      persons: {
        ...prev.persons,
        [key]: value,
      },
    }));
  } else {
    // For top-level fields like "id", "cotravelers", etc.
    setperson((prev) => ({
      ...prev,
      [name]: value,
    }));
  }
};


function submit(e) {
  e.preventDefault();

  // Get existing visas from localStorage or start with empty array
  const storedVisas = JSON.parse(localStorage.getItem("visa")) || [];

  // Validate or clone person before adding (optional, if needed)
  const newPerson = { ...person };

  // Add the new person
  storedVisas.push(newPerson);

  // Save updated array back to localStorage
  localStorage.setItem("visa", JSON.stringify(storedVisas));
  dispatch(newaddentry(storedVisas))
 toast.success(`${person.persons.name} added Successfully`, {
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
  // Optional: log for confirmation
  console.log("Updated visa list:", storedVisas);
}


  return (
    <div className="fixed bg-black/75 inset-0 z-40 place-content-center place-items-center h-screen">
    
        <form 
        onSubmit={submit}
        className="scrollbar-hidden italic relative mb-3 overflow-y-auto h-[600px] bg-white pb-4 pt-14 px-6 rounded-3xl shadow-lg w-[35%]">
        <ToastContainer
    enableMultiContainer
    containerId="form-toast"
    position="top-center"
    
  />
 <div className="relative mb-3 ">
        <input type="Date"
         name="persons.traveldate" 
         required
         onChange={handlechange} 
         value={person.persons.traveldate}
         placeholder='traveldate'
         className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"  />
         <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Traveldate</div>
         </div>

        <div className="relative mb-3">
        <input type="text"
        required
         name="persons.name" 
         onChange={handlechange} 
         placeholder='name'
         value={person.persons.name}
         className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"  />
         <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Full Name</div>
         </div>

<div className="relative mb-3">
        <select 
        required
         name="persons.visacenter" 
         onChange={handlechange} 
         value={person.persons.visacenter}
         placeholder='visacenter'
         className="w-full py-2 text-sm mb-3  font-bold pl-3 outline-none text-black rounded-full border-2 border-green-500"
        >
         <option value="" className="">select Visacenter</option>
         <option value="London" className="">London</option>
         <option value="Manchester" className="">Manchester</option>
         <option value="Edinburgh" className="">Edinburgh</option>
        </select>
       <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Visacenter</div>
         </div>



<div className="relative mb-3">
        <input
         type="email"
        required
         name="persons.email" 
         onChange={handlechange} 
         placeholder='email'
         value={person.persons.email}
         className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"  />
         <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Email</div>
         </div>

<div className="relative mb-3">
        <select 
        required
         name="persons.status" 
         onChange={handlechange} 
         placeholder='traveldate'
         className="w-full py-2 text-sm mb-3  font-bold pl-3 outline-none text-black rounded-full border-2 border-green-500"
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
        required
         name="persons.agent" 
         onChange={handlechange} 
         placeholder='traveldate'
         className="w-full py-2 text-sm mb-3  font-bold pl-3 outline-none text-black rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Agent</option>
         <option value="Rohit" className="">Rohit</option>
         <option value="Sumit" className="">Sumit</option>
         <option value="Pankaj" className="">Pankaj</option>
        
        </select>
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Agent</div>
         
         </div>

<div className="relative mb-3 ">
        <select 
        required
         name="persons.travelcountry"
         value={person.persons.travelcountry} 
         onChange={handlechange} 
         placeholder='travelcountry'
         className="w-full py-2 text-sm mb-3  font-bold pl-3 outline-none text-black rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Country</option>
         <option value="America" className="">America</option>
         <option value="Denmark" className="">Denmark</option>
         <option value="Switzerland" className="">Switzerland</option>
          <option value="Norway" className="">Norway</option>
         <option value="France" className="">France</option>
        
        
        </select>
       <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Travelcountry</div>
         
         </div>


         <div className="relative mb-3 ">
        <select 
        required
         name="persons.gender" 
         onChange={handlechange} 
         placeholder='visatype'
         className="w-full py-2 text-sm mb-3  font-bold pl-3 outline-none text-black rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Gender</option>
         <option value="male" className="">Male</option>
         <option value="female" className="">Female</option>
         <option value="other" className="">other</option>
         
        
        
        </select>
 <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Gender</div>
         
         </div>


         <div className="relative mb-3 ">
        <select 
        required
         name="persons.visatype" 
         onChange={handlechange} 
         placeholder='visatype'
         className="w-full py-2 text-sm mb-3  font-bold pl-3 outline-none text-black rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Visatype</option>
         <option value="Family/friendvisit" className="">Family/friend</option>
         <option value="tourist" className="">Tourist</option>
          <option value="business" className="">Business</option>
         <option value="other" className="">other</option>
        
        
        </select>
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Visatype</div>
         
         </div>

<div className="relative mb-3 ">
        <input type="text"
         name="persons.firstName" 
         required
         onChange={handlechange} 
         placeholder='First Name'
         className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
          value={person.persons.firstName} />
       <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Firstname</div>
         </div>

<div className="relative mb-3 ">
        <input type="text"
        onChange={handlechange} 
        name='persons.lastName'
        required
        placeholder='Last Name'
        className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
         value={person.persons.lastName} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Lastname</div>

        </div>

<div className="relative mb-3 ">
 <input type="date"
        onChange={handlechange} 
        name='persons.dob' 
        required
        placeholder="DD/MM/YYYY"
        className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
         value={person.persons.dob} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Dob</div>
</div>

<div className="relative mb-3 ">
        <input type="text"
        onChange={handlechange} 
        required
        name='persons.passportNo' 
        placeholder='Passport No'
        className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
         value={person.persons.passportNo} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Passport No</div>
</div>

<div className="relative mb-3 ">
         <input type="date"
        onChange={handlechange} 
        required
        name='persons.passportExpiry' 
        placeholder='Passport Expiry'
        className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
         value={person.persons.passportExpiry} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Passport Expiry</div>
</div>

<div className="relative mb-3 ">
         <input type="text"
        onChange={handlechange} 
        placeholder='Contact'
        name='persons.contact'
        required
        className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
         value={person.persons.contact} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Contact</div>
   </div>

<div className="relative mb-3 ">
         <input type="text"
        onChange={handlechange}
        required 
        placeholder='Nationality'
        name='persons.nationality'
        className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
         value={person.persons.nationality} />
       <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Nationality</div>
   </div>

<div className="relative mb-3 ">  
         <input type="text"
         required
        onChange={handlechange} 
        name='persons.address1'
        placeholder='Address 1'
        className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
         value={person.persons.address1} />
         <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Address</div>
</div>


 <div className="relative mb-3 ">  
         <input type="text"
        onChange={handlechange} 
        name='persons.address2'
        required
        placeholder='Address 2'
        className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
         value={person.persons.address2} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Address 2</div>
</div>

<div className="relative mb-3 "> 
          <input type="text"
        onChange={handlechange} 
        name='persons.state'
        required
        placeholder='State'
        className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
         value={person.persons.state} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Visacenter</div>
</div>

<div className="relative mb-3 "> 
 <input type="text"
        onChange={handlechange} 
        name='persons.city'
        required
        placeholder='City'
        className="w-full py-2 text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
         value={person.persons.city} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>City</div>
</div>

<div className="relative mb-3 "> 
          <input type="text"
        onChange={handlechange} 
        name='persons.postcode'
        required
        placeholder='postcode'
        className="w-full py-2 bg-white text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
         value={person.persons.postcode} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Postcode</div>
         </div> 

         <div className="relative mb-3 "> 
          <input type="text"
        onChange={handlechange} 
        name='persons.note'
        
        placeholder='Note'
        className="w-full py-2 bg-white text-sm mb-3  font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
         value={person.persons.note} />
        <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Travelnote</div>
         </div> 

 <button 
       className="w-8 h-8 text-sm mb-3 not-italic z-20 bg-green-500 absolute top-3 right-3.5 text-white rounded-full"
       onClick={popup}
       type="button"
       >
        X
      </button>
 
      <button type='submit' className="p-2 rounded-full w-full bg-green-500 border-2 border-green-500 text-black font-bold text-sm">Submit</button>
        </form>
      
    </div>
  )
}

export default Passengersentry
