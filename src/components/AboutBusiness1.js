import React, { useState } from "react";
// import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import IconButton from "@material-ui/core/IconButton";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import Tooltip from "@material-ui/core/Tooltip";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    "& .MuiTextField-root": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  buttons: {
    "& > *": {
      margin: theme.spacing(1),
      background: "#c10000",
      color: "#FFFFFF",
    },
  },
}));

const AboutBusiness1 = (props) => {
  const classes = useStyles();

  // const [zipCode, setZipCode] = useState(0);
  // const [businessName, setBusinessName] = useState("");
  // const [industry, setIndustry] = useState("");
  // const address = {
  //   line1: "",
  //   line2: "",
  //   city: "",
  // };

  // const sendAddress = (e) => {
  //   address[e.target.name] = e.target.value;
  // };

  // Set of error texts for each of the pertinent TextFields
  //   and the set of required field completion flags
  const [zipError, setZipError] = useState("");
  const [zipComp, setZipComp] = useState(false);

  const [nameError, setNameError] = useState("");
  const [nameComp, setNameComp] = useState(false);

  const [industryError, setIndustryError] = useState("");
  const [industryComp, setIndustryComp] = useState(false);

  const [line1Error, setLine1Error] = useState("");
  const [line1Comp, setLine1Comp] = useState(false);

  // const [line2Error, setLine2Error] = useState("");
  const [cityError, setCityError] = useState("");
  const [cityComp, setCityComp] = useState(false);

  const [line2Disp, setLine2Disp] = useState(false);

  const validateZip = (value) => {
    if (value >= 90001 && value <= 96162) {
      setZipError("");
      setZipComp(true);
      props.parentZipCode(value);
    } else {
      setZipError("Zip Code must be between 90001 and 96162");
      setZipComp(false);
    }
  };

  const NAME_LIMIT = 50;
  const [nameInput, setNameInput] = useState("");
  const validateName = (value) => {
    setNameInput(value);

    if (value.length > 0) {
      setNameError("");
      setNameComp(true);
      props.parentBusinessName(value);
    } else {
      setNameError("Business name cannot be left blank");
      setNameComp(false);
    }
  };

  // const sendIndustry = (value) => {
  //   props.parentIndustry(value);
  //   if (value == null) {
  //     setIndustryComp(false);
  //   }
  // };

  const validateIndustry = (value) => {
    if (value == null) {
      setIndustryComp(false);
      setIndustryError("Industry type cannot be left blank");
    } else {
      setIndustryError("");
      setIndustryComp(true);
      props.parentIndustry(value);
    }
  };

  const validateLine1 = (value) => {
    // var line1Regex = /^\d{1,4}(\s[A-z]+){1,}\s[A-z]+(\.)?/g;
    var line1Regex = /^(\d{1,5}[A-z]?\s)([NSEW]\.\s)?([A-z]+\s){1,}((([Rr]oad)|([Ss]treet)|([Aa]venue)|([Bb]oulevard)|([Ll]ane)|([Dd]rive)|([Tt]errace)|([Pp]lace)|([Cc]ourt))|(([Rr]d)|([Ss]t)|([Aa]ve)|([Ww]ay)|([Bb]lvd)|([Ll]n)|([Dd]r)|([Tt]er)|([Pp]l)|([Cc]t)))(\.)?/g;

    // console.log(value);
    if (value.match(line1Regex)) {
      setLine1Error("");
      setLine1Comp(true);
      props.parentLine1(value);
    } else {
      setLine1Error("Address Line 1 not in correct format");
      setLine1Comp(false);
    }
  };

  const showLine2 = () => {
    setLine2Disp(!line2Disp);
  };

  // const sendCity = (value) => {
  //   props.parentCity(value);
  //   if (value == null) {
  //     setCityComp(false);
  //   }
  // };

  const validateCity = (value) => {
    if (value == null) {
      setCityError("City cannot be left blank");
      setCityComp(false);
    } else {
      setCityError("");
      setCityComp(true);
      props.parentCity(value);
    }
  };

  return (
    <div>
      <h2 style={{ paddingBottom: "25px" }}>Tell us about your business..</h2>

      <div className="business-form-1">
        <form className={classes.form} noValidate autoComplete="off">
          <div className="zip">
            <TextField
              id="outlined-zip"
              required
              type="number"
              inputProps={{
                min: "90001",
                max: "96162",
              }}
              error={zipError.length === 0 ? false : true}
              helperText={zipError}
              label="Zip/Postal Code"
              placeholder="90001-96162"
              color="secondary"
              variant="outlined"
              size="small"
              onChange={(e) => validateZip(e.target.value)}
            ></TextField>
          </div>

          <div className="business-name">
            <TextField
              id="outlined-business-name"
              required
              inputProps={{
                maxLength: NAME_LIMIT,
              }}
              error={nameError.length === 0 ? false : true}
              helperText={
                nameError.length === 0
                  ? `${nameInput.length}/${NAME_LIMIT}`
                  : nameError
              }
              label="Business Name"
              placeholder="Tech Inc."
              color="secondary"
              variant="outlined"
              size="small"
              onChange={(e) => validateName(e.target.value)}
            ></TextField>
          </div>

          <div className="industry">
            <Autocomplete
              id="outlined-combo-box-industry"
              clearOnEscape
              options={industryList}
              getOptionLabel={(option) => option.title}
              style={{ width: 300 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="What industry are you in?"
                  placeholder="e.g. Cafe"
                  required
                  error={industryError.length === 0 ? false : true}
                  helperText={industryError}
                  color="secondary"
                  variant="outlined"
                  size="small"
                />
              )}
              onChange={(e, value) => validateIndustry(value)}
            ></Autocomplete>
          </div>

          <div className="address">
            <p style={labelStyle}>Address:</p>
            <div className="line-1">
              <TextField
                name="line1"
                id="outlined-line-1"
                required
                error={line1Error.length === 0 ? false : true}
                helperText={line1Error}
                label="Address Line 1"
                placeholder="123 Main St."
                color="secondary"
                variant="outlined"
                size="small"
                onChange={(e) => validateLine1(e.target.value)}
              ></TextField>
              <Tooltip
                title="Add Line 2"
                aria-label="add line 2"
                arrow
                placement="right"
              >
                <IconButton
                  color="secondary"
                  aria-label="address line 2"
                  component="span"
                  onClick={showLine2}
                >
                  <AddCircleIcon />
                </IconButton>
              </Tooltip>
            </div>
            <div className="line-2">
              <TextField
                name="line2"
                id="outlined-line-2"
                disabled={!line2Disp}
                label="Address Line 2"
                placeholder="Unit #123"
                color="secondary"
                variant="outlined"
                size="small"
                onChange={(e) => props.parentLine2(e.target.value)}
              ></TextField>
            </div>
            <div className="city">
              {/* <TextField
                name="city"
                id="outlined-city"
                required
                label="City"
                placeholder="Los Angeles"
                color="secondary"
                variant="outlined"
                size="small"
                onChange={(e) => {
                  props.parentCity(e.target.value);
                  setCityComp(true);
                }}
              ></TextField> */}
              <Autocomplete
                id="outlined-combo-box-city"
                clearOnEscape
                options={cityList}
                getOptionLabel={(option) => option.city}
                style={{ width: 300 }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="City"
                    placeholder="e.g. Los Angeles"
                    required
                    error={cityError.length === 0 ? false : true}
                    helperText={cityError}
                    color="secondary"
                    variant="outlined"
                    size="small"
                  />
                )}
                onChange={(e, value) => validateCity(value)}
              ></Autocomplete>
            </div>
          </div>

          <p style={labelStyle}>* Required Fields</p>

          <div className={classes.buttons}>
            <Button
              variant="contained"
              disabled={
                !(zipComp & nameComp & industryComp & line1Comp & cityComp)
              }
              onClick={(e) => {
                e.preventDefault();
                props.nextStep();
              }}
            >
              Next
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

const labelStyle = {
  color: "#c10000",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1",
  letterSpacing: "0.00938em",
};

const industries = require("./helper/industries");
const industryList = industries.industries;

const cities = require("./helper/cities");
const cityList = cities.cities;

export default AboutBusiness1;
