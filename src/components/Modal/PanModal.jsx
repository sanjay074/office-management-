import {useState} from "react"
import {addClient} from "../../Service/allapi";
import './panModal.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PanModal = ({closeModal}) => {
const [client,setClient] = useState({})
  const onValueChange = (e)=>{
    setClient({...client,[e.target.name]:e.target.value})
  }
 const  addClientnew = async ()=>{
  try{
  const res = await addClient(client)
  console.log(res)
  if(res){
    toast.success("Admin Add Client Succesfully",{autoClose:600});
  }
  }catch(e){
    console.log(e)
    toast.error('Failed To Submit', { autoClose: 600 });
  }
 }
  return (
    <div className='modalBackground1'>
    <div className='maincontainer'>
          <div className="modalheader">
            <h5 className='title_name'>Add New Client</h5>
            <button className='closeBtn' onClick={()=>
            {closeModal(false);}}>X</button>
        
        </div>
        <div className="modalbody">
         <input type="text"onChange={(e) => onValueChange(e)} name="company_name"  placeholder='Employee Name' required/>
         <input type="email"onChange={(e) => onValueChange(e)} name="email"  placeholder='Email' required/>
         <input type="text"onChange={(e) => onValueChange(e)} name="firstname"  placeholder='First Name' required/>
         <input type="text"onChange={(e) => onValueChange(e)}name="last_name"  placeholder='Last Name'  required/>
         <input type="text"onChange={(e) => onValueChange(e)}name="address1"  placeholder='Address 1' required/>
         <input type="text"onChange={(e) => onValueChange(e)} name="address2"  placeholder='Address 2'  required/>
         <input type="text"onChange={(e) => onValueChange(e)} name="city"  placeholder='City' required/>
         <input type="text"onChange={(e) => onValueChange(e)} name="state"  placeholder='State' required/>
         <input type="text"onChange={(e) => onValueChange(e)} name="postalcode"  placeholder='ZipCode' required/>
         <input type="text"onChange={(e) => onValueChange(e)} name="country" placeholder="country" required/>
         <input type="text"onChange={(e) => onValueChange(e)} name="phone_number"  placeholder='Mobile Number' required/>
         
        </div>
        <div className="modalFooter">
          <button className='diseble_color' onClick={()=>
            {closeModal(false);}}>Cancel</button>
          <button onClick={()=>addClientnew()}>Save</button>
          <ToastContainer/>
        </div>
        </div>
    </div>
  )
}

export default PanModal
