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

const VoucherDataTable = () => {
  const [allPayments, setAllPayments] = useState();

  const getdata = async () => {
    const res = await axios.get(
      "https://candidateapp.herokuapp.com/api/v1/getAllPaymentsRecords"
    );
    setAllPayments(res.data.getAllPaymentsRecords);
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <>
      <div style={{display:"flex",justifyContent:"space-between",  borderCollapse: "collapse"}}>
        <div>
          <table className="table table-striped" style={{border:"1px solid lightgrey",borderCollapse: "collapse"}}>
            <thead>
              <tr>
                <th scope="col"style={{border:"1px solid lightgrey"}}>user_id</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>FirstName</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>LastName</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>Number</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>Email</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>Gender</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>DateOfBirth</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>User_Address</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>Postal Code</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>Coin</th>
              </tr>
            </thead>
            {allPayments?.map((a) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row"><ArrowRightAltIcon/></th>
                    <td style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].user_id[0]?.firstName}</td>
                    <td  style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].user_id[0]?.lastName}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].user_id[0]?.number}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].user_id[0]?.email}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].user_id[0]?.gender}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].user_id[0]?.DOB}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].user_id[0]?.user_Address}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].user_id[0]?.postal_code}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].user_id[0]?.coin}</td>
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
                <th scope="col"style={{border:"1px solid lightgrey"}}>orderDetials</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>entity</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>amount</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>amount paid</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>amount due</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>currency</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>receipt</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>receipt</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>status</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>attempts</th>
              </tr>
            </thead>
            {allPayments?.map((a) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row"><ArrowRightAltIcon/></th>
                    <td   style={{border:"1px solid lightgrey"}}>{a.orderDetials.entity}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.orderDetials.amount}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.orderDetials.amount_paid}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.orderDetials.amount_due}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.orderDetials.currency}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.orderDetials.receipt}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.orderDetials.offer_id}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.orderDetials.status}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.orderDetials.attempts}</td>
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
                <th scope="col"style={{border:"1px solid lightgrey"}}>service_id</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>title</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>description</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>price</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>category</th>
              </tr>
            </thead>
            {allPayments?.map((a) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row"><ArrowRightAltIcon/></th>
                    <td style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].service_id[0].title}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].service_id[0].description}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].service_id[0].price}</td>
                    <td style={{border:"1px solid lightgrey"}}>{a.voucher_id[0].service_id[0].category}</td>
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
                <th scope="col"style={{border:"1px solid lightgrey"}}>voucher_id</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>discount_percentage</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>discount_coins</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>amount</th>
                <th scope="col"style={{border:"1px solid lightgrey"}}>payment_mode</th>
              </tr>
            </thead>
            {allPayments?.map((a) => {
              return (
                <tbody>
                  <tr>
                    <th scope="row"><ArrowRightAltIcon/></th>
                    <td style={{border:"1px solid lightgrey"}}> {a.voucher_id[0].discount_percentage}</td>
                    <td style={{border:"1px solid lightgrey"}}> {a.voucher_id[0].discount_coins}</td>
                    <td style={{border:"1px solid lightgrey"}}> {a.voucher_id[0].amount}</td>
                    <td style={{border:"1px solid lightgrey"}}> {a.voucher_id[0].payment_mode}</td>
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

export default VoucherDataTable;
