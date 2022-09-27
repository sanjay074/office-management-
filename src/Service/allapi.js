import axios from "axios";
import { baseUrl } from "../pages/config.js/baseUrl";
export const addClient = async (Client) => {
    return await axios.post( baseUrl+`/addClientAdmin`, Client,{
      headers:{
        Authorization: `Bearer ` + localStorage.getItem('token'),
      }
    })
  };

export const getClient = async (client)=>{
    return await axios.get( baseUrl+`/adminFindallClient`,client,{
      headers:{
        Authorization: `Bearer` + localStorage.getItem('token'),
      }
    })
  };

  // export const deleteClient = async (id,client)=>{
  //   return await axios.delete( baseUrl+`/deleteClient/${id}`,client,{
  //     headers:{
  //       Authorization: `Bearer ` + localStorage.getItem('token'),
  //     }
  //   });
  // }  