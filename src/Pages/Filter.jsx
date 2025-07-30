import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Card from '../components/Card'
import { setfilterpage } from '../redux/Visaslice'
import { visa } from '../Visa'
function Filter() {
  const {filterdetails}=useSelector((state)=>state.visa)
  const dispatch=useDispatch()
  useEffect(()=>{
  if(filterdetails.length===0){
   setfilterpagerefresh()
  }
},[])

const setfilterpagerefresh=()=>{
  const visa=JSON.parse(localStorage.getItem('visa'));
  dispatch(setfilterpage(visa))
}

  return (
    <div>
      <div className="w-[76%] fixed z-10  top-[40%] right-2 overflow-y-auto left-[20%]"
      style={{height:'calc(100vh - 500px)'}}
      >
        <div  className="w-full px-3 py-5 bg-white ">
           
         {
            filterdetails?.map((persons,i)=>(
              <Card persons={persons} key={persons.id}/>
            ))
         }
        </div>
      </div>
    </div>
  )
}


export default Filter
