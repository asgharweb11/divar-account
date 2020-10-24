import {
    Box , Grid , TextField , Button , FormControl , MenuItem , Select , InputLabel ,
    InputAdornment , OutlinedInput, Typography , IconButton
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// Icons
import {
    CheckBox
} from '@material-ui/icons';
// Style 
import style from "../../../../styles/panelUser/addPost.module.scss"
import {
    colorGreen
} from "../../styles/styles"


const useStyles = makeStyles({
    input : {
        display : "none"
    },
    step1_uploadBtn : {
        background : "#f400bf30",
        borderRadius : 10
    },
    photo : {
        width : "100%",
        height : 190,
        borderRadius : 10
    },
    textarea : {
        height : 250
    },
    formControl : {
        "& li" : {
            justifyContent : "flex-end !important"
        }
    },
    iconUpload : {
        color : colorGreen
    }
})

const Step1 = () => {
    const classes = useStyles()
    const boxs = [1 , 2 , 3 , 4]
    return (
        <div className={style.step1_main}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={6}>
                    <div className={style.step1_forms}>
                        <div className={style.step1_forms_form}>
                            <FormControl fullWidth variant="outlined">
                                <InputLabel id="demo-simple-select-outlined-label">دسته بندی</InputLabel>
                                    <Select
                                        className={classes.formControl}
                                        labelId="demo-simple-select-outlined-label"
                                        id="demo-simple-select-outlined"
                                        value=""
                                        label="انتخاب دسته بندی"
                                    >
                                        <MenuItem value="">
                                            <em>هیچ</em>
                                        </MenuItem>
                                        <MenuItem value={10}>کامپیوتر</MenuItem>
                                        <MenuItem value={20}>پلی استیشن 4</MenuItem>
                                        <MenuItem value={30}>اکیس باکس وان</MenuItem>
                                        <MenuItem value={10}>اندروید</MenuItem>
                                    </Select>
                            </FormControl>
                        </div>
                        <div className={style.step1_forms_form}>
                            <FormControl fullWidth className={classes.margin} variant="outlined">
                                <InputLabel htmlFor="outlined-adornment-amount">قیمت</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-amount"
                                    // value={values.amount}
                                    // onChange={handleChange('amount')}
                                    startAdornment={<InputAdornment position="start">$</InputAdornment>}
                                    labelWidth={60}
                                />
                            </FormControl>
                        </div>
                        <div className={style.step1_forms_form}>
                            <TextField
                                id="outlined-helperText"
                                label="تگ محصول شما"
                                defaultValue=""
                                helperText=""
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                    </div>
                </Grid>
                <Grid item xs={6}>
                    <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                        <Grid item xs={12}>
                            <div className={style.step1_upload}>
                                <Grid container direction="row" justify="center" alignItems="flex-start" >
                                    <Grid item xs={12}>
                                        <Box 
                                            className={style.step1_uploadFile}
                                            flexDirection="column"
                                            display="flex"
                                            justifyContent="center"
                                            alignItems="center"
                                            p={1}
                                        >
                                            <div className={style.step2_textFile}>
                                                <Typography variant="subtitle1" component="p">
                                                    طفا اطلاعات خود را درون یک فایل <span>txt</span> یا <span>zip</span> ذخیره کنید سپس آپلود کنید
                                                    <br />
                                                    لازم به ذکر میباشد اطلاعات شما بصورت رمزگذاری شده و امنیت قوی در 
                                                    <span> 
                                                    دیوار اکانت
                                                    </span> نگه داری میشود
                                                    <br />
                                                    پس ، از اطلاعات خود در سایت مضطرب نباشید
                                                </Typography>
                                            </div>
                                            <div style={{width : "100%"}}>
                                                <Box
                                                    display="flex"
                                                    flexDirection="row"
                                                    justifyContent="space-between"
                                                    alignItems="center"   
                                                    pt={2} 
                                                >
                                                    <div>
                                                        <input
                                                            className={classes.input}
                                                            id="fileAccount"
                                                            multiple
                                                            type="file"
                                                        />
                                                        <label htmlFor="fileAccount">
                                                            <Button variant="contained" color="primary" component="span">
                                                                آپلود فایل
                                                            </Button>
                                                        </label>
                                                    </div>
                                                    <div>
                                                        <IconButton className={classes.iconUpload} disabled>
                                                            <CheckBox />
                                                        </IconButton>
                                                            
                                                    </div>
                                                </Box>
                                            </div>
                                        
                                            {/* <div className={style.step1_uploadPic}>
                                                <CardMedia 
                                                    component="img"
                                                    alt="اپلود عکس محصول"
                                                    title="اپلود عکس محصول"
                                                    image="/background/background.jpeg"
                                                    className={classes.photo}
                                                />
                                            </div> */}
                                        </Box>
                                    </Grid>
                                </Grid>
                            </div>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Step1;