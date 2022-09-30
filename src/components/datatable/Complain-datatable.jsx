import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
// import { userColumns } from "../../datatablesource";
// import { userColumns } from "../datatablesource/Weight-datatablescource";
import { userColumns } from "../datatablesource/Complain-datatablescourse";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";


const Complains = () => {

  const [data, setData] = useState();
  const [ids, setIds] = useState([])
  const [username, setUsername] = useState([])

  useEffect(async () => {
    let res = await axios.get("https://candidateapp.herokuapp.com/api/v1/getAllComplains");
    console.log("responce->", res.data.getAllComplain)
    const modifiedData = res.data.getAllComplain
      .reduce(
        (prev, current) => [
          ...prev,
          {
            ...current,
            name: `${current.branchName}`,
            id: current._id

          }
        ], []
      )
    setUsername(modifiedData)
  }, [])


  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      // field: "action",
      // headerName: "Action",
      // width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            {/* <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link> */}
            {/* <div
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

        Add New Complain
  
         {/* <Link to="/weight/new" className="link">
          Add New
       </Link>
              */}.
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

export default Complains;
