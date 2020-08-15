import React, { useState } from "react";
// import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: 600,
    height: 600,
  },
  card: {
    minWidth: 250,
    maxWidth: 275,
    minHeight: 250,
    maxHeight: 275,
    // background: "#990000",
    background:
      "linear-gradient(135deg, rgba(255,208,0,1) 0%, rgba(255,0,0,1) 33%, rgba(193,0,0,1) 100%)",
    borderRadius: "20px",
  },
  plan: {
    color: "#ffffff",
    fontWeight: "bold",
    background: "#c10000",
    borderRadius: "20px",
  },
  buttons: {
    "& > *": {
      margin: theme.spacing(1),
      background: "#c10000",
      color: "#FFFFFF",
    },
  },
}));

const BusinessPlan = (props) => {
  const classes = useStyles();

  const [planComp, setPlanComp] = useState(false);
  const [plan, setPlan] = useState("");
  // const sendPlan = (v) => {
  //   props.parentPlan(v);
  // };
  const updatePlan = (value) => {
    setPlanComp(true);
    setPlan(value);
    props.parentPlan(value);
  };

  return (
    <div>
      <h2 style={{ paddingBottom: "25px" }}>
        What plan is your business interested in enrolling in?
      </h2>
      <div className={classes.root}>
        <Grid container spacing={3} justify="center" alignItems="center">
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActions>
                <Button
                  className={classes.plan}
                  value="free"
                  size="small"
                  onClick={(e) => updatePlan(e.currentTarget.value)}
                >
                  Free Plan
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActions>
                <Button
                  className={classes.plan}
                  value="silver"
                  size="small"
                  onClick={(e) => updatePlan(e.currentTarget.value)}
                >
                  Silver Plan
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActions>
                <Button
                  className={classes.plan}
                  value="gold"
                  size="small"
                  onClick={(e) => updatePlan(e.currentTarget.value)}
                  // onMouseUp={console.log(plan)}
                >
                  Gold Plan
                </Button>
              </CardActions>
            </Card>
          </Grid>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <CardActions>
                <Button
                  className={classes.plan}
                  value="platinum"
                  size="small"
                  onClick={(e) => updatePlan(e.currentTarget.value)}
                  // onMouseUp={console.log(plan)}
                >
                  Platinum Plan
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>

        <p style={labelStyle}>{`Plan Selected: ${plan}`}</p>

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
            disabled={!planComp}
            onClick={(e) => {
              e.preventDefault();
              props.lastStep();
            }}
          >
            Finish
          </Button>
        </div>
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

export default BusinessPlan;
