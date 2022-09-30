import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { useState, useEffect } from "react";
import { Alert } from "@mui/material";
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';



import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const theme = createTheme();
const EditGymBranch = ({ route }) => {
    const [opening_branchTiming, setopening_branchTiming] = useState(dayjs())
    const [closing_branchTiming, setclosing_branchTiming] = useState(dayjs())

    // const [value, setValue] = useState(dayjs('2014-08-18T21:11:54'));

    const open = (newValue) => {
        setopening_branchTiming(newValue);
    };
    const close = (newValue) => {
        setclosing_branchTiming(newValue);
    };
    let navigate = useNavigate();
    const [branchName, setbranchName] = useState("");
    const [branchAddress, setbranchAddress] = useState("");
    const [branch, setBranch] = useState("");
    const [branchCity, setbranchCity] = useState("");
    const [branchPhoneNumber, setbranchPhoneNumber] = useState("");
    const [branchCode, setBranchCode] = useState("")
    const [location, setLocation] = useState("")
    const [managerName, setmanagerName] = useState("");
    const [manager_Phone_Number, setmanager_Phone_Number] = useState("");
    const [Id, setIds] = useState("")
    const params = new URLSearchParams(window.location.search)
    for (const param of params) {
        console.log(param)
        // setIds(param)
    }
    const routeLocation = useLocation();
    useEffect(() => {
        console.log(routeLocation.state.gym)
        setIds(routeLocation.state.gym.id)
        setbranchName(routeLocation.state.gym.branchName)
        setbranchAddress(routeLocation.state.gym.branchAddress)
        setbranchCity(routeLocation.state.gym.branchCity)
        setbranchPhoneNumber(routeLocation.state.gym.branchPhoneNumber)
        setBranchCode(routeLocation.state.gym.branchCode)
        setLocation(routeLocation.state.gym.location)
        setmanagerName(routeLocation.state.gym.managerName)
        setmanager_Phone_Number(routeLocation.state.gym.manager_Phone_Number)
    }, [])


    const handleSubmit = async (event) => {
        event.preventDefault();
        // console.log("Login submit click");
        // console.log("User =>", branchName)
        // console.log("branchAddress =>", branchAddress)
        // console.log("branchPhoneNumber =>", branchPhoneNumber)
        // console.log("branchCity =>", branchCity)

        var data = JSON.stringify({
            "id": Id,
            "name": branchName,
            "address": branchAddress,
            "city": branchCity,
            "phoneNumber": branchPhoneNumber,
            "branchCode": branchCode,
            "location": location,
            "managerName": managerName,
            "manager_Phone_Number": manager_Phone_Number,
            "opening_branchTiming":opening_branchTiming,
            "closing_branchTiming": closing_branchTiming,
        });
        var config = {
            method: 'put',
            url: 'https://candidateapp.herokuapp.com/api/v1/updateGymBranch',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };

        axios(config)
            .then(function (response) {
                console.log(JSON.stringify(response.data));
                window.alert("success")
                navigate('/Gym-list');
            })
            .catch(function (error) {
                window.alert("error")
                console.log(error);
            });

    };

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(function(position) {
                  console.log("Latitude is :", position.coords.latitude);
                  console.log("Longitude is :", position.coords.longitude);
                });
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log(position)
          });
    }, [])
    

    // componentDidMount() {
    //     navigator.geolocation.getCurrentPosition(function(position) {
    //       console.log("Latitude is :", position.coords.latitude);
    //       console.log("Longitude is :", position.coords.longitude);
    //     });
    //   }

    return (
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
                        Edit gym branch
                    </Typography>

                    <Box
                        component="form"
                        noValidate
                        sx={{ mt: 3 }}
                    >
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="given-name"
                                    name="branchName"
                                    required 
                                    fullWidth
                                    id="firstName"
                                    label="User Name"
                                    autoFocus
                                    value={branchName}
                                    onChange={(e) => setbranchName(e.target.value)}
                                // value={student.branchName}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <select
                                    id="branch"
                                    className="form-select"
                                    value={branch}
                                    onChange={(e) => setBranch(e.target.value)}
                                >
                                    <option value={""} disabled>
                                        Choose branch
                                    </option>
                                    <option value="safoora">Safoora</option>
                                    <option value="gulshan">Gulshan</option>
                                    <option value="saddar">Saddar</option>
                                </select>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    fullWidth
                                    id="branchAddress"
                                    label="branchAddress Address"
                                    name="branchAddress"
                                    autoComplete="branchAddress"
                                    value={branchAddress}
                                    onChange={(e) => setbranchAddress(e.target.value)}
                                // value={student.branchAddress}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField


                                    autoComplete="branchCity"
                                    name="branchCity"
                                    required
                                    fullWidth
                                    id="branchCity"
                                    label="branchCity"
                                    autoFocus
                                    value={branchCity}
                                    // value={student.branchCity}

                                    onChange={(e) => setbranchCity(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    inputProps={{
                                        inputMode: 'numeric', pattern: '[0-9]*',
                                        maxLength: 10,
                                        minLength: 10,
                                    }}

                                    autoComplete="branchPhoneNumber"
                                    name="branchPhoneNumber"
                                    required
                                    fullWidth
                                    id="branchPhoneNumber"
                                    label="Gym Phone Number"
                                    autoFocus
                                    value={branchPhoneNumber}
                                    // value={student.branchPhoneNumber}
                                    onChange={(e) => setbranchPhoneNumber(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}

                                    autoComplete="branchCode"
                                    name="branchCode"
                                    required
                                    fullWidth
                                    id="branchCode"
                                    label="branchCode"
                                    autoFocus
                                    value={branchCode}
                                    // value={student.branchPhoneNumber}
                                    onChange={(e) => setBranchCode(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>

                                        <TimePicker
                                            label="Opening Timing"
                                            value={opening_branchTiming}
                                            onChange={open}
                                            renderInput={(params) => <TextField {...params} />}
                                        />

                                    </Stack>
                                </LocalizationProvider>
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <Stack spacing={3}>

                                        <TimePicker   
                                            label="Close Timing"
                                            value={closing_branchTiming}
                                            onChange={close}
                                            renderInput={(params) => <TextField {...params} />}
                                        />

                                    </Stack>
                                </LocalizationProvider>
                             
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}

                                    autoComplete="location"
                                    name="location"
                                    required
                                    fullWidth
                                    id="location"
                                    label="location"
                                    autoFocus
                                    value={location}
                                    // value={student.branchPhoneNumber}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField

                                    autoComplete="managerName"
                                    name="managerName"

                                    fullWidth
                                    id="managerName"
                                    label="managerName"
                                    autoFocus
                                    value={managerName}
                                    onChange={(e) => setmanagerName(e.target.value)}
                                />

                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    inputProps={{
                                        inputMode: 'numeric', pattern: '[0-9]*',
                                        maxLength: 11,
                                        minLength: 11,
                                    }}
                                    autoComplete="manager_Phone_Number"
                                    name="manager_Phone_Number"

                                    fullWidth
                                    id="manager_Phone_Number"
                                    label="manager_Phone_Number"
                                    autoFocus
                                    value={manager_Phone_Number}
                                    onChange={(e) => setmanager_Phone_Number(e.target.value)}
                                />

                            </Grid>

                            <Button
                                // type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                                onClick={handleSubmit}

                            >
                                Edit Gym Branch
                            </Button>
                            <Grid container justifyContent="flex-end">
                                <Grid item>
                                    <Link href="/Gym-list" variant="body2">
                                        Back to Gym branch
                                    </Link>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </ThemeProvider>
    );
};

export default EditGymBranch;
