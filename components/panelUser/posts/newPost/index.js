import React , {useState , useRef} from "react"
import {
    Box , Grid , Stepper , Step , StepLabel , Button , Typography
} from "@material-ui/core"
// Components 
import Step0 from "./step1"
import Step1 from "./step2"
import Step2 from "./step3"
import BtnSave from "./btnSave"
import { makeStyles } from '@material-ui/core/styles';
// Styles
import {
  boxShadow
} from "../../styles/styles"


const useStyles = makeStyles((theme) => ({
  stepper : {
    boxShadow
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

const options = ['Create a merge commit', 'Squash and merge', 'Rebase and merge'];

function getSteps() {
  return ['اطلاعات محصول', 'جزئیات بیشتر'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <React.Fragment>
          <Step0 />
        </React.Fragment>
      );
    case 1:
      return (
        <React.Fragment>
          <Step1 />
        </React.Fragment>
      );
    default:
      return 'Unknown step';
  }
}

const NewPost = () => {
  const classes = useStyles();
  
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1;
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }


    // if(activeStep === 0){
    //   alert("نمیشه بری صفحه بعد")
    //   return false;
    // }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const handleReset = () => {
    setActiveStep(0);
  };


  return (
    <Grid container direction="row" justify="flex-start" alignItems="flex-start">
      <Grid item xs={12}>
        <div className={classes.root}>
      <Stepper className={classes.stepper} activeStep={activeStep}>
        {
          steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            if (isStepOptional(index)) {
              labelProps.optional = <Typography variant="caption">انتشار</Typography>;
            }
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })
        }
      </Stepper>
      <div>
        {
          activeStep === steps.length ? (
            <div>
              <Step2 />
              <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center">
                <Button onClick={handleReset} className={classes.button}>
                  پاک کردن
                </Button>
                <BtnSave />
              </Box>
            </div>
          ) : (
            <div>
              {
                getStepContent(activeStep)
              }
              <div>

                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  Back
                </Button>
                
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleNext}
                  className={classes.button}
                >
                  بعدی
                </Button>

              </div>
            </div>
          )
        }
      </div>
    </div>
      </Grid>
    </Grid>
  );
}



export default NewPost;