import React, { useState } from "react";
// import React from "react";
import Button from "@material-ui/core/Button";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";
import { makeStyles } from "@material-ui/core/styles";

const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;

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

const AboutBusiness2 = (props) => {
  const classes = useStyles();

  // const [knownFor, setKnownFor] = useState("");
  // const [description, setDescription] = useState("");
  // const [moods, setMoods] = useState([]);
  // const [styles, setStyles] = useState([]);

  // Set of error texts for each of the pertinent TextFields
  //   and the set of required field completion flags
  const [knownForError, setKnownForError] = useState("");
  const [knownForComp, setKnownForComp] = useState(false);

  const [descriptionError, setDescriptionError] = useState("");
  const [descriptionComp, setDescriptionComp] = useState(false);

  const [moodsError, setMoodsError] = useState("");
  const [moodsComp, setMoodsComp] = useState(false);

  const [stylesError, setStylesError] = useState("");
  const [stylesComp, setStylesComp] = useState(false);

  const KNOWN_FOR_LIMIT = 50;
  const [knownForInput, setKnownForInput] = useState("");
  const validateKnownFor = (value) => {
    setKnownForInput(value);

    if (value.length > 0) {
      setKnownForError("");
      setKnownForComp(true);
      props.parentKnownFor(value);
    } else {
      setKnownForError("Come on, tell us what you're known for");
      setKnownForComp(false);
    }
  };

  const DESCRIPTION_LIMIT = 1000;
  const [descriptionInput, setDescriptionInput] = useState("");
  const validateDescription = (value) => {
    setDescriptionInput(value);

    if (value.length > 0) {
      setDescriptionError("");
      setDescriptionComp(true);
      props.parentDescription(value);
    } else {
      setDescriptionError("Come on, describe your business");
      setDescriptionComp(false);
    }
  };

  // const sendMoods = (value) => {
  //   props.parentMoods(Object.values(value));
  // };
  const validateMoods = (value) => {
    if (value.length === 0) {
      setMoodsError("Moods cannot be left blank");
      setMoodsComp(false);
    } else {
      setMoodsError("");
      setMoodsComp(true);
      props.parentMoods(Object.values(value));
    }
  };

  // const sendStyles = (value) => {
  //   props.parentStyles(Object.values(value));
  // };
  const validateStyles = (value) => {
    if (value.length === 0) {
      setStylesError("Styles cannot be left blank");
      setStylesComp(false);
    } else {
      setStylesError("");
      setStylesComp(true);
      props.parentStyles(Object.values(value));
    }
  };

  return (
    <div>
      <h2 style={{ paddingBottom: "25px" }}>Tell us about your business..</h2>

      <div className="business-form-2">
        <form className={classes.form} noValidate autoComplete="off">
          <div className="known">
            <TextField
              id="standard-known"
              required
              inputProps={{
                maxLength: KNOWN_FOR_LIMIT,
              }}
              error={knownForError.length === 0 ? false : true}
              helperText={
                knownForError.length === 0
                  ? `${knownForInput.length}/${KNOWN_FOR_LIMIT}`
                  : knownForError
              }
              size="small"
              label="What is your business KNOWN for?"
              placeholder="e.g. your signature item"
              color="secondary"
              style={{ width: 324, paddingBottom: 50 }}
              // style={{ paddingBottom: 50 }}
              onChange={(e) => validateKnownFor(e.target.value)}
            ></TextField>
          </div>

          <div className="business-description">
            <TextField
              id="standard-business-description"
              required
              inputProps={{
                maxLength: DESCRIPTION_LIMIT,
              }}
              error={descriptionError.length === 0 ? false : true}
              helperText={
                descriptionError.length === 0
                  ? `${descriptionInput.length}/${DESCRIPTION_LIMIT}`
                  : descriptionError
              }
              size="small"
              label="Please provide a business description:"
              placeholder="We serve the best boba in the city."
              color="secondary"
              multiline
              rows={4}
              rowsMax={4}
              variant="outlined"
              style={{ width: "324px", paddingBottom: "50px" }}
              onChange={(e) => validateDescription(e.target.value)}
            ></TextField>
          </div>

          <div className="keywords">
            <p style={labelStyle}>Keywords: </p>
            <div className="kw-categories">
              <Autocomplete
                multiple
                limitTags={2}
                id="checkboxes-moods"
                size="small"
                options={moodList}
                disableCloseOnSelect
                getOptionLabel={(option) => option.mood}
                style={{ width: 300 }}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.mood}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Moods"
                    placeholder="e.g. chill"
                    required
                    error={moodsError.length === 0 ? false : true}
                    helperText={moodsError}
                    color="secondary"
                    variant="outlined"
                    size="small"
                  />
                )}
                onChange={(e, value) => validateMoods(value)}
              ></Autocomplete>
              <Autocomplete
                multiple
                limitTags={2}
                id="checkboxes-styles"
                size="small"
                options={styleList}
                disableCloseOnSelect
                getOptionLabel={(option) => option.style}
                style={{ width: 300 }}
                renderOption={(option, { selected }) => (
                  <React.Fragment>
                    <Checkbox
                      icon={icon}
                      checkedIcon={checkedIcon}
                      style={{ marginRight: 8 }}
                      checked={selected}
                    />
                    {option.style}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Styles"
                    placeholder="e.g. modern"
                    required
                    error={stylesError.length === 0 ? false : true}
                    helperText={stylesError}
                    color="secondary"
                    variant="outlined"
                    size="small"
                  />
                )}
                onChange={(e, value) => validateStyles(value)}
              ></Autocomplete>
            </div>
          </div>

          <div className={classes.buttons}>
            <Button
              variant="contained"
              onClick={(e) => {
                e.preventDefault();
                props.prevStep();
              }}
            >
              Back
            </Button>
            <Button
              variant="contained"
              disabled={
                !(knownForComp & descriptionComp & moodsComp & stylesComp)
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

const moods = require("./helper/moods");
const moodList = moods.moods;

const styles = require("./helper/styles");
const styleList = styles.styles;

const labelStyle = {
  color: "#c10000",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  fontSize: "1rem",
  fontWeight: "400",
  lineHeight: "1",
  letterSpacing: "0.00938em",
};

export default AboutBusiness2;
