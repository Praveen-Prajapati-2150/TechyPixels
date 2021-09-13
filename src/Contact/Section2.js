import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
// import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import "date-fns";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
//   KeyboardTimePicker,
  KeyboardDatePicker,
} from "@material-ui/pickers";
import Fab from "@material-ui/core/Fab";
import "../styles/MContact.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function BasicTextFields() {
  const classes = useStyles();

  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear() ;

  console.log(date/month/year)
  console.log({date},{month},{year})
  console.log(date,month,year)
  console.log(date)

  const [selectedDate, setSelectedDate] = React.useState(
    `${month}/${date}/${year}`
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  return (
    
      <form className="Psection2" className={classes.root} noValidate autoComplete="off">
        <h1>
          Have a project? <br />
          Let's make something great!
        </h1>
        <TextField className="input" id="standard-basic" label="Your Name" /> <br />
        <TextField
          className="input"
          id="standard-basic"
          label="Your Designation"
        /> <br />
        <TextField
          className="input"
          id="standard-basic"
          label="Organization/Company Name"
        /> <br />
        <TextField
          className="input"
          id="standard-basic"
          label="Industry Type"
        /> <br />
        <FormControl className="input" className={classes.formControl}>
          <InputLabel className="input" id="demo-simple-select-label">
            Which service would you like to opt
          </InputLabel>
          <Select
            className="input"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>Social Media Management</MenuItem>
            <MenuItem value={20}>SEO</MenuItem>
            <MenuItem value={30}>Tech & Innovation</MenuItem>
            <MenuItem value={30}>PR Services</MenuItem>
            <MenuItem value={30}>Logo Creation</MenuItem>
            <MenuItem value={30}>Website</MenuItem>
            <MenuItem value={30}>Others</MenuItem>
          </Select>
        </FormControl>

        {/* --------------------- */}

        <MuiPickersUtilsProvider className="input" utils={DateFnsUtils}>
          <Grid className="input" container justifyContent="space-around">
            <KeyboardDatePicker
              className="input"
              margin="normal"
              id="date-picker-dialog"
              label="Date picker dialog"
              format="MM/dd/yyyy"
              value={selectedDate}
              onChange={handleDateChange}
              KeyboardButtonProps={{
                "aria-label": "change date",
              }}
            />
          </Grid>
        </MuiPickersUtilsProvider>
        <TextField className="input" id="standard-basic" label="Your Email" /> <br />
        <TextField className="input" id="standard-basic" label="Location" /> <br />

        <TextField
          className="input"
          id="standard-basic"
          label="Mobile Number"
        /> <br />

        <TextField className="input" id="standard-basic" label="Your Message" /> <br />
        <Fab variant="extended">
          {/* <NavigationIcon className={classes.extendedIcon} /> */}
          Submit
        </Fab>
      </form>
    
  );
}
