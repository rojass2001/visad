import React from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { newaddentry } from '../redux/Visaslice';

function PersonEdit({person, editpoppup}) {
  const dispatch=useDispatch()
    const [persons, setperson] = React.useState({
  id: person.id,
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

    const finditem = parsed.find((item) => item.id === person.id);
    
    if (finditem) {
      finditem.persons = persons; // ✅ Update the persons field
      localStorage.setItem("visa", JSON.stringify(parsed));
      dispatch(newaddentry(parsed));
      toast.success("Submitted successfully!", {
      containerId: 'form-toast', // <== important
      style: {
        background: '#ffffff', // white background
        color: '#000000',      // black text
        fontWeight: 'bold',
        marginTop:"100px",
        fontFamily: 'Poppins, sans-serif',
      },
    });
    } else {
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
    <div className="fixed inset-0 bg-black/75 z-20 place-content-center place-items-center h-screen">
     <form 
       onSubmit={updatedetails}
        className="italic relative overflow-y-auto max-h-[850px] bg-white pb-4 pt-18 px-6 rounded-3xl shadow-lg w-[35%]">
        <ToastContainer
        enableMultiContainer
        containerId="form-toast"
        position="top-center"
        autoClose={1000}
        hideProgressBar
        newestOnTop
        closeOnClick
        draggable={false}
        pauseOnHover={false}
        
      />
 <div className="relative mb-4">
        <input type="Date"
         name="traveldate" 
        value={persons.traveldate}
         onChange={handlechange} 
         placeholder='traveldate'
         className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"  />
         <div className='px-2 absolute left-4 top-[-23%] bg-white'>Traveldate</div>
         </div>

      <div className="relative mb-4">
        <input type="text"
         name="name" 
         value={persons.name}
         onChange={handlechange} 
         placeholder='name'
         className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"  />
         <div className='px-2 absolute left-4 top-[-23%] bg-white'>Full Name</div>
         </div>

<div className="relative mb-4">
        <select 
         name="visacenter" 
         value={persons.visacenter}
         onChange={handlechange} 
         
         placeholder='traveldate'
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
         name="email" 
         value={persons.email}
         onChange={handlechange} 
         placeholder='email'
         className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"  />
         <div className='px-2 absolute left-4 top-[-23%] bg-white'>Email</div>
         </div>

<div className="relative mb-4">
        <select 
         name="status" 
         value={persons.status}
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
         name="agent" 
         value={persons.agent}
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
         name="travelcountry" 
         value={persons.travelcountry}
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
         name="gender" 
         value={persons.gender}
         onChange={handlechange} 
         className="w-full py-2 text-xl mb-4 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Gender</option>
         <option value="Male" className="">Male</option>
         <option value="Female" className="">Female</option>
         <option value="Other" className="">other</option>
         
        </select>
        <div className='px-2 absolute left-4 top-[-23%] bg-white'>Gender</div>
         
         </div>


         <div className="relative mb-4">
        <select 
         name="visatype" 
         value={persons.visatype}
         onChange={handlechange} 
       
         className="w-full py-2 text-xl mb-4 font-bold pl-3 outline-none rounded-full border-2 border-green-500"
        >
          <option value="" className="">Select Visatype</option>
         <option value="Family/friend" className="">Family/friend</option>
         <option value="Tourist" className="">Tourist</option>
          <option value="Business" className="">Business</option>
         <option value="Other" className="">Other</option>
        
        
        </select>
        <div className='px-2 absolute left-4 top-[-23%] bg-white'>Visatype</div>
         
         </div>

<div className="relative mb-4">
        <input type="text"
         name="firstName" 
         onChange={handlechange} 
         placeholder='First Name'
         className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
          value={persons.firstName} />
         <div className='px-2 absolute left-4 top-[-23%] bg-white'>First Name</div>
         </div>

<div className="relative mb-4">
        <input type="text"
        onChange={handlechange} 
        name='lastName'
        
        placeholder='Last Name'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.lastName} />
        <div className='px-2 absolute left-4 top-[-22%] bg-white'>Last Name</div>

        </div>

<div className="relative mb-4">
 <input type="date"
        onChange={handlechange} 
        name='dob' 
        
        placeholder="DD/MM/YYYY"
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.dob} />
          <label className='px-2 absolute left-4 top-[-22%] bg-white'>Dob</label>
</div>

<div className="relative mb-4">
        <input type="text"
        onChange={handlechange} 
        
        name='passportNo' 
        placeholder='Passport No'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.passportNo} />
          <label className='px-2 absolute left-4 top-[-22%] bg-white'>Passport No</label>
</div>

<div className="relative mb-4">
         <input type="text"
        onChange={handlechange} 
        
        name='passportExpiry' 
        placeholder='Passport Expiry'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.passportExpiry} />
         <label className='px-2 absolute left-4 top-[-22%] bg-white'>Passport Expiry</label>
</div>

<div className="relative mb-4">
         <input type="text"
        onChange={handlechange} 
        placeholder='Contact'
        name='contact'
        
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.contact} />
         <label className='px-2 absolute left-4 top-[-22%] bg-white'>Contact</label>
   </div>

<div className="relative mb-4">
         <input type="text"
        onChange={handlechange}
         
        placeholder='Nationality'
        name='nationality'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.nationality} />
         <label className='px-2 absolute left-4 top-[-22%] bg-white'>Nationality</label>
   </div>

<div className="relative mb-4">  
         <input type="text"
         
        onChange={handlechange} 
        name='address1'
        placeholder='Address 1'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.address1} />
         <label className='px-2 absolute left-4 top-[-22%] bg-white'>Address1</label>
</div>


 <div className="relative mb-4">  
         <input type="text"
        onChange={handlechange} 
        name='address2'
        
        placeholder='Address 2'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.address2} />
         <label className='px-2 absolute left-4 top-[-22%] bg-white'>Address2</label>
</div>

<div className="relative mb-4"> 
          <input type="text"
        onChange={handlechange} 
        name='state'
        
        placeholder='State'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.state} />
         <label className='px-2 absolute left-4 top-[-22%] bg-white'>State</label>
</div>

<div className="relative mb-4"> 
 <input type="text"
        onChange={handlechange} 
        name='city'
        
        placeholder='City'
        className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.city} />
         <label className='px-2 absolute left-4 top-[-22%] bg-white'>City</label>
</div>

<div className="relative mb-4"> 
          <input type="text"
        onChange={handlechange} 
        name='postcode'
        
        placeholder='postcode'
        className="w-full py-2 bg-white text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.postcode} />
         <label className='px-2 absolute left-4 top-[-22%] bg-white'>Postcode</label>
         </div> 

         <div className="relative "> 
          <input type="text"
        onChange={handlechange} 
        name='note'
        
        placeholder='Note'
        className="w-full py-2 bg-white text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
         value={persons.note} />
         <label className='px-2 absolute left-4 top-[-22%] bg-white'>Travel note</label>
         </div> 

 <button 
       className="w-10 h-10 text-xl not-italic z-20 bg-green-500 absolute top-3 right-3.5 text-white rounded-full"
      onClick={editpoppup}
       type="button"
       >
        X
      </button>
 
      <button 
      type='submit' className="p-2 rounded-full w-full bg-green-500 border-2 border-green-500 text-black font-bold text-xl">Submit</button>
        
        </form>
    </div>
  )
}

export default PersonEdit