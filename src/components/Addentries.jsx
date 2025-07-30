import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { newaddentry } from '../redux/Visaslice';

function Passengersentry({ popup}) {
  const{alldetails}=useSelector(state=>state.visa)
  const dispatch=useDispatch()

    const[person, setperson]=React.useState({
    id:alldetails.length+1,
    persons:{
      id:alldetails.length+1,
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

  // Optional: log for confirmation
  console.log("Updated visa list:", storedVisas);
}


  return (
    <div className="fixed bg-black/75 inset-0 z-40 place-content-center place-items-center h-screen">
    
        <form 
        onSubmit={submit}
        className="italic relative overflow-y-auto max-h-[850px] bg-white pb-4 pt-18 px-6 rounded-3xl shadow-lg w-[35%] scrollbar-hide">
       
 <div className="relative mb-4">
        <input type="Date"
         name="persons.traveldate" 
         required
         onChange={handlechange} 
         value={person.persons.traveldate}
         placeholder='traveldate'
         className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"  />
         <div className='px-2 absolute left-4 top-[-23%] bg-white'>Traveldate</div>
         </div>

        <div className="relative mb-4">
        <input type="text"
        required
         name="persons.name" 
         onChange={handlechange} 
         placeholder='name'
         value={person.persons.name}
         className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"  />
         <div className='px-2 absolute left-4 top-[-23%] bg-white'>Full Name</div>
         </div>

<div className="relative mb-4">
        <select 
        required
         name="persons.visacenter" 
         onChange={handlechange} 
         value={person.persons.visacenter}
         placeholder='visacenter'
         className="w-full py-2 text-xl mb-4 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
         <option value="" className="">select Visacenter</option>
         <option value="London" className="">London</option>
         <option value="Manchester" className="">Manchester</option>
         <option value="Edinburgh" className="">Edinburgh</option>
        </select>
        <div className='px-2 absolute left-4 top-[-23%] bg-white'>Visacenter</div>
         </div>



<div className="relative mb-4">
        <input type="email"
        required
         name="persons.email" 
         onChange={handlechange} 
         placeholder='email'
         value={person.persons.email}
         className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"  />
         <div className='px-2 absolute left-4 top-[-23%] bg-white'>Email</div>
         </div>

<div className="relative mb-4">
        <select 
        required
         name="persons.status" 
         onChange={handlechange} 
         placeholder='traveldate'
         className="w-full py-2 text-xl mb-4 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Status</option>
         <option value="Activated" className="">activated</option>
         <option value="Pending" className="">pending</option>
         <option value="cancelled" className="">cancelled</option>
         <option value="Refunded" className="">refunded</option>
         <option value="Appoinment" className="">appointment</option>
        </select>
        <div className='px-2 absolute left-4 top-[-23%] bg-white'>Status</div>
         
         </div>

<div className="relative mb-4">
        <select 
        required
         name="persons.agent" 
         onChange={handlechange} 
         placeholder='traveldate'
         className="w-full py-2 text-xl mb-4 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Agent</option>
         <option value="Rohit" className="">Rohit</option>
         <option value="Sumit" className="">Sumit</option>
         <option value="Pankaj" className="">Pankaj</option>
        
        </select>
        <div className='px-2 absolute left-4 top-[-23%] bg-white'>Agent</div>
         
         </div>

<div className="relative mb-4">
        <select 
        required
         name="persons.travelcountry"
         value={person.persons.travelcountry} 
         onChange={handlechange} 
         placeholder='travelcountry'
         className="w-full py-2 text-xl mb-4 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Country</option>
         <option value="America" className="">America</option>
         <option value="Denmark" className="">Denmark</option>
         <option value="Switzerland" className="">Switzerland</option>
          <option value="Norway" className="">Norway</option>
         <option value="France" className="">France</option>
         <option value="Ireland" className="">Ireland</option>
        
        </select>
        <div className='px-2 absolute left-4 top-[-23%] bg-white'>Travelcountry</div>
         
         </div>


         <div className="relative mb-4">
        <select 
        required
         name="persons.gender" 
         onChange={handlechange} 
         placeholder='visatype'
         className="w-full py-2 text-xl mb-4 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Gender</option>
         <option value="male" className="">Male</option>
         <option value="female" className="">Female</option>
         <option value="other" className="">other</option>
         
        
        
        </select>
        <div className='px-2 absolute left-4 top-[-23%] bg-white'>Gender</div>
         
         </div>


         <div className="relative mb-4">
        <select 
        required
         name="persons.visatype" 
         onChange={handlechange} 
         placeholder='visatype'
         className="w-full py-2 text-xl mb-4 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Visatype</option>
         <option value="Family/friendvisit" className="">Family/friendvisit</option>
         <option value="tourist" className="">Tourist</option>
          <option value="business" className="">Business</option>
         <option value="other" className="">other</option>
        
        
        </select>
        <div className='px-2 absolute left-4 top-[-23%] bg-white'>Visatype</div>
         
         </div>

<div className="relative mb-4">
        <input type="text"
         name="persons.firstName" 
         required
         onChange={handlechange} 
         placeholder='First Name'
         className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
          value={person.persons.firstName} />
         <div className='px-2 absolute left-4 top-[-23%] bg-white'>First Name</div>
         </div>

<div className="relative mb-4">
        <input type="text"
        onChange={handlechange} 
        name='persons.lastName'
        required
        placeholder='Last Name'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={person.persons.lastName} />
        <div className='px-2 absolute left-4 top-[-22%] bg-white'>Last Name</div>

        </div>

<div className="relative mb-4">
 <input type="date"
        onChange={handlechange} 
        name='persons.dob' 
        required
        placeholder="DD/MM/YYYY"
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={person.persons.dob} />
          <button className='px-2 absolute left-4 top-[-22%] bg-white'>Dob</button>
</div>

<div className="relative mb-4">
        <input type="text"
        onChange={handlechange} 
        required
        name='persons.passportNo' 
        placeholder='Passport No'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={person.persons.passportNo} />
          <button className='px-2 absolute left-4 top-[-22%] bg-white'>Passport No</button>
</div>

<div className="relative mb-4">
         <input type="text"
        onChange={handlechange} 
        required
        name='persons.passportExpiry' 
        placeholder='Passport Expiry'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={person.persons.passportExpiry} />
         <button className='px-2 absolute left-4 top-[-22%] bg-white'>Passport Expiry</button>
</div>

<div className="relative mb-4">
         <input type="text"
        onChange={handlechange} 
        placeholder='Contact'
        name='persons.contact'
        required
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={person.persons.contact} />
         <button className='px-2 absolute left-4 top-[-22%] bg-white'>Contact</button>
   </div>

<div className="relative mb-4">
         <input type="text"
        onChange={handlechange}
        required 
        placeholder='Nationality'
        name='persons.nationality'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={person.persons.nationality} />
         <button className='px-2 absolute left-4 top-[-22%] bg-white'>Nationality</button>
   </div>

<div className="relative mb-4">  
         <input type="text"
         required
        onChange={handlechange} 
        name='persons.address1'
        placeholder='Address 1'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={person.persons.address1} />
         <button className='px-2 absolute left-4 top-[-22%] bg-white'>Address1</button>
</div>


 <div className="relative mb-4">  
         <input type="text"
        onChange={handlechange} 
        name='persons.address2'
        required
        placeholder='Address 2'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={person.persons.address2} />
         <button className='px-2 absolute left-4 top-[-22%] bg-white'>Address2</button>
</div>

<div className="relative mb-4"> 
          <input type="text"
        onChange={handlechange} 
        name='persons.state'
        required
        placeholder='State'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={person.persons.state} />
         <button className='px-2 absolute left-4 top-[-22%] bg-white'>State</button>
</div>

<div className="relative mb-4"> 
 <input type="text"
        onChange={handlechange} 
        name='persons.city'
        required
        placeholder='City'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={person.persons.city} />
         <button className='px-2 absolute left-4 top-[-22%] bg-white'>City</button>
</div>

<div className="relative mb-4"> 
          <input type="text"
        onChange={handlechange} 
        name='persons.postcode'
        required
        placeholder='postcode'
        className="w-full py-2 bg-white text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={person.persons.postcode} />
         <button className='px-2 absolute left-4 top-[-22%] bg-white'>Postcode</button>
         </div> 

         <div className="relative "> 
          <input type="text"
        onChange={handlechange} 
        name='persons.note'
        
        placeholder='Note'
        className="w-full py-2 bg-white text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={person.persons.note} />
         <button className='px-2 absolute left-4 top-[-22%] bg-white'>Travel note</button>
         </div> 

 <button 
       className="w-10 h-10 text-xl not-italic z-20 bg-green-500 absolute top-3 right-3.5 text-white rounded-full"
       onClick={popup}
       type="button"
       >
        X
      </button>
 
      <button type='submit' className="p-2 rounded-full w-full bg-green-500 border-2 border-green-500 text-black font-bold text-xl">Submit</button>
        </form>
      
    </div>
  )
}

export default Passengersentry
