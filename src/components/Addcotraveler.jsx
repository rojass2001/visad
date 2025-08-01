import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Addcotraveler({editpoppup,id}) {
  console.log(id)
    const[person, setperson]=React.useState({ 
        firstName: "",
        lastName: "",
        gender: "",
        nationality: "",
        dob:"",
        passportNo: "",
        passportExpiry: "",
        contact: "",
        email:"",
        addressLine1: "",
        addressLine2: "",
        state: "",
        city:"",
        postcode: "",
        note: "",})
   
       const handlechange=(e)=>{
           setperson({...person,[e.target.name]:e.target.value})
       }

        const updatedetails = (e) => {
  e.preventDefault();

  const stored = localStorage.getItem('visa');
  if (stored) {
    const parsed = JSON.parse(stored); // Parse JSON string to array

    const finditem = parsed.find((item) => item.id == id);
    
    if (finditem) {
      finditem.cotravelers.push(person); // ✅ add the cotraveler field
      localStorage.setItem("visa", JSON.stringify(parsed));
       toast.success(`${person.firstName} added successfully to Cotravelelers`, {
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
       <div className="fixed inset-0 z-50 bg-black/80  place-content-center place-items-center h-screen">
       
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
            required
            placeholder='First Name'
            className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500" value={person.firstName} />
             <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>First name</div>
            </div>
   
     <div className="relative">
           <input type="text"
           onChange={handlechange}
           required 
           name='lastName'
           value={person.lastName}
           placeholder='Last Name'
           className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"  />
         <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Last name</div>
   
           </div>
   
   <div className="relative">
            <input type="text"
           onChange={handlechange}
            required
           name='gender' 
           placeholder="gender"
           className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.gender} />
            <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Gender</div>
   
   </div>
   
   

   <div className="relative">
    <input type="date"
           onChange={handlechange}
            required
           name='dob' 
           placeholder="DD/MM/YYYY"
           className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.dob} />
             <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Dob</div>
   </div>

   <div className="relative">
            <input type="text"
           onChange={handlechange}
            required
           name='nationality' 
           placeholder='Nationality'
           className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.nationality} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Nationality</div>
   </div>
   
   <div className="relative">
           <input type="text"
           onChange={handlechange} 
           required
           name='passportNo' 
           placeholder='Passport No'
           className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.passportNo} />
            <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Passport No</div>
   </div>
   
   <div className="relative">
            <input type="text"
           onChange={handlechange}
          required
           name='passportExpiry' 
           placeholder='Passport Expiry'
           className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.passportExpiry} />
            <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Passport Expiry</div>
   </div>
   
   <div className="relative">
            <input type="text"
           onChange={handlechange} 
           placeholder='Contact'
           required
           name='contact'
           className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.contact} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Contact</div>
      </div>
   
        <div className="relative">  
           <input type="email"
           onChange={handlechange}
           required
           placeholder='Email'
           name='email'
           className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.email} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Email</div>
           </div>  
   
     <div className="relative">  
            <input type="text"
           onChange={handlechange} 
           required
           name='addressLine1'
           placeholder='Address 1'
           className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.addressLine1} />
            <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Address1</div>
   </div>

   <div className="relative">  
            <input type="text"
           onChange={handlechange} 
           required
           name='addressLine2'
           placeholder='Address 2'
           className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.addressLine2} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Address2</div>
   </div>
   
   <div className="relative"> 
             <input type="text"
           onChange={handlechange}
          required
           name='state'
           placeholder='State'
           className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.state} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>State</div>
   </div>
   
   <div className="relative"> 
    <input type="text"
           onChange={handlechange}
          required
           name='city'
           placeholder='City'
           className="w-full py-2 text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.city} />
          <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>City</div>
   </div>
   
   <div className="relative"> 
             <input type="text"
           onChange={handlechange} 
           required
           name='postcode'
           placeholder='postcode'
           className="w-full py-2 bg-white text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.postcode} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Postcode</div>
            </div> 

<div className="relative"> 
             <input type="text"
           onChange={handlechange} 
           required
           name='note'
           placeholder='Travelnote'
           className="w-full py-2 bg-white text-sm placeholder:gray-400 mb-4 font-bold pl-4 outline-none text-black rounded-full border-2 border-green-500"
            value={person.note} />
           <div className='px-1 absolute font-bold left-4 -top-2 text-xs bg-white'>Note</div>
            </div>

              <button
              type='submit'
              className="w-full text-md py-2 rounded-2xl font-bold text-black bg-green-500">Add  <span className="text-xl">+</span></button>
         
          <button 
          type='button'
          className="w-8 h-8 text-sm not-italic font-bold bg-green-500 absolute top-1 right-2 text-white rounded-full"
          onClick={editpoppup}
          >
           X
         </button>

         
           </form>
       </div>
     )
}

export default Addcotraveler
