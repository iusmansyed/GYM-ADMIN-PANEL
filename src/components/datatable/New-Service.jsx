import React, { useState, useEffect } from "react";
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Divider from "@mui/material/Divider";

import Stack from "@mui/material/Stack";

import axios from "axios";

const NewServiceDatatable = () => {
    let navigate = useNavigate()
    const [isdelete, setIsDelete] = useState(false);
    const [UUser , setUser] = useState([])
    const [ids, setIds] =useState([])
    const [username, setUsername]= useState([])
    const [coin, setCoin] = useState([])
    const [ phone , setPhone] = useState([])
  
  
  
  
    const getdata = async ()=>{
      let res = await axios.get("https://candidateapp.herokuapp.com/api/v1/getAllGymService");
       console.log("responce->",res.data.Services)

       setUser(res.data.Services)  
      
  
  
    }
    
   
  
    const handleDelete = (id) => {
      var data = JSON.stringify({
        "id": id
      });
      
      var config = {
        method: 'delete',
        url: 'https://candidateapp.herokuapp.com/api/v1/deleteGymSevice',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        setIsDelete(true)
      })
      .catch(function (error) {
        console.log(error);
      });
    };
  
    useEffect(() => {
      getdata()
    }, [isdelete])
    
   
  
  

    return (
        <>
        <div style={{display:"flex",justifyContent:"space-between",  borderCollapse: "collapse"}}>
          <div>
            <table className="table table-striped" style={{border:"1px solid lightgrey",borderCollapse: "collapse"}}>
              <thead>
                <tr>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>user_id</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>title</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>description</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>image</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>price</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>category</th>
              
                </tr>
              </thead>
              {allPayments?.map((a) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row"><ArrowRightAltIcon/></th>
                      <td style={{border:"1px solid lightgrey"}}>{a.Services?.title}</td>
                      <td  style={{border:"1px solid lightgrey"}}>{a.Services?.description}</td>
                      <td style={{border:"1px solid lightgrey"}}>{a.Services?.image}</td>
                      <td style={{border:"1px solid lightgrey"}}>{a.Services?.price}</td>
                      <td style={{border:"1px solid lightgrey"}}>{a.Services?.category}</td>
                     
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div>
            <table className="table table-striped" style={{border:"1px solid lightgrey",borderCollapse: "collapse"}}>
              <thead>
                <tr>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>branch_id</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>managerName</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>manager_Phone_Number</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>branchName</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>branchCode</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>branchCity</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>branchPhoneNumber</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>opening_branchTiming</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>closing_branchTiming</th>
                  <th scope="col"style={{border:"1px solid lightgrey"}}>location</th>

                </tr>
              </thead>
              {allPayments?.map((a) => {
                return (
                  <tbody>
                    <tr>
                      <th scope="row"><ArrowRightAltIcon/></th>
                      <td   style={{border:"1px solid lightgrey"}}>{a.Services.branch_id[0]?.managerName}</td>
                      <td style={{border:"1px solid lightgrey"}}>{a.Services.branch_id[0]?.manager_Phone_Number}</td>
                      <td style={{border:"1px solid lightgrey"}}>{a.Services.branch_id[0]?.branchName}</td>
                      <td style={{border:"1px solid lightgrey"}}>{a.Services.branch_id[0]?.branchCode}</td>
                      <td style={{border:"1px solid lightgrey"}}>{a.Services.branch_id[0]?.branchCity}</td>
                      <td style={{border:"1px solid lightgrey"}}>{a.Services.branch_id[0]?.branchPhoneNumber}</td>
                      <td style={{border:"1px solid lightgrey"}}>{a.Services.branch_id[0]?.opening_branchTiming}</td>
                      <td style={{border:"1px solid lightgrey"}}>{a.Services.branch_id[0]?.closing_branchTiming}</td>
                      <td style={{border:"1px solid lightgrey"}}>{a.Services.branch_id[0]?.location}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
         
          </div>
      </>
    );
  };
  export default NewServiceDatatable;