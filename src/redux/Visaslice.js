import { createSlice } from "@reduxjs/toolkit"
import { act } from "react";

// Initial state structure
const INITIAL_STATE = {
  alldetails: [], 
  filterdetails1:[],       // Original list of all jobs
  filterdetails: [],
   // Filtered list to display based on price/search
};

const visaslice = createSlice({
  name: 'visa',
  initialState: INITIAL_STATE,

  reducers: {
setvisadetails: (state, action) => {
  const stored = localStorage.getItem('visa');

  if (!stored) {
    // If no data in localStorage, save incoming payload
    localStorage.setItem('visa', JSON.stringify(action.payload));
  }

  // Always read from localStorage (including after saving)
  const visas = JSON.parse(localStorage.getItem('visa')) || [];

  // Update state
  state.alldetails = visas;
  state.filterdetails = visas;
  state.filterdetails1 = visas;
},

searchproducts: (state, action) => {
     state.alldetails = state.filterdetails.filter((item) =>
  item.persons.name.toLowerCase().includes(action.payload.toLowerCase()) ||
  item.persons.contact.toLowerCase().includes(action.payload.toLowerCase()) ||
  item.persons.visacenter.toLowerCase().includes(action.payload.toLowerCase()) ||
  item.persons.travelcountry.toLowerCase().includes(action.payload.toLowerCase()) ||
  item.persons.visatype.toLowerCase().includes(action.payload.toLowerCase()) ||
  item.persons.traveldate.toLowerCase().includes(action.payload.toLowerCase()) ||
  item.persons.agent.toLowerCase().includes(action.payload.toLowerCase())
);

      state.filterdetails1=state.alldetails;
      console.log(state.filterdetails1)
    },

  statusfilter: (state, action) => {
  const statusItems = action.payload;

  state.alldetails = statusItems.length === 0
    ? state.filterdetails1
    : state.filterdetails1.filter(item => statusItems.includes(item.persons.status)||statusItems.includes(item.persons.visacenter)||
  statusItems.includes(item.persons.travelcountry)
  );
},

Nameascendingsort: (state) => {
  state.alldetails.sort((a, b) => a.persons.name.localeCompare(b.persons.name));
},

Namedescendingsort: (state) => {
  state.alldetails.sort((a, b) => b.persons.name.localeCompare(a.persons.name));
},

dateascendingsort: (state) => {
  state.alldetails.sort((a, b) => a.persons.traveldate.localeCompare(b.persons.traveldate));
},

datedescendingsort: (state) => {
  state.alldetails.sort((a, b) => b.persons.traveldate.localeCompare(a.persons.traveldate));
},


setfilterpage:(state,action)=>{
  state.filterdetails1=action.payload;
  state.filterdetails=action.payload;
  state.alldetails=action.payload;
  
},

 newaddentry:(state,action)=>{
    state.alldetails=action.payload;
  },
  
   dropdownfilter:(state,action)=>{
    console.log(action.payload)
    state.alldetails=state.filterdetails.filter((item)=>item.id==action.payload)
    console.log("dddddd")
   }
  }
  


});

// Export actions and reducer
export const { setvisadetails,dropdownfilter,dateascendingsort,datedescendingsort,
  Namedescendingsort,searchproducts,statusfilter,Nameascendingsort,newaddentry,setfilterpage
} = visaslice.actions;

export default visaslice.reducer;
