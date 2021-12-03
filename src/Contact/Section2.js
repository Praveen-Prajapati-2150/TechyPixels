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
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Fab from "@material-ui/core/Fab";
import "../styles/MContact.css";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "45ch",
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
  let year = newDate.getFullYear();

  const [selectedDate, setSelectedDate] = React.useState(
    `${month}/${date}/${year}`
  );

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  return (
    <div className="Psection2">
      <form
        target="_blank"
        action="https://formsubmit.co/pixelstechy@gmail.com"
        method="POST"
        className={classes.root}
        noValidate
        autoComplete="off"
      >
        <h1>
          Have a project? <br />
          Let's make something great!
        </h1>
        <TextField
          className="input"
          id="standard-basic"
          name="name"
          label="Your Name"
          required
        />
        <br />

        <TextField
          className="input"
          id="standard-basic"
          label="Organization/Company Name"
          name="Organization/Compnay"
        />
        <br />

        <FormControl
          className="input"
          className={classes.formControl}
          name="service"
          required
          className="serviceInput"
        >
          <InputLabel
            className="input"
            name="service"
            id="demo-simple-select-label"
            
          >
            Which service would you like to opt
          </InputLabel>
          <Select
            className="input"
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            name="service"
            onChange={handleChange}
          >
            <MenuItem value="Social Media Management">Social Media Management</MenuItem>
            <MenuItem value="SEO">SEO</MenuItem>
            <MenuItem value="Website Design & Deveploment">Website Design & Deveploment</MenuItem>
            <MenuItem value="Content Creation">Content Creation</MenuItem>
            <MenuItem value="Branding">Branding</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormControl>
        <br />
        {/* <MuiPickersUtilsProvider className="input" utils={DateFnsUtils}>
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
          </MuiPickersUtilsProvider> */}
        <TextField
          className="input"
          id="standard-basic"
          label="Mobile Number"
          required
          name="Mobile Number"
        />
        <br />
        <TextField
          className="input"
          id="standard-basic"
          name="Email"
          label="Your Email"
          required
        />
        <br />

        <TextField
          className="input"
          id="standard-basic"
          name="Your message"
          label="Your Message"
        />
        <br />
        <Fab type="submit" className="Submit" variant="extended">
          Submit
        </Fab>
      </form>
    </div>
  );
}
