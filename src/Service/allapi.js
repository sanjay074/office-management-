import axios from "axios";
import { baseUrl } from "../pages/config.js/baseUrl";
export const addUser = async (user) => {
    return await axios.post( baseUrl+`/AdminaddLoan`, user,{
      headers:{
        Authorization: `Bearer ` + localStorage.getItem('token'),
      }
    })
  };

export const getLoan = async (user)=>{
  return await axios.get( baseUrl+`/getAllLoan`,user,{
    headers:{
      Authorization: `Bearer` + localStorage.getItem('token'),
    }
  })
};
export const  getloanRequest = async (loan)=>{
   return await axios.get(baseUrl+`/admingetalluser`,loan,{
      headers:{
        Authorization: `Bearer ` + localStorage.getItem('token'),
      }
   })
};
 
export const  getloanAccepted = async (loan)=>{
   return await  axios.get(baseUrl+`/getacceptedusers`,loan,{
      headers:{
        Authorization: `Bearer ` + localStorage.getItem('token'),
      }
   })
};


export const getRejectedusers = async (loan)=>{
   return await axios.get(baseUrl+`/getRejecteduser`,loan,{
    headers:{
      Authorization: `Bearer ` + localStorage.getItem('token'),
    }
   })
};
export const  adminloanAccepted = async (id ,loan)=>{
  return await axios.put( baseUrl+`/adminAccepted/${id}`,loan,{
    headers:{
      Authorization: `Bearer ` + localStorage.getItem('token'),
    }
  })
};
export const adminloanRejected = async (id,loan)=>{
   return await axios.put(baseUrl+`/adminRejected/${id}`,loan,{
     headers:{
      Authorization: `Bearer ` + localStorage.getItem('token'),
     }
   })
};



export const deleteLoan = async (id,user)=>{
    return await axios.delete( baseUrl+`/deleteLoan/${id}`,user,{
      headers:{
        Authorization: `Bearer ` + localStorage.getItem('token'),
      }
    });
  }