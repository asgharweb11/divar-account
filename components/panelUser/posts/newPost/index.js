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


const NewPost = () => {
  const classes = useStyles();
  

  const [detail , setDetail] = useState({
    title : '',
    descript : '',
    photos : {},
    category : '',
    price : 0,
    tags : [],
    file : null,
    rules : false,
  })

  const [err , setErr] = useState({
    title : '',
    descript : '',
    category : '',
    price : '',
    tags : '',
    file : '',
    rules : '',
  })

  const handleInput = (key , value) => {
    setErr({...err , [key] : ''})
    if(key === "tags"){
      setDetail({...detail , [key] : [...detail.tags , value]})
    } else{
      setDetail({...detail , [key] : value})
    }
    
  }

  const handlePhoto = (index , photo) => {
    if(photo === "remove"){
      setDetail({...detail , photos : {...detail.photos , [index] :  null}})
    } else {
      setDetail({...detail , photos : {...detail.photos , [index] : photo}})
    }

  }

  const handleFile = (file) => {
    setDetail({...detail , files : [
      ...files,
      file
    ]})
  }

  detail.price.toFixed

  // ----------------------------------------------------------------------------------

  function getStepContent(step) {
   switch (step) {
     case 0:
       return (
         <React.Fragment>
           <Step0 detail={detail} err={err} handleInput={handleInput} handlePhoto={handlePhoto} />
         </React.Fragment>
       );
     case 1:
       return (
         <React.Fragment>
           <Step1 detail={detail} err={err} handleInput={handleInput} handleFile={handleFile}/>
         </React.Fragment>
       );
     default:
       return 'Unknown step';
   }
 }

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
    
    if((detail.title.length < 5 || detail.descript.length < 100) && activeStep === 0){
      setErr({
        ...err,
        title : detail.title.length > 5 ? '' : 'فیلد عنوان شما نباید کمتر از 5 کارکتر باشد !!',
        descript : detail.descript.length > 100 ? '' : 'فیلد توضیحات شما نباید کمتر از 100 کارکتر باشد !!'
      })
      return false;
    } else if((detail.category === '' || detail.price < 5000 || detail.file === null) && activeStep === 1){
      setErr({
        ...err,
        category : detail.category !== '' ? '' : 'فیلد دسته بندی ضروری میباشد !!',
        price : detail.price >= 5000 ? '' : 'فیلد قیمت محصول شما نباید کمتر از 5.000 تومان باشد !!',
        file : detail.file !== null ? '' : 'فیلد آپلود فایل ضروری میباشد ، لطفا تکمیل فرمایید !!'
      })
      return false;
    } 

    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

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
                getStepContent(activeStep , detail , err)
              }
              <div>

                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                  قبلی
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