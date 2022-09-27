import React from 'react'
import './panModal.css';

const NewEmp = ({closeEmp}) => {
  return (
    <div className='modalBackground1'>
    <div className='maincontainer'>
          <div className="modalheader">
            <h5 className='title_name'>Add New Employee</h5>
            <button className='closeBtn' onClick={()=>
            {closeEmp(false);}}>X</button>
        
        </div>
        <div className="modalbody">
         <input type="text" name=""  placeholder='Company Name' required/>
         <input type="email" name=""  placeholder='Email' required/>
         <input type="text" name=""  placeholder='First Name' required />
         <input type="text" name=""  placeholder='Last Name'  required/>
         <input type="text" name=""  placeholder='Address 1' required/>
         <input type="text" name=""  placeholder='Address 2'  required/>
         <input type="text" name=""  placeholder='City' required/>
         <input type="text" name=""  placeholder='State' required/>
         <input type="text" name=""  placeholder='ZipCode' required/>
         <select >
          <option value="">Andhra Pradesh</option>
          <option value="">Arunachal Pradesh</option>
          <option value="">Bihar</option>
          <option value="">Uttar Pradesh</option>
          <option value="">Chhattisgarh</option>
         </select>
         <input type="text" name=""  placeholder='Mobile Number' required/>
         
        </div>
        <div className="modalFooter">
          <button className='diseble_color' onClick={()=>
            {closeEmp(false);}}>Cancel</button>
          <button>Save</button>
        </div>
        </div>
    </div>
  )
}

export default NewEmp
