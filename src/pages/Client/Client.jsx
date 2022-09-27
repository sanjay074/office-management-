import React from "react";
import "./client.scss";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import PanModal from "../../components/Modal/PanModal";
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import {getClient} from "../../Service/allapi";
import { useState,useEffect } from "react";

const Client = () => {
    const [openModal,setOpenModal]=useState(false);
    const [client,setClient] = useState([]);
    useEffect(()=>{
      getallClient();
    },[]);

  const getallClient = async ()=>{
     try{
     const response  = await getClient();
     setClient(response.data.getClientuser)
     }catch(error){
       console.log(error);
     }
  }   
    
  return (
    <div className="loneReq">
      <Sidebar />

      <div className="lonenav">
        <Navbar />
        <div className="page-content">
          <div className="page-title">
            <h1>Clients</h1>
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
                      setOpenModal(true);}}>Add New Clients</button>
                      </div>
                    </div>
                    {/* table start */}
                    <table
                      className="table table-striped listDataTable dataTable no-footer"
                      id="clientListDataTable"
                    >
                      <thead>
                        <tr>
                       
                          <th style={{width:"620px"}} >Company Name</th>
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
                      {client.map((client, index) => (
                        <tr key={client._id}>
                           <td>{client.company_name}</td>
                            <td><EditIcon />&nbsp;
                            <CloseIcon /></td>

                            <td style={{ color:"green"}}>{client.status}</td>
                        </tr>
                         ))}
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
           { openModal && <PanModal closeModal={setOpenModal}/>}
          </div>
          {/* Add client  form field end */}
        </div>
      </div>
    </div>
  );
};

export default  Client;
