import React from 'react'
import { toast } from 'react-toastify'
import { ToastContainer } from 'react-toastify';
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
 
    
     return (
       <div className="fixed inset-0 z-50  place-content-center place-items-center h-screen">
       
           <form 
          
           className="italic h-[calc(100%-100px)] flex flex-col space-y-3 overflow-y-auto relative bg-white pb-4 pt-14 px-6 rounded-3xl shadow-lg w-[35%]"
           onSubmit={updatedetails}
           
           >
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
           <div className="relative">
           <input type="text"
            name="firstName" 
            onChange={handlechange} 
            required
            placeholder='First Name'
            className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500" value={person.firstName} />
            <div className='px-2 absolute left-4 top-[-23%] bg-white'>First Name</div>
            </div>
   
     <div className="relative">
           <input type="text"
           onChange={handlechange}
           required 
           name='lastName'
           value={person.lastName}
           placeholder='Last Name'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"  />
           <div className='px-2 absolute left-4 top-[-22%] bg-white'>Last Name</div>
   
           </div>
   
   <div className="relative">
            <input type="text"
           onChange={handlechange}
            required
           name='gender' 
           placeholder="gender"
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.gender} />
             <label className='px-2 absolute left-4 top-[-22%] bg-white'>Gender</label>
   
   </div>
   
   

   <div className="relative">
    <input type="text"
           onChange={handlechange}
            required
           name='dob' 
           placeholder="DD/MM/YYYY"
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.dob} />
             <label className='px-2 absolute left-4 top-[-22%] bg-white'>Dob</label>
   </div>

   <div className="relative">
            <input type="text"
           onChange={handlechange}
            required
           name='nationality' 
           placeholder='Nationality'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.nationality} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Nationalty</label>
   </div>
   
   <div className="relative">
           <input type="text"
           onChange={handlechange} 
           required
           name='passportNo' 
           placeholder='Passport No'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.passportNo} />
             <label className='px-2 absolute left-4 top-[-22%] bg-white'>Passport No</label>
   </div>
   
   <div className="relative">
            <input type="text"
           onChange={handlechange}
          required
           name='passportExpiry' 
           placeholder='Passport Expiry'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.passportExpiry} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Passport Expiry</label>
   </div>
   
   <div className="relative">
            <input type="text"
           onChange={handlechange} 
           placeholder='Contact'
           required
           name='contact'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.contact} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Contact</label>
      </div>
   
        <div className="relative">  
           <input type="email"
           onChange={handlechange}
           required
           placeholder='Email'
           name='email'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.email} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>email</label>
           </div>  
   
     <div className="relative">  
            <input type="text"
           onChange={handlechange} 
           required
           name='addressLine1'
           placeholder='Address 1'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.addressLine1} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Address2</label>
   </div>

   <div className="relative">  
            <input type="text"
           onChange={handlechange} 
           required
           name='addressLine2'
           placeholder='Address 2'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.addressLine2} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Address2</label>
   </div>
   
   <div className="relative"> 
             <input type="text"
           onChange={handlechange}
          required
           name='state'
           placeholder='State'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.state} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>State</label>
   </div>
   
   <div className="relative"> 
    <input type="text"
           onChange={handlechange}
          required
           name='city'
           placeholder='City'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.city} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>City</label>
   </div>
   
   <div className="relative"> 
             <input type="text"
           onChange={handlechange} 
           required
           name='postcode'
           placeholder='postcode'
           className="w-full py-2 bg-white text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.postcode} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Postcode</label>
            </div> 

<div className="relative"> 
             <input type="text"
           onChange={handlechange} 
           required
           name='note'
           placeholder='Travelnote'
           className="w-full py-2 bg-white text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={person.note} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Travelnote</label>
            </div>

              <button
              type='submit'
              className="w-full text-2xl py-3 rounded-2xl font-bold text-white bg-green-500">Add  +</button>
         
          <button 
          type='button'
          className="w-13 h-13 text-xl not-italic bg-green-500 absolute top-1 right-2 text-white rounded-full"
          onClick={editpoppup}
          >
           X
         </button>

         
           </form>
       </div>
     )
}

export default Addcotraveler
