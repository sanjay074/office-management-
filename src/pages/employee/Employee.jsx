import React,{useState} from 'react'
import "../Client/client.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import NewEmp from "../../components/Modal/NewEmp";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';

const Employee = () => {
  const [openTeam,setOpenTeam]=useState(false);
  return (
    <div className="loneReq">
    <Sidebar />

    <div className="lonenav">
      <Navbar />
      <div className="page-content">
        <div className="page-title">
          <h1>Employees</h1>
        </div>
        {/* Add client  form field start */}
        <section>
          <div className="row-form">
            <div className="col-md-8">
              <div className="form-card">
                <div className="cord-body table-responsive">
                  <div className="toolbar">
                    <div className="search">
                      <label htmlFor="search">Search :</label>
                      <input type="search" />
                    </div>
                    <div className="addClient">
                      <button onClick={()=>{
                    setOpenTeam(true);}}>Add New Employee</button>
                    </div>
                  </div>
                  {/* table start */}
                  <table
                    className="table table-striped listDataTable dataTable no-footer"
                    id="clientListDataTable"
                  >
                    <thead>
                      <tr>
                     
                        <th>Employee code</th>
                        <th>Employee name</th>
                        <th>Team name</th>
                        <th>Email</th>
                        <th>Job title</th>
                        <th style={{ width:"162px" }}>Action</th>
                        <th style={{ width:"138px" }}>
                          <select className="select2">
                            <option value="">Active</option>
                            <option value="">deactive</option>
                          </select>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                         <td>134</td>
                          <td>jfdkshkj</td>
                         <td>asdh</td>
                         <td>ssak@gmail.com</td>
                         <td>react</td>
                         <td><EditIcon />&nbsp;
                            <CloseIcon /></td>
                          <td style={{ color:"green"}}>Active</td>
                      </tr>
                    </tbody>
                  </table>
                  {/* Table End */}
                  <div className="pagignationShow">
                  <label htmlFor="">
                     Record per page
                       <select >
                        <option value="">5</option>
                        <option value="">10</option>
                        <option value="">25</option>

                       </select>
                       </label>
                    <div className="pageButton">
                      <ul><li><a href=""><KeyboardDoubleArrowLeftIcon /></a></li>
                      <li><a href="" className="numbers">1</a></li>
                      <li><a href=""><KeyboardDoubleArrowRightIcon /></a></li>
                      </ul>
                      {/* <button><KeyboardDoubleArrowLeftIcon /></button><button className="numbers">1</button><button><KeyboardDoubleArrowRightIcon /></button> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div>
         { openTeam && <NewEmp closeEmp={setOpenTeam}/>}
        </div>
        {/* Add client  form field end */}
      </div>
    </div>
  </div>
  )
}

export default Employee
