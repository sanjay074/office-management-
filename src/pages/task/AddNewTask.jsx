import React from "react";
import "../Client/client.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import { useState } from "react";
import styled from 'styled-components';
const SpacificTeam=styled.div`
width:82%;
height:auto;

.form-group{
  width:50%;
  padding-right:12px;
  padding-left:12px;

}
.form_title{
  background: #1b2135;
  color: #fff;
  padding-bottom: 5px;
  padding-top: 5px !important;
  margin-top: 15px;
  font-size:16px;
  text-align:center;
}
.form_search {
  margin-top: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
}
.form_search label {
        font-size: 14px;
         color:: #1b2135;
         font-weight: 500;
          }
.form_search input[type="search"] {
            height: 30px;
            width: auto;
            padding-left: 10px;
            outline: none;
            border-radius: 4px;
            margin-left: 8px;
            text-align: center;
            border: 1px solid #d5d7e1;
        }
        .tableres {
          width: 100%;
          height: auto;
          border-spacing: 0;
          margin-bottom: 20px !important;
          margin-top: 20px;
        
          border: 1px solid #d5d8e2;
      
      } 
      .tableres table {
        border-spacing: 0;
        width: 100%;
        border-collapse: separat;
        border-collapse: collapse;
    
      }

      .tableres table th, .tableres table td{
        border-left: 1px solid #d5d8e2;
      border-bottom: 1px solid #d5d8e2;
      padding: 10px 12px;
      font-size: 14px;
      text-transform: capitalize;
      color:: #1b2135;
    }
}
`
const SpecificEmployee =()=>{
  return(
  <SpacificTeam>
      <div className="form-group">
        <div className="col-6">
          <h6 className="form_title">Select employee(s)</h6>
        </div>
        <div className="form_search">
          <label htmlFor="">Search : <input type="search" /></label>
          <a href="">clear</a>
        </div>
      <div className="tableres">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>team  Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>sd</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </SpacificTeam>
  )
}
const SpecificTeam = ()=>
{
  return(
    <SpacificTeam>
      <div className="form-group">
        <div className="col-6">
          <h6 className="form_title">Select Team(s)</h6>
        </div>
        <div className="form_search">
          <label htmlFor="">Search : <input type="search" /></label>
          <a href="">clear</a>
        </div>
      <div className="tableres">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>team  Name</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" /></td>
              <td>sd</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
    </SpacificTeam>
  )
}
const AddNewTask = () => {
  const [checked, setChecked] = useState(false);
  const [selectedType, setSelectedType] = useState("Work Time");
  const [selectedAssign, setSelectedAssign] = useState("Entire Company");

  const handleChange = (event) => {
    console.log(event.target.value);
    setSelectedType(event.target.value);
  };
  const handleChangeAssign = (event) => {
    console.log(event.target.value);
    setSelectedAssign(event.target.value);
    console.log(event.target.value, "hello");
  };
  return (
    <div className="loneReq">
      <Sidebar />

      <div className="lonenav">
        <Navbar />
        <div className="page-content">
          <div className="page-title">
            <h1>Add New Tasks</h1>
          </div>
          <section>
            <div className="row-form">
              <div className="col-md-8">
                <div className="form-card">
                  <div className="cord-body table-responsive">
                    <div className="formcontrol">
                      <label htmlFor="">Task Name</label>
                      <input type="text" placeholder="Enter your Task" />
                    </div>
                    <div className="formcontrol">
                      <label htmlFor="">Type</label>
                      <label htmlFor="">
                        <input
                          type="radio"
                          name="choise"
                          value="Work Time"
                          onChange={handleChange}
                          checked={selectedType === "Work Time"}
                        />
                        &nbsp;Work time
                      </label>
                      <label htmlFor="">
                        <input
                          type="radio"
                          name="choise"
                          value="Break Time"
                          onChange={handleChange}
                          checked={selectedType === "Break Time"}
                        />
                        &nbsp;Break time
                      </label>
                    </div>
                    {selectedType === "Work Time" &&
                    <div className="formcontrol">
                      <label htmlFor="">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          defaultChecked={checked}
                          onChange={() => setChecked(!checked)}
                        />
                        Enable Idle and Logout screen when selecting this task
                        in timer after specified time
                      </label>
                    </div>}
                    <div className="formcontrol">
                      <label htmlFor="">Assign to: </label>
                      <label htmlFor="">
                        <input
                          type="radio"
                          name="choise-type"
                          value="Entire Company"
                          onChange={handleChangeAssign}
                          checked={selectedAssign === "Entire Company"}
                        />
                        &nbsp;Entire company
                      </label>
                      <label htmlFor="">
                        <input
                          type="radio"
                          name="choise-type"
                          value="Specific Team"
                          onChange={handleChangeAssign}
                        
                          checked={selectedAssign === "Specific Team"}

                        />
                      
                        &nbsp;Specific team
                      </label>
                      <label htmlFor="">
                        <input
                          type="radio"
                          name="choise-type"
                          value="Specific employee"
                          onChange={handleChangeAssign}
                         
                          checked={selectedAssign === "Specific employee"}
                          
                        />
                        &nbsp;Specific employee
                      </label>
                    </div>
                    {selectedAssign === "Specific Team" && <SpecificTeam />}
                    {selectedAssign === "Specific employee" && <SpecificEmployee />}
                    <button className="SaveTask">Save task</button>

                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AddNewTask;
