import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// import HomePage from "./HomePage";
import AboutBusiness1 from "./AboutBusiness1";
import AboutBusiness2 from "./AboutBusiness2";
import BusinessPlan from "./BusinessPlan";

import { firebase } from "../database";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  stepColor: {
    background: "#f0f0f0",
  },
  backButton: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return [
    "Important Business Information",
    "Business Descriptions",
    "Business Plan",
  ];
}

function Connector() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  // Values retrieved and assigned from ./AboutBusiness1
  const [zipCode, setZipCode] = useState(0);
  const [businessName, setBusinessName] = useState("");
  const [industry, setIndustry] = useState("");
  const [address, setAddress] = useState({
    line1: "",
    line2: "",
    city: "",
  });
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [city, setCity] = useState("");
  // const [address, setAddress] = useState({});
  const updateLine1 = (line1AB1) => {
    setLine1(line1AB1);
    setAddress({
      ...address,
      line1: line1AB1,
    });
  };
  const updateLine2 = (line2AB1) => {
    setLine2(line2AB1);
    setAddress({
      ...address,
      line2: line2AB1,
    });
  };
  const updateCity = (cityAB1) => {
    setCity(cityAB1);
    setAddress({
      ...address,
      city: cityAB1,
    });
  };

  // setAddress({
  //   line1: line1,
  //   line2: line2,
  //   city: city,
  // });
  const updateZipCode = (zipCodeAB1) => {
    setZipCode(zipCodeAB1);
  };
  const updateBusinessName = (businessNameAB1) => {
    setBusinessName(businessNameAB1);
  };
  const updateIndustry = (industryAB1) => {
    setIndustry(industryAB1);
  };
  // const updateAddress = (addressAB1) => {
  //   setAddress({
  //     ...address,
  //     [addressAB1]: state[addressAB1],
  //   });
  // };

  // Values retrieved and assigned from ./AboutBusiness2
  const [knownFor, setKnownFor] = useState("");
  const [description, setDescription] = useState("");
  const [moods, setMoods] = useState([]);
  const [styles, setStyles] = useState([]);
  const updateKnownFor = (knownForAB2) => {
    setKnownFor(knownForAB2);
  };
  const updateDescription = (descriptionAB2) => {
    setDescription(descriptionAB2);
  };
  const updateMoods = (moodsAB2) => {
    setMoods(moodsAB2);
  };
  const updateStyles = (stylesAB2) => {
    setStyles(stylesAB2);
  };

  // Values retrieved and assigned from ./BusinessPlan
  const [plan, setPlan] = useState("");
  const updatePlan = (planBP) => {
    setPlan(planBP);
  };

  const getStepContent = (stepIndex) => {
    switch (stepIndex) {
      case 0:
        return (
          <AboutBusiness1
            nextStep={handleNext}
            parentZipCode={updateZipCode}
            parentBusinessName={updateBusinessName}
            parentIndustry={updateIndustry}
            parentLine1={updateLine1}
            parentLine2={updateLine2}
            parentCity={updateCity}
          />
        );
      case 1:
        return (
          <AboutBusiness2
            prevStep={handleBack}
            nextStep={handleNext}
            parentKnownFor={updateKnownFor}
            parentDescription={updateDescription}
            parentMoods={updateMoods}
            parentStyles={updateStyles}
          />
        );
      case 2:
        return (
          <BusinessPlan
            prevStep={handleBack}
            lastStep={handleFinish}
            parentPlan={updatePlan}
          />
        );
      default:
        return "Unknown stepIndex";
    }
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleFinish = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    var makeBusinessDoc = firebase
      .functions()
      .httpsCallable("createNewBusiness");

    makeBusinessDoc({
      zipCode: zipCode,
      businessName: businessName,
      industry: industry.title,
      address: {
        line1: line1,
        line2: line2,
        city: city.city,
      },
      knownFor: knownFor,
      description: description,
      moods: moods,
      styles: styles,
      plan: plan,
    }).then(() =>
      console.log("Called cloud function to create a business document")
    );
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper
        className={classes.stepColor}
        activeStep={activeStep}
        alternativeLabel
      >
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <div>
        {activeStep === steps.length ? (
          <div>
            <Typography className={classes.instructions}>
              All steps completed
            </Typography>
            <p>Zipcode: {zipCode}</p>
            <p>Business Name: {businessName}</p>
            <p>Industry: {industry.title}</p>
            <p>
              Address: {line1}
              {line2}
              {city.city}
            </p>
            <p>Known For: {knownFor}</p>
            <p>Description: {description}</p>
            <p>
              Moods:{" "}
              {moods.map((el, i) => (
                <span key={i}>{el.mood} | </span>
              ))}
            </p>
            <p>
              Styles:{" "}
              {styles.map((el, i) => (
                <span key={i}>{el.style} | </span>
              ))}
            </p>
            <p>Plan: {plan}</p>
            <Button onClick={handleReset}>Reset</Button>
          </div>
        ) : (
          <div>
            {getStepContent(activeStep)}
            {/* <div>
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                className={classes.backButton}
              >
                Back
              </Button>
              <Button
                disabled={!next}
                variant="contained"
                color="secondary"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </div> */}
          </div>
        )}
      </div>
    </div>
  );
}

export default Connector;
