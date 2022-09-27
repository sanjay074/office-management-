import React from 'react'
import './addTeam.css';
const AddTeam = ({closeTeam}) => {
  return (
    <div className='modalBackground1'>
    <div className='maincontainer'>
          <div className="modalheader">
            <h5 className='title_name'>Add New Client</h5>
            <button className='closeBtn' onClick={()=>
            {closeTeam(false);}}>X</button>
        
        </div>
        <div className="teambody">
         <input type="text" name=""  placeholder='Company Name' required/>
       
        </div>
        <div className="modalFooter">
          <button className='diseble_color'onClick={()=>
            {closeTeam(false);}}>Cancel</button>
          <button>Save</button>
        </div>
        </div>
    </div>
  )
}

export default  AddTeam
