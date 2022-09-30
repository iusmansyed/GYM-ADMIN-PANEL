import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns } from "../../datatablesource";
import { userColumns } from "../datatablesource/demos-datatablescourse";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Button from '@mui/material/Button';

import axios from "axios";


const DemoDatatable = () => {
  const navigate = useNavigate();
  const [isdelete, setIsDelete] = useState(false);
  const [UUser , setUser] = useState([])
  const [ids, setIds] =useState([])
  const [username, setUsername]= useState([])
  const [coin, setCoin] = useState([])
  const [ phone , setPhone] = useState([])
  const [category, setCategory] = useState("");

  const getdata = async ()=>{

    let res = await axios.get("https://candidateapp.herokuapp.com/api/v1/getAllUserBookingDemo");
     console.log("responce->",res.data.getAllDemosBookings)
     setUser(res.data.getAllDemosBookings)  
     const modifiedData = res.data.getAllDemosBookings
     .reduce(
       (prev, current) => [
         ...prev,
         {
           ...current,
           name: `${current.branchName}`,
          id: current._id
          
         }
        ],[]
        )
    
        setUsername(modifiedData)
        setIsDelete(false)

  }

  const getBannerByCategory = async () => {
    try {
      const res = await axios.post(
        "https://candidateapp.herokuapp.com/api/v1/getBannerByCategory",
        {
          category,
        }
      );
      console.log(
        "🚀 ~ file: Banners-datatable.jsx ~ line 49 ~ getBannerByCategory ~ res",
        res.data.bannerByCategory
      );

      setUser(res?.data?.bannerByCategory);
      const modifiedData = res?.data?.bannerByCategory.reduce(
        (prev, current) => [
          ...prev,
          {
            ...current,
            category: `${current.category}`,
            id: current._id,
          },
        ],
        []
      );
      // setUsername(modifiedData);
      setIsDelete(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBannerByCategory();
  }, [category]);


  const handleDelete = (id) => {
     console.log("id yeh hai=>", id)

     var data = JSON.stringify({
      "id": id
    });
    
    var config = {
      method: 'delete',
      url: 'https://candidateapp.herokuapp.com/api/v1/deleteGymBranch',
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

    setCategory("");

  };
  useEffect(() => {
    getdata()
  }, [isdelete])
  useEffect(() => {
    getBannerByCategory();
  }, [isdelete]);
  
  const UserDemo=()=>{
    console.log("user dwmo ")
    navigate('/userdemolist');

  }
  const AddDemo=()=>{
    console.log("add dwmo ")
    navigate('/add-demo');

  }

  const actionColumn = [
    {
      // field: "action",
      // headerName: "Action",
      // width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
          {/* <div onClick={() => {
            navigate("/edit-gymbranch", {state: {gym:params.row}})
          }} className="viewButton">Edit</div>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div> */}
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
      <select
          id="category"
          className="form-select"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value={""} disabled>
            Choose Category
          </option>
          <option value="fitness">Fitness</option>
          <option value="wellness">Wellness</option>
          <option value="academy">Academy</option>
        </select>
      All Demos
        {/* <Link to="/add-gymbranch" className="link">
          Add New
        </Link> */}
      {/* <Button variant="contained" onClick={AddDemo}>Add Demo</Button> */}
      {/* <Button variant="contained" onClick={UserDemo}>User Demo</Button> */}
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

export default DemoDatatable;
