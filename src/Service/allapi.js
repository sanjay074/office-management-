import axios from "axios";
import { baseUrl } from "../pages/config.js/baseUrl";
export const addClient = async (Client) => {
    return await axios.post( baseUrl+`/addClientAdmin`, Client,{
      headers:{
        Authorization: `Bearer ` + localStorage.getItem('token'),
      }
    })
  };

