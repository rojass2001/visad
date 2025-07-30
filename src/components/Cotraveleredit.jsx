import React from 'react'
import { useDispatch } from 'react-redux';
import { newaddentry } from '../redux/Visaslice';


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
           onSubmit={updatedetails}
           className="italic bg-white  relative overflow-y-auto w-[35%] max-h-[800px] pb-4 pt-14 px-6 rounded-3xl shadow-lg">
             
           <div className="relative">
           <input type="text"
            name="firstName" 
            onChange={handlechange} 
            
            placeholder='First Name'
            className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500" value={persons.firstName} />
            <div className='px-2 absolute left-4 top-[-23%] bg-white'>First Name</div>
            </div>
   
     <div className="relative">
           <input type="text"
           onChange={handlechange} 
           name='lastName'
           value={persons.lastName}
           placeholder='Last Name'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"  />
           <div className='px-2 absolute left-4 top-[-22%] bg-white'>Last Name</div>
   
           </div>
   
   <div className="relative">
            <input type="text"
           onChange={handlechange}
            
           name='gender' 
           placeholder="gender"
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.gender} />
             <label className='px-2 absolute left-4 top-[-22%] bg-white'>Gender</label>
   
   </div>
   
   

   <div className="relative">
    <input type="text"
           onChange={handlechange}
            
           name='dob' 
           placeholder="DD/MM/YYYY"
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.dob} />
             <label className='px-2 absolute left-4 top-[-22%] bg-white'>Dob</label>
   </div>

   <div className="relative">
            <input type="text"
           onChange={handlechange}
            
           name='nationality' 
           placeholder='Nationality'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.nationality} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Nationalty</label>
   </div>
   
   <div className="relative">
           <input type="text"
           onChange={handlechange} 
           
           name='passportNo' 
           placeholder='Passport No'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.passportNo} />
             <label className='px-2 absolute left-4 top-[-22%] bg-white'>Passport No</label>
   </div>
   
   <div className="relative">
            <input type="text"
           onChange={handlechange}
          
           name='passportExpiry' 
           placeholder='Passport Expiry'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.passportExpiry} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Passport Expiry</label>
   </div>
   
   <div className="relative">
            <input type="text"
           onChange={handlechange} 
           placeholder='Contact'
      
           name='contact'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.contact} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Contact</label>
      </div>
   
        <div className="relative">  
           <input type="email"
           onChange={handlechange}
         
           placeholder='Email'
           name='email'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.email} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>email</label>
           </div>  
   
     <div className="relative">  
            <input type="text"
           onChange={handlechange} 
           
           name='addressLine1'
           placeholder='addressLine1'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.addressLine1} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Address2</label>
   </div>

   <div className="relative">  
            <input type="text"
           onChange={handlechange} 
           
           name='addressLine2'
           placeholder='AddressLine 2'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.addressLine2} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Address2</label>
   </div>
   
   <div className="relative"> 
             <input type="text"
           onChange={handlechange}
          
           name='state'
           placeholder='State'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.state} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>State</label>
   </div>
   
   <div className="relative"> 
    <input type="text"
           onChange={handlechange}
          
           name='city'
           placeholder='City'
           className="w-full py-2 text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.city} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>City</label>
   </div>
   
   <div className="relative"> 
             <input type="postcode"
           onChange={handlechange} 
           name='postcode'
           placeholder='postcode'
           className="w-full py-2 bg-white text-xl mb-4 font-bold pl-4 outline-none rounded-full border-2 border-green-500"
            value={persons.postcode} />
            <label className='px-2 absolute left-4 top-[-22%] bg-white'>Postcode</label>
            </div> 
              <button
              type='submit'
              className="w-full text-2xl py-3 rounded-2xl font-bold text-white bg-green-500">Edit</button>
         
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

export default Cotraveleredit
