import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";

import { userColumns } from "../datatablesource/Services-datatablesource";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const ServiceDatatable = () => {
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
     const modifiedData = res.data.Services
     .reduce(
       (prev, current) => [
         ...prev,
         {
          
           ...current,
           name: `${current.title}`,
          id: current._id
          
         }
        ],[]
        )
        setUsername(modifiedData)
        setIsDelete(false)


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
  
  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 250,
      renderCell: (params) => {
        return (
          <div className="cellAction">
           
            <div onClick={() => {
              navigate("/edit-services", {state: {gym:params.row}})
            }} className="viewButton">Edit</div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
            <div onClick={() => {
              navigate("/add-demo", {state: {gym:params.row}})
            }} className="viewButton">Add Demo</div>
          </div>
        );
      },
    },
  ];



  // const DATA = [
  //   {
  //     id: 1,
  //     username: "lol",
  //     img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  //     status: "active",
  //     email: "1snow@gmail.com",
  //     age: 35,
  //   },]
  // const DATA = [
  //   {
  //     id: ids,
  //     username: username,
  //     coin: coin,
  //     number: phone,
  //   },]

  return (
    <div className="datatable">
      <div className="datatableTitle">

        Add  Gym branch Services 
        <Link to="/add-services" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={username}
        columns={userColumns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      />
    </div>
  );
};

export default ServiceDatatable;
