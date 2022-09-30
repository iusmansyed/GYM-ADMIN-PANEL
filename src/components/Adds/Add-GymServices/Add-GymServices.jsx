import React from 'react';
import ReactQuill from "react-quill"
import "../../../../node_modules/react-quill/dist/quill.snow.css"
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import FormGroup from "@mui/material/FormGroup";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import { Alert } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import dayjs from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";

import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
// import FormGroup from "@mui/material/FormGroup";

import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import Stack from "@mui/material/Stack";


import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

const theme = createTheme();

// const ITEM_HEIGHT = 48;
// const ITEM_PADDING_TOP = 8;
// const MenuProps = {
//   PaperProps: {
//     style: {
//       maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
//       width: 250,
//     },
//   },
// };
const AddGymBranchService = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  let navigate = useNavigate();

  const [title, settitle] = useState("");
  const [category, setcategory] = useState("");
  const [description, setdescription] = useState("");
  const [image, setimage] = useState("");
  const [price, setprice] = useState("");

  const [Deliverables, setDeliverables] = useState("");

  // ============================================FITNESS STATES START================================================================
  const [branch, setBranch] = useState("");

  const [branch2, setBranch2] = useState([]);

  const [branchInfo, setBranchInfo] = useState("");

  const [demoDate, setDemoDate] = React.useState("");
  const [demoTime, setDemoTime] = React.useState("");

  const [packageDate, setPackageDate] = React.useState("");
  const [packageTime, setPackageTime] = React.useState("");

  const [packageDuration, setPackageDuration] = React.useState("");

  const [managerNumber, setManagerNumber] = useState("");
  const [managertime1, setManagerTime1] = React.useState("");
  const [managertime2, setManagerTime2] = React.useState("");




  const TimeChange11 = (newValue) => {
    setManagerTime1(newValue);
  };
  const TimeChange22 = (newValue) => {
    setManagerTime2(newValue);
  };

  let durationArray = [
    "1 Month",
    "2 Months",
    "3 Months",
    "4 Months",
    "5 Months",
    "6 Months",
    "7 Months",
    "8 Months",
    "9 Months",
    "10 Months",
    "11 Months",
  ];

  const [id, setId] = React.useState();

  const DateChange = (newValue) => {
    setDemoDate(newValue);
  };
  const TimeChange = (newValue) => {
    setDemoTime(newValue);
  };

  const DateChange2 = (newValue) => {
    setPackageDate(newValue);
  };
  const TimeChange2 = (newValue) => {
    setPackageTime(newValue);
  };
  //=========================================new requirement clients start ====================================================

  // const [ fitnessBox , setFitnessBox] = useState(true);
  const [chooseBranch, setChooseBranch] = useState(false);
  const [choosePrice, setChoosePrice] = useState("");
  const [chooseDuration, setChooseDuration] = useState(false);
  const [Preprice, setPreprice] = useState("");
  const [branchTime, setBranchTime] = useState("");
  const [branchId, setBranchId] = useState([]);

  //===============================================New req clients end======================================

  // ==============================================FITNESS STATES END================================================================

  const [academydate, setAcademydate] = useState("");
  const [academytime, setAcademytime] = useState("");
  const [academyprice, setacademyprice] = useState("");
  const [coachName, setcoachName] = useState("");
  const [coachNumber, setcoachNumber] = useState("");

  const [wellnessdate, setwellnessdate] = useState("");
  const [booktime, setbooktime] = useState("");

  const [wellnessbookdate, setwellnessbookdate] = useState("");
  const [wellnessbooktime, setwellnessbooktime] = useState("");
  const [wellnessbookprice, setWellnessBookprice] = useState("");

  const WellnessBookDateChange = (newValue) => {
    setwellnessbookdate(newValue);
  };

  const WellnessBookTimeChange = (newValue) => {
    setwellnessbooktime(newValue);
  };

  const AcedemyTimeChange = (newValue) => {
    setAcademytime(newValue);
  };
  const AcademyDateChange = (newValue) => {
    setAcademydate(newValue);
  };

  const BookTimeChange = (newValue) => {
    setbooktime(newValue);
  };
  const WellnessDateChange = (newValue) => {
    setwellnessdate(newValue);
  };

  const welnessCheckChange = (event) => {
    setwelnesschecked(event.target.checked);
  };
  const welnessFeeChange = (event) => {
    setwelnessfeechecked(event.target.checked);
  };

  const [welnesschecked, setwelnesschecked] = useState("");
  const [welnessfeechecked, setwelnessfeechecked] = useState("");
  // const [wellnessDescription, setwellnessDescription] = useState("");

  // ===========================================================================

  const runWellnessApi = async () => {
    if (
      title != "" &&
      image != "" &&
      body != "" &&
      bodyD != "" &&
      // wellnessdate != "" &&
      // booktime != "" &&
      // wellnessbookdate != "" &&
      // wellnessbooktime != "" &&
      wellnessbookprice != ""
      // packageDuration != ""
    ) {
      console.log("You ran Wellness api");
      console.log("title-->", title);
      console.log("image-->", image);
      console.log("description-->", body);
      console.log("deliverables -->", bodyD);
      // console.log("consultation date-->", wellnessdate);
      console.log("consultation time-->", booktime);
      console.log("price-->", wellnessbookprice);
      // console.log("booking date-->", wellnessbookdate);
      // console.log("booking time-->", wellnessbooktime);
      // console.log("package duration-->", packageDuration);

      let data = new FormData();
      data.append("title", title);
      data.append("description", body);
      data.append("price", wellnessbookprice);
      data.append("category", category);
      data.append("image", image);
      data.append("delievrables", bodyD);
      // data.append("packageDate", wellnessbookdate);
      // data.append("packageTime", wellnessbooktime);
      // data.append("packageDuration", packageDuration);
      // data.append("consultationDate", wellnessdate);
      // data.append("consultationTime", booktime);

      let config = {
        method: "post",
        url: "https://candidateapp.herokuapp.com/api/v1/addGymSevice",
        data: data,
      };
      axios(config)
        .then(function (response) {
          console.log("RESPONNSEEEE--->", response);
          window.alert("success");
          navigate("/services");
        })
        .catch(function (error) {
          console.log(error);
          window.alert("error");
        });
    }
    //  else window.alert("Please input all required fields!");
  };
  const runWellnessApiPart2 = async () => {
    if (
      title != "" &&
      image != "" &&
      body != "" &&
      bodyD != "" &&
      // wellnessdate != "" &&
      // booktime != "" &&
      // wellnessbookdate != "" &&
      // wellnessbooktime != "" &&
      wellnessbookprice != ""
      // packageDuration != ""
    ) {
      console.log("You ran Wellness api");
      console.log("title-->", title);
      console.log("image-->", image);
      console.log("description-->", body);
      console.log("deliverables -->", bodyD);
      // console.log("consultation date-->", wellnessdate);
      // console.log("consultation time-->", booktime);
      console.log("price-->", wellnessbookprice);
      // console.log("booking date-->", wellnessbookdate);
      // console.log("booking time-->", wellnessbooktime);
      console.log("package duration-->", packageDuration);

      let data = new FormData();
      data.append("title", title);
      data.append("description", bodyD);
      data.append("price", wellnessbookprice);
      data.append("category", category);
      data.append("image", image);
      data.append("delievrables", body);
      // data.append("packageDate", wellnessbookdate);
      // data.append("packageTime", wellnessbooktime);
      // data.append("packageDuration", packageDuration);
      // data.append("consultationDate", wellnessdate);
      // data.append("consultationTime", booktime);

      let config = {
        method: "post",
        url: "https://candidateapp.herokuapp.com/api/v1/addGymSevice",
        data: data,
      };
      axios(config)
        .then(function (response) {
          console.log("RESPONNSEEEE--->", response);
          window.alert("success");
          setPackageDuration("")
          setPackageDate("")
          setPackageTime("")
          setprice("")
          setDemoDate("")
          setManagerNumber("")
          setdescription("")
          setChooseBranch("")
          setChoosePrice("")
          setChooseDuration("")
          setAcademydate("")
          setAcademytime("")
          setacademyprice("")
          setcoachName("")
          setcoachNumber("")
          setwellnessdate("")
          setbooktime("")
          setwellnessbookdate("")
          setwellnessbooktime("")
          setWellnessBookprice("")
          setwelnesschecked("")
          setwelnessfeechecked("")
        })
        .catch(function (error) {
          console.log(error);
          window.alert("error");
        });
    } else window.alert("Please input all required fields!");
  };

  const runAcademyApi = async () => {


    console.log("You ran Academy api");
    console.log("title-->", title);
    console.log("image-->", image);
    console.log("description-->", bodyacademy);
    console.log("deliverables -->", bodyacademyy);
    console.log("package date-->", academydate);
    console.log("package time-->", academytime);
    console.log("price-->", academyprice);
    console.log("coach name-->", coachName);
    console.log("coach number-->", coachNumber);


    if (
      title != "" &&
      image != "" &&
      bodyacademy != "" &&
      bodyacademyy != "" &&
      academyprice != "" &&
      coachName != "" &&
      coachNumber != "" &&
      academydate != "" &&
      academytime != ""
    ) {
      console.log("You ran Academy api");
      console.log("title-->", title);
      console.log("image-->", image);
      console.log("description-->", bodyacademy);
      console.log("deliverables -->", bodyacademyy);
      console.log("package date-->", academydate);
      console.log("package time-->", academytime);
      console.log("price-->", academyprice);
      console.log("coach name-->", coachName);
      console.log("coach number-->", coachNumber);

      let data = new FormData();
      data.append("title", title);
      data.append("description", bodyacademy);
      data.append("category", category);
      data.append("image", image);
      data.append("price", academyprice);
      data.append("delievrables", bodyacademyy);
      data.append("coachName", coachName);
      data.append("contact_no", coachNumber);
      data.append("packageDate", academydate);

      let config = {
        method: "post",
        url: "https://candidateapp.herokuapp.com/api/v1/addGymSevice",
        data: data,
      };
      axios(config)
        .then(function (response) {
          console.log("RESPONNSEEEE--->", response);
          window.alert("success");
          navigate("/services");
        })
        .catch(function (error) {
          console.log(error);
          window.alert("error");
        });
    }
    // else window.alert("Please input all required fields!");
  };
  const runAcademyApiPart2 = async () => {
    if (
      title != "" &&
      image != "" &&
      bodyacademy != "" &&
      bodyacademyy != "" &&
      academyprice != "" &&
      coachName != "" &&
      coachNumber != "" &&
      academydate != "" &&
      academytime != ""
    ) {
      console.log("You ran Academy api");
      console.log("title-->", title);
      console.log("image-->", image);
      console.log("description-->", bodyacademy);
      console.log("deliverables -->", bodyacademyy);
      console.log("package date-->", academydate);
      console.log("package time-->", academytime);
      console.log("price-->", academyprice);
      console.log("coach name-->", coachName);
      console.log("coach number-->", coachNumber);

      let data = new FormData();
      data.append("title", title);
      data.append("description", bodyacademyy);
      data.append("category", category);
      data.append("image", image);
      data.append("price", academyprice);
      data.append("delievrables", bodyacademy);
      data.append("coachName", coachName);
      data.append("contact_no", coachNumber);
      data.append("packageDate", academydate);

      let config = {
        method: "post",
        url: "https://candidateapp.herokuapp.com/api/v1/addGymSevice",
        data: data,
      };
      axios(config)
        .then(function (response) {
          console.log("RESPONNSEEEE--->", response);
          window.alert("success");
          setPackageDuration("")
          setPackageDate("")
          setPackageTime("")
          setprice("")
          setDemoDate("")
          setManagerNumber("")
          setdescription("")
          setChooseBranch("")
          setChoosePrice("")
          setChooseDuration("")
          setAcademydate("")
          setAcademytime("")
          setacademyprice("")
          setcoachName("")
          setcoachNumber("")
          setwellnessdate("")
          setbooktime("")
          setwellnessbookdate("")
          setwellnessbooktime("")
          setWellnessBookprice("")
          setwelnesschecked("")
          setwelnessfeechecked("")
        })
        .catch(function (error) {
          console.log(error);
          window.alert("error");
        });
    } else window.alert("Please input all required fields!");
  };

  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? "pm" : "am";
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes.toString().padStart(2, "0");
    let strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  const runFitnessApi = async () => {
    if (
      title != "" &&
      image != "" &&
      bodyfitness != "" &&
      price != "" &&
      branch != "" &&
      packageDate != "" &&
      packageTime != "" &&
      packageDuration != "" &&
      managerNumber != "" &&
      managertime1 != "" &&
      managertime2 != ""
    ) {
      console.log("You ran Fitness api");
      console.log("title =>", title);
      console.log("category =>", category);
      console.log("image=>", image);
      console.log("description=>", bodyfitness);
      console.log("demo date=>", demoDate);
      console.log("demo time=>", demoTime);
      console.log("package date=>", packageDate);
      console.log("package time=>", packageTime);
      console.log("duration=>", packageDuration);
      console.log("manager number=>", managerNumber);
      console.log("branch id=>", branch);
      console.log("branch price=>", choosePrice);

      let x = formatAMPM(managertime1.$d);
      let y = formatAMPM(managertime2.$d);

      console.log("manager starting hour=>", x);
      console.log("manager ending hour=>", y);

      console.log("Working Hours--->", x + " - " + y);

      let data = new FormData();
      data.append("title", title);
      data.append("price", choosePrice);
      data.append("image", image);
      data.append("description", bodyfitness);
      data.append("category", category);
      data.append("branchesID_Array", JSON.stringify([branch]));

      if (demoDate != "" && demoTime != "") {
        data.append("demoDate", demoDate);
        data.append("demoTime", demoTime);
      }

      data.append("packageDate", packageDate);
      data.append("packageTime", packageTime);
      data.append("packageDuration", packageDuration);
      data.append("manager_contact_no", managerNumber);
      data.append("working_hours", x + " - " + y);

      let config = {
        method: "post",
        url: "https://candidateapp.herokuapp.com/api/v1/addGymSevice",
        data: data,
      };
      axios(config)
        .then(function (response) {
          console.log("RESPONNSEEEE--->", response);
          window.alert("success");
          navigate("/services");
        })
        .catch(function (error) {
          console.log(error);
          window.alert("error");
        });
    } else window.alert("Please input all required fields!");
  };
  const runFitnessApiPart2 = async () => {
    if (
      title != "" &&
      image != "" &&
      bodyfitness != "" &&
      price != "" &&
      branch != "" &&
      packageDate != "" &&
      packageTime != "" &&
      packageDuration != "" &&
      managerNumber != "" &&
      managertime1 != "" &&
      managertime2 != ""
    ) {
      console.log("You ran Fitness api");
      console.log("title =>", title);
      console.log("category =>", category);
      console.log("image=>", image);
      console.log("description=>", bodyfitness);
      console.log("demo date=>", demoDate);
      console.log("demo time=>", demoTime);
      console.log("package date=>", packageDate);
      console.log("package time=>", packageTime);
      console.log("duration=>", packageDuration);
      console.log("manager number=>", managerNumber);
      console.log("branch id=>", branch);
      console.log("branch price=>", choosePrice);

      let x = formatAMPM(managertime1.$d);
      let y = formatAMPM(managertime2.$d);

      console.log("manager starting hour=>", x);
      console.log("manager ending hour=>", y);

      console.log("Working Hours--->", x + " - " + y);

      let data = new FormData();
      data.append("title", title);
      data.append("price", choosePrice);
      data.append("image", image);
      data.append("description", bodyfitness);
      data.append("category", category);
      data.append("branchesID_Array", JSON.stringify([branch]));

      if (demoDate != "" && demoTime != "") {
        data.append("demoDate", demoDate);
        data.append("demoTime", demoTime);
      }

      data.append("packageDate", packageDate);
      data.append("packageTime", packageTime);
      data.append("packageDuration", packageDuration);
      data.append("manager_contact_no", managerNumber);
      data.append("working_hours", x + " - " + y);

      let config = {
        method: "post",
        url: "https://candidateapp.herokuapp.com/api/v1/addGymSevice",
        data: data,
      };
      axios(config)
        .then(function (response) {
          console.log("RESPONNSEEEE--->", response);
          window.alert("You can add new branch details now");
          // MAKE STATES NULL

          setPackageDuration("")
          setPackageDate("")
          setPackageTime("")
          setprice("")
          setDemoDate("")
          setManagerNumber("")
          setdescription("")
          setChooseBranch("")
          setChoosePrice("")
          setChooseDuration("")
          setAcademydate("")
          setAcademytime("")
          setacademyprice("")
          setcoachName("")
          setcoachNumber("")
          setwellnessdate("")
          setbooktime("")
          setwellnessbookdate("")
          setwellnessbooktime("")
          setWellnessBookprice("")
          setwelnesschecked("")
          setwelnessfeechecked("")
        })
        .catch(function (error) {
          console.log(error);
          window.alert("error");
        });
    } else window.alert("Please input all required fields!");
  };

  const onSubmit = async (data) => {
    // event.preventDefault();
    if (category === "fitness") {
      console.log("checking for api run");
      runFitnessApi();
    } else if (category === "academy") {
      console.log("checking for acadamy api run");
      runAcademyApi();
    } else if (category === "wellness") {

      runWellnessApi();
    }
  };
  const onSubmitPart2 = async (data) => {
    // event.preventDefault();
    if (category === "fitness") {
      console.log("checking for fitness api run");
      runFitnessApiPart2();
    } else if (category === "academy") {
      console.log("checking for  academy api run");

      runAcademyApiPart2();
    } else if (category === "wellness") {
      console.log("checking for wellness api run");

      runWellnessApiPart2();
    }
  };

  const getBranches = async () => {
    let res = await axios.get(
      "https://candidateapp.herokuapp.com/api/v1/getAllGymBranch"
    );

    console.log("responce=============->", res.data.getAllGymBranch);

    const modifiedData = res.data.getAllGymBranch.reduce(
      (prev, current) => [
        ...prev,
        {
          ...current,
          name: `${current.branchName}`,
          id: current._id,
          opening_branchTiming: new Date(
            current.opening_branchTiming
          ).toLocaleTimeString(),
          closing_branchTiming: new Date(
            current.closing_branchTiming
          ).toLocaleTimeString(),
        },
      ],
      []
    );
    setBranchInfo(modifiedData);
  };

  // const handleChange = (event) => {
  //   const {
  //     target: { value },
  //   } = event;

  //   setBranch2(typeof value === "string" ? value.split(",") : value);

  //   console.log("Here is brnch array", branch2);
  // };

  useEffect(() => {
    getBranches();
  }, []);

  useEffect(() => {
    // console.log("Data number--->", packageDuration, price);

    if (packageDuration !== "" && price !== "") {
      if (packageDuration === "1 Months") {
        setChoosePrice(Number(price) * 1);
        console.log("New Data number", Number(price) * 1);
      }
      if (packageDuration === "2 Months") {
        setChoosePrice(Number(price) * 2);

        console.log("New Data number", Number(price) * 2);
      }
      if (packageDuration === "3 Months") {
        setChoosePrice(Number(price) * 3);

        console.log("New Data number", Number(price) * 3);
      }
      if (packageDuration === "4 Months") {
        setChoosePrice(Number(price) * 4);

        console.log("New Data number", Number(price) * 4);
      }
      if (packageDuration === "5 Months") {
        setChoosePrice(Number(price) * 5);

        console.log("New Data number", Number(price) * 5);
      }
      if (packageDuration === "6 Months") {
        setChoosePrice(Number(price) * 6);

        console.log("New Data number", Number(price) * 6);
      }
      if (packageDuration === "7 Months") {
        setChoosePrice(Number(price) * 7);

        console.log("New Data number", Number(price) * 7);
      }
      if (packageDuration === "8 Months") {
        setChoosePrice(Number(price) * 8);

        console.log("New Data number", Number(price) * 8);
      }
      if (packageDuration === "9 Months") {
        setChoosePrice(Number(price) * 9);

        console.log("New Data number", Number(price) * 9);
      }
      if (packageDuration === "10 Months") {
        setChoosePrice(Number(price) * 10);

        console.log("New Data number", Number(price) * 10);
      }
      if (packageDuration === "11 Months") {
        setChoosePrice(Number(price) * 11);

        console.log("New Data number", Number(price) * 11);
      }
    }
  }, [price, packageDuration]);
  //  const DEMO =()=>{
  //   console.log("achaa")
  //  }

  const [body, setBody] = useState("");
  const handleBody =(e)=>{
    console.log(e);
    setBody(e);
  }
  const [bodyD, setBodyD] = useState("");
  const handleBodyD =(e)=>{
    console.log(e);
    setBodyD(e);
  }
  const [bodyacademy, setbodyacademy] = useState("");
  const handleBodacademy =(e)=>{
    console.log(e);
    setbodyacademy(e);
  }
  const [bodyacademyy, setbodyacademyy] = useState("");
  const handleBodacademyy =(e)=>{
    console.log(e);
    setbodyacademyy(e);
  }
  const [bodyfitness, setbodyfitness] = useState("");
  const handleBodefitness =(e)=>{
    console.log(e);
    setbodyfitness(e);
  }
  return (
    <form>
      <ThemeProvider theme={theme}>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <AddCircleOutlineIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Add Gym Services
            </Typography>

            <Box sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="title"
                    {...register("title", { required: true })}
                    fullWidth
                    id="firstName"
                    label="Title"
                    autoFocus
                    value={title}
                    onChange={(e) => settitle(e.target.value)}
                  />
                  {errors.title && (
                    <p style={{ color: "red" }}> Title is required</p>
                  )}
                </Grid>

                <Grid item xs={12} sm={6}>
                  <select
                    {...register("category", { required: true })}
                    id="category"
                    className="form-select"
                    value={category}
                    onChange={(e) => {
                      setcategory(e.target.value);
                      // DEMO();
                    }}
                  >
                    <option value={""} disabled>
                      Choose Category
                    </option>
                    <option value="fitness">Fitness</option>;
                    <option value="wellness">Wellness</option>
                    <option value="academy">Academy</option>
                  </select>

                  {errors.category && (
                    <p style={{ color: "red" }}> Category is required</p>
                  )}
                </Grid>

                {/* //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}

                {category === "fitness" ? (
                  <>
                    <Grid item xs={12} sm={6}>
                      <select
                        {...register("branch", { required: true })}
                        id="branch"
                        className="form-select"
                        value={branch}
                        onChange={(e) => {
                          setBranch(e.target.value);
                          setChooseBranch(true);
                        }}
                      >
                        <option value={""} disabled>
                          Choose branch
                        </option>

                        {branchInfo.length &&
                          branchInfo?.map((x, key) => {
                            return (
                              <option
                                // onClick={console.log("lund")}
                                value={x._id}
                              >
                                {x.branchName}
                              </option>
                            );
                          })}
                      </select>
                      {errors.branch && (
                        <p style={{ color: "red" }}> Branch is required</p>
                      )}
                    </Grid>

                    {chooseBranch ? (
                      <>
                        <Grid item xs={12} sm={6} mt={-2.5}>
                          Package Details
                          <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <Stack spacing={3}>
                              <select
                                {...register("packageDuration", {
                                  required: true,
                                })}
                                id="PackageDuration"
                                className="form-select"
                                value={packageDuration}
                                onChange={(e) => {
                                  setPackageDuration(e.target.value);
                                  setChooseDuration(true);
                                }}
                              >
                                <option value={""} disabled>
                                  Duration
                                </option>

                                {durationArray.map((x) => {
                                  return <option value={x}>{x}</option>;
                                })}
                              </select>
                              {errors.packageDuration && (
                                <p style={{ color: "red" }}>
                                  Package duration is required
                                </p>
                              )}

                              <DesktopDatePicker
                                label="Date"
                                inputFormat="MM/DD/YYYY"
                                value={packageDate}
                                onChange={DateChange2}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                              {errors.packageDate && (
                                <p style={{ color: "red" }}>
                                  Package date is required
                                </p>
                              )}
                              <TimePicker
                                label="Time"
                                value={packageTime}
                                onChange={TimeChange2}
                                renderInput={(params) => (
                                  <TextField {...params} />
                                )}
                              />
                              {errors.packageTime && (
                                <p style={{ color: "red" }}>
                                  Package time is required
                                </p>
                              )}

                              <TextField
                                inputProps={{
                                  inputMode: "numeric",
                                  pattern: "[0-9]*",
                                }}
                                {...register("price", { required: true })}
                                fullWidth
                                id="price"
                                label="price"
                                name="price"
                                autoComplete="price"
                                value={price}
                                onChange={(e) => setprice(e.target.value)}
                              />
                              {errors.price && (
                                <p style={{ color: "red" }}>
                                  price is required
                                </p>
                              )}

                              <TextField
                                disabled
                                id="outlined-disabled"
                                value={choosePrice}
                              />

                              {/* <select
                                {...register("branchTime", { required: true })}
                                id="branchTime"
                                className="form-select"
                                label="branch time"
                                name="branch time"
                                value={branchTime}
                                onChange={(e) => {
                                  setBranchTime(e.target.value);
                                }}
                              >
                                <option value={""} disabled>
                                  Choose branch time
                                </option>

                                {branchInfo.length &&
                                  branchInfo?.map((x, key) => {
                                    return (
                                      <option
                                        onClick={console.log("Branch Time-->", branchTime)}
                                        value={x._id}
                                      >
                                        {x.opening_branchTiming}-
                                        {x.closing_branchTiming}
                                      </option>
                                    );
                                  })}

                              </select>
                              {errors.branchTime && (
                                <p style={{ color: "red" }}>
                                  branch time is required
                                </p>
                              )} */}
                            </Stack>
                          </LocalizationProvider>
                        </Grid>

                        {chooseDuration ? (
                          <>
                            {/* <Grid item xs={12} sm={6}>
                              Book Demo
                              <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <Stack spacing={3}>
                                  <DesktopDatePicker
                                    label="Date"
                                    inputFormat="MM/DD/YYYY"
                                    value={demoDate}
                                    onChange={DateChange}
                                    renderInput={(params) => (
                                      <TextField {...params} />
                                    )}
                                  />
                                  {errors.demoDate && (
                                    <p style={{ color: "red" }}>
                                      Demo date is required
                                    </p>
                                  )}

                                  <TimePicker
                                    label="Time"
                                    value={demoTime}
                                    onChange={TimeChange}
                                    renderInput={(params) => (
                                      <TextField {...params} />
                                    )}
                                  />
                                  {errors.demoTime && (
                                    <p style={{ color: "red" }}>
                                      Demo time is required
                                    </p>
                                  )}
                                </Stack>
                              </LocalizationProvider>
                            </Grid> */}

                            <Grid item xs={12} sm={6} mt={-32}>
                              <Stack spacing={3}>
                                Manager Details
                                <TextField
                                  inputProps={{
                                    inputMode: "numeric",
                                    pattern: "[0-9]*",
                                    maxLength: 10,
                                    minLength: 10,
                                  }}
                                  autoComplete="managerNumber"
                                  name="managerNumber"
                                  {...register("manager_Phone_number", {
                                    required: true,
                                  })}
                                  fullWidth
                                  id="managerNumber"
                                  label="manager number"
                                  autoFocus
                                  value={managerNumber}
                                  onChange={(e) =>
                                    setManagerNumber(e.target.value)
                                  }
                                />
                                {errors.managerNumber && (
                                  <p style={{ color: "red" }}>
                                    manager number is required
                                  </p>
                                )}
                                <LocalizationProvider
                                  dateAdapter={AdapterDayjs}
                                >
                                  <Stack spacing={3}>
                                    <TimePicker
                                      label="Starting working hour"
                                      value={managertime1}
                                      onChange={TimeChange11}
                                      renderInput={(params) => (
                                        <TextField {...params} />
                                      )}
                                    />

                                    <TimePicker
                                      label="Ending working hour"
                                      value={managertime2}
                                      onChange={TimeChange22}
                                      renderInput={(params) => (
                                        <TextField {...params} />
                                      )}
                                    />
                                  </Stack>
                                </LocalizationProvider>
                              </Stack>
                            </Grid>

                            <Grid item xs={12} sm={16}>
                              {/* <TextField
                                {...register("description", { required: true })}
                                id="outlined-multiline-static"
                                multiline
                                rows={6}
                                label="Description"
                                name="description"
                                autoComplete="escription"
                                value={description}
                                onChange={(e) => setdescription(e.target.value)}
                              />
                              {errors.description && (
                                <p style={{ color: "red" }}>
                                  description is required
                                </p>
                              )} */}
                              <ReactQuill 
                      placeholder="Write some thing amazing ..."
                      modules={AddGymBranchService.modules}
                      formats={AddGymBranchService.formats}
                      onChange={handleBodefitness}
                      value={bodyfitness}
                      />
                            </Grid>
                          </>
                        ) : null}
                        <Grid item xs={12} sm={6}>
                          <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit(onSubmitPart2)}
                          >
                            Add new Branch
                          </Button>
                        </Grid>
                      </>
                    ) : null}
                  </>
                ) : category === "academy" ? (
                  ////////////////////////////////////////////////////////////////////////Academy code///////////////////////////////////////////////////////////////
                  <>
                    <Grid item xs={12} sm={6}>
                      Book Package
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                          <DesktopDatePicker
                            label="Date"
                            inputFormat="MM/DD/YYYY"
                            value={academydate}
                            onChange={AcademyDateChange}
                            renderInput={(params) => <TextField {...params} />}
                          />
                          <TimePicker
                            label="Time"
                            value={academytime}
                            onChange={AcedemyTimeChange}
                            renderInput={(params) => <TextField {...params} />}
                          />
                          {/* <TextField
                            inputProps={{
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                            }}
                            {...register("academyprice", { required: true })}
                            fullWidth
                            id="academyprice"
                            label="price"
                            name="academyprice"
                            autoComplete="academyprice"
                            value={academyprice}
                            onChange={(e) => setacademyprice(e.target.value)}
                          />
                          {errors.academyprice && (
                            <p style={{ color: "red" }}>price is required</p>
                          )} */}
                        </Stack>
                      </LocalizationProvider>
                    </Grid>

                    <Grid item xs={12} sm={7}>
                      <Stack spacing={3}>
                        <TextField
                          autoComplete="CoachName"
                          name="coachName"
                          {...register("coachName", { required: true })}
                          fullWidth
                          id="coachName"
                          label="Coach Name"
                          autoFocus
                          value={coachName}
                          onChange={(e) => setcoachName(e.target.value)}
                        />
                        {errors.coachName && (
                          <p style={{ color: "red" }}>coach Name is required</p>
                        )}
                      </Stack>
                    </Grid>
                    <Grid item mt={2} ml={0.2}>
                      <TextField
                        inputProps={{
                          inputMode: "numeric",
                          pattern: "[0-9]*",
                          maxLength: 10,
                          minLength: 10,
                        }}
                        autoComplete="coachNumber"
                        name="coachNumber"
                        {...register("coachNumber", { required: true })}
                        fullWidth
                        id="coachNumber"
                        label="Coach Number"
                        autoFocus
                        value={coachNumber}
                        onChange={(e) => setcoachNumber(e.target.value)}
                      />
                      {errors.coachNumber && (
                        <p style={{ color: "red" }}>coach Number is required</p>
                      )}
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                          <select
                            {...register("packageDuration", { required: true })}
                            id="PackageDuration"
                            className="form-select"
                            value={packageDuration}
                            onChange={(e) => {
                              setPackageDuration(e.target.value);
                              setChooseDuration(true);
                            }}
                          >
                            <option value={""} disabled>
                              Duration
                            </option>

                            {durationArray.map((x) => {
                              return <option value={x}>{x}</option>;
                            })}
                          </select>
                          {errors.packageDuration && (
                            <p style={{ color: "red" }}>
                              {" "}
                              Package duration is required
                            </p>
                          )}
                        </Grid>
                          {chooseDuration?(<> */}
                    <Grid item mt={1}>
                      <TextField
                        inputProps={{
                          inputMode: "numeric",
                          pattern: "[0-9]*",
                        }}
                        {...register("academyprice", { required: true })}
                        fullWidth
                        id="academyprice"
                        label="academyprice"
                        name="academyprice"
                        autoComplete="academyprice"
                        value={academyprice}
                        onChange={(e) => setacademyprice(e.target.value)}
                      />
                      {errors.academyprice && (
                        <p style={{ color: "red" }}> academyprice is required</p>
                      )}
                    </Grid>

                    {/* <Grid item xs={12} sm={8}>
                              <TextField
                                disabled
                                id="outlined-disabled"
                                // label={chooseBranch}
                                value={choosePrice}
                                // defaultValue="Hello World"
                              />
</Grid> */}

                    {/* </Stack>
                    </Grid> */}

                    <Grid item xs={12} sm={15}>
                   <h5>Deliveriables</h5>
                      {/* <TextField
                        {...register("Deliverables", {
                          required: true,
                        })}
                        id="outlined-multiline-static"
                        multiline
                        rows={6}
                        label="Deliverables"
                        name="Deliverables"
                        autoComplete="Deliverables"
                        value={Deliverables}
                        onChange={(e) => setDeliverables(e.target.value)}
                      />
                      {errors.Deliverables && (
                        <p style={{ color: "red" }}>Deliverables is required</p>
                      )} */}
                        <ReactQuill 
                      placeholder="Write some thing amazing ..."
                      modules={AddGymBranchService.modules}
                      formats={AddGymBranchService.formats}
                      onChange={handleBodacademyy}
                      value={bodyacademyy}
                      />
                    </Grid>
                    <Grid item xs={12} sm={15}>
                      <h5>Description</h5>
                      {/* <TextField
                        {...register("description", { required: true })}
                        id="outlined-multiline-static"
                        multiline
                        rows={6}
                        label="Description"
                        name="description"
                        autoComplete="escription"
                        value={description}
                        onChange={(e) => setdescription(e.target.value)}
                      />
                      {errors.description && (
                        <p style={{ color: "red" }}> description is required</p>
                      )} */}
                      <ReactQuill 
                      placeholder="Write some thing amazing ..."
                      modules={AddGymBranchService.modules}
                      formats={AddGymBranchService.formats}
                      onChange={handleBodacademy}
                      value={bodyacademy}
                      />
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>

                    <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit(onSubmitPart2) }
                            >
                            Add new Branch
                          </Button>
                            </Grid> */}
                    {/* <Grid items ml={2} mt={1}>
                      <select
                        {...register("Preprice", { required: true })}
                        id="Preprice"
                        className="form-select"
                        value={Preprice}
                        onChange={(e) => {
                          setPreprice(e.target.value);
                          // setChooseBranch(true)
                        }}
                      >
                        <option value={""} disabled>
                          Choose branch Time
                        </option>

                        {branchInfo.length &&
                          branchInfo?.map((x, key) => {
                            return (
                              <option
                                // onClick={console.log("lund")}
                                value={x._id}
                              >
                                {x.opening_branchTiming}--
                                {x.closing_branchTiming}
                              </option>
                            );
                          })}
                      </select>
                      {errors.Preprice && (
                        <p style={{ color: "red" }}> price is required</p>
                      )}
                    </Grid> */}
                    {/* </>):null} */}
                  </>
                ) : category === "wellness" ? (
                  ////////////////////////////////////////////////////////////////wellness code///////////////////////////////////////////////////////////////
                  <>
                    <Grid item xs={12} sm={15}>
                      {/* <TextField
                        {...register("Deliverables", {
                          required: true,
                        })}
                        id="outlined-multiline-static"
                        multiline
                        rows={6}
                        label="Deliverables"
                        name="Deliverables"
                        autoComplete="Deliverables"
                        value={Deliverables}
                        onChange={(e) => setDeliverables(e.target.value)}
                      />
                      {errors.Deliverables && (
                        <p style={{ color: "red" }}>Deliverables is required</p>
                      )} */}
                      <h4>Deliverables</h4>
                        <ReactQuill 
                   placeholder="Write some thing amazing ..."
                   modules={AddGymBranchService.modules}
                   formats={AddGymBranchService.formats}
                   onChange={handleBodyD}
                   value={bodyD}
                   />
                    </Grid>
                    <Grid item xs={12} sm={15}>
                  
                      <h4>description</h4>

                   <ReactQuill 
                   placeholder="Write some thing amazing ..."
                   modules={AddGymBranchService.modules}
                   formats={AddGymBranchService.formats}
                   onChange={handleBody}
                   value={body}
                   />
                    </Grid>
                    {/* <Grid item xs={12} sm={6}>
                      Book Consultation
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                          <DesktopDatePicker
                            label="Book Date"
                            inputFormat="MM/DD/YYYY"
                            value={wellnessdate}
                            onChange={WellnessDateChange}
                            renderInput={(params) => <TextField {...params} />}
                          />

                          <TimePicker
                            label="Book time"
                            value={booktime}
                            onChange={BookTimeChange}
                            renderInput={(params) => <TextField {...params} />}
                          />
                        </Stack>
                        <FormGroup>
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={welnesschecked}
                                onChange={welnessCheckChange}
                                name="welnesschecked"
                              />
                            }
                            label="Paid "
                          /> 
                          <FormControlLabel
                            control={
                              <Checkbox
                                checked={welnessfeechecked}
                                onChange={welnessFeeChange}
                                name="welnessfeechecked"
                              />
                            }
                            label="1st Fee "
                          />
                        </FormGroup>
                      </LocalizationProvider>
                    </Grid> */}
                    <Grid item xs={12} sm={6}>
                      Price
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                          {/* <DesktopDatePicker
                            label="Book Date"
                            inputFormat="MM/DD/YYYY"
                            value={wellnessbookdate}
                            onChange={WellnessBookDateChange}
                            renderInput={(params) => <TextField {...params} />}
                          /> */}

                          {/* <TimePicker
                            label="Book time"
                            value={wellnessbooktime}
                            onChange={WellnessBookTimeChange}
                            renderInput={(params) => <TextField {...params} />}
                          /> */}
                          <TextField
                            inputProps={{
                              inputMode: "numeric",
                              pattern: "[0-9]*",
                            }}
                            {...register("wellnessbookprice", {
                              required: true,
                            })}
                            fullWidth
                            id="wellnessbookprice"
                            label="price"
                            name="wellnessbookprice"
                            autoComplete="wellnessbookprice"
                            value={wellnessbookprice}
                            onChange={(e) =>
                              setWellnessBookprice(e.target.value)
                            }
                          />
                          {errors.wellnessbookprice && (
                            <p style={{ color: "red" }}>price is required</p>
                          )}
                        </Stack>
                      </LocalizationProvider>
                    </Grid>

                    {/* <Grid item xs={12} sm={6}>
                      <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <Stack spacing={3}>
                          <select
                            {...register("packageDuration", { required: true })}
                            id="PackageDuration"
                            className="form-select"
                            value={packageDuration}
                            onChange={(e) => {
                              setPackageDuration(e.target.value),
                                setChooseDuration(true);
                            }}
                          >
                            <option value={""} disabled>
                              Duration
                            </option>

                            {durationArray.map((x) => {
                              return <option value={x}>{x}</option>;
                            })}
                          </select>
                          {errors.packageDuration && (
                            <p style={{ color: "red" }}>
                              {" "}
                              Package duration is required
                            </p>
                          )}
                        </Stack>
                      </LocalizationProvider>
                    </Grid> */}
                    {/* <Grid item xs={12} sm={6}>

                    <Button
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            onClick={handleSubmit(onSubmitPart2) }
                            >
                            Add new Branch
                          </Button>
                            </Grid> */}
                  </>
                ) : null}
                {/* /* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// * */}
                {/* 
                <Grid item xs={12} sm={6}>
                  <TextField
                    {...register("description", { required: true })}
                    id="outlined-multiline-static"
                    multiline
                    rows={6}
                    label="description"
                    name="description"
                    autoComplete="description"
                    value={description}
                    onChange={(e) => setdescription(e.target.value)}
                  />
                  {errors.description && (
                    <p style={{ color: "red" }}> description is required</p>
                  )}
                </Grid> */}

                <Grid item xs={12} sm={6} mt={3}>
                  <Button variant="contained" component="label">
                    Upload Image
                    <input
                      hidden
                      accept="image/*"
                      {...register("image", { required: true })}
                      multiple
                      type="file"
                      //  value={image}
                      onChange={(e) => setimage(e.target.files[0])}
                    />
                  </Button>
                  {errors.image && (
                    <p style={{ color: "red" }}> image is required</p>
                  )}
                </Grid>

                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                  onClick={handleSubmit(onSubmit)}
                >
                  Add Service
                </Button>

                <Grid container justifyContent="flex-end">
                  <Grid item>
                    <Link href="/services" variant="body2">
                      Back to gym branch servics
                    </Link>
                  </Grid>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      </ThemeProvider>
    </form>
  );
};

AddGymBranchService.modules ={
  toolbar:[
    [{header : "1"}, {header: "2"}, {header:[3,4,5,6]}, {font:[]}],
    [{size :[]}],
    ["bold","italic", "underline", "strike", "blockquote"],
    [{list: "ordered"}, {list:"bullet"}],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};

AddGymBranchService.formats =[
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "list",
  "blockquote",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];

export default AddGymBranchService;
