import Link from "next/link"
import React , {useState} from "react"
import {
    Grid,
    Button,
    IconButton,
    TextField,
    CircularProgress 
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"
import {CSSTransition} from "react-transition-group"
//Style
import style from "../../../styles/main/header.module.css"
// Icons 
import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const useStyle = makeStyles({
    submit : {
        background: "rgb(241,84,84)",
        background: "linear-gradient(225deg, rgba(241,84,84,1) 0%, rgba(122,128,182,1) 100%)",
        borderRadius: "25px"
    },
    icon : {
        margin: "5px",
        color: "#ffffff",
        background: "#f95959"
    }
})

const Auth = ({fun , display}) => {

    const classes = useStyle();
    const [login , setLogin] = useState('flex')
    const [register , setRegister] = useState('none')


    const handleOpenClose = () => {
        fun();
    }

    const handleAuth = authen => e => {
        if(authen === "login"){
            setLogin('none');
            setRegister("flex"); 
        } else {
            setLogin('flex');
            setRegister("none"); 
        }
    }


    return (
        <CSSTransition in={display} timeout={200} unmountOnExit classNames={{
            enter: style.fade_enter,
            enterActive: style.fade_active_enter,
            exit: style.fade_exit,
            exitActive: style.fade_active_exit,
        }}>
            <div className={style.auth_container}>
                {/* Panel Login */}
                <Grid container justify="center" alignItems="center" style={{"display" : login}}>
                    <Grid item className={style.auth_auth} lg={3} md={4} sm={5} xs={10}>
                        <form>
                            <div className={style.auth_btnClose}>
                                <IconButton onClick={handleOpenClose}>
                                    <HighlightOffIcon />
                                </IconButton>
                            </div>
                            <div className={style.auth_title}>
                                <h3>ورود به حساب</h3>
                            </div>
                            <div className={style.auth_inputs}>
                                <Grid className={style.auth_field} container spacing={1} alignItems="flex-end">
                                    <TextField
                                        
                                        label="ایمیل"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا ایمیل خود را وارد نمایید"
                                        helperText=""
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                </Grid>
                                <Grid className={style.auth_field} container spacing={1} alignItems="flex-end">
                                    <TextField
                                        
                                        label="پسورد"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا پسورد خود را وارد نمایید"
                                        helperText=""
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                </Grid>
                            </div>
                            <div className={style.auth_forgetpass}>
                                <Link href="/"><a>رمزتان را فراموش کرده اید ؟</a></Link>
                            </div>
                            <div className={style.auth_submit}>
                                <Button className={classes.submit} fullWidth variant="contained" color="primary">
                                    ورود
                                </Button>
                            </div>
                            <div className={style.auth_signInBy}>
                                <CircularProgress />
                            </div>
                            <div className={style.auth_SignUp}>
                                <p>حساب کاربری ندارید ؟</p>
                                <a onClick={handleAuth("login")}>ساخت حساب</a>
                            </div>
                    
                        </form>
                            
                    </Grid>
                </Grid>
                {/* Panel Register */}
                <Grid container justify="center" alignItems="center" style={{"display" : register}}>
                    <Grid item className={style.auth_auth} sm={6} xs={10}>
                        <form>
                            <div className={style.auth_btnClose}>
                                <IconButton onClick={handleOpenClose}>
                                    <HighlightOffIcon />
                                </IconButton>
                            </div>
                            <div className={style.auth_title}>
                                <h3>ورود به حساب</h3>
                            </div>
                            <Grid container className={style.auth_inputs} spacing={1} justify="center" alignItems="flex-end">
                                <Grid className={style.auth_field} item md={6} xs={12} >
                                    <TextField
                                        
                                        label="نام"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا نام خود را وارد نمایید"
                                        helperText=""
                                        fullWidth
                                        type="text"
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                </Grid>
                                <Grid className={style.auth_field} item md={6} xs={12} >
                                    <TextField
                                        
                                        label="نام خانوادگی"
                                        type="text"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا نام خانوادگی خود را وارد نمایید"
                                        helperText=""
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                </Grid>
                                <Grid className={style.auth_field} item xs={12} >
                                    <TextField
                                        
                                        label="ایمیل"
                                        type="email"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا ایمیل خود را وارد نمایید"
                                        helperText=""
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                </Grid>
                                <Grid className={style.auth_field} item md={6} xs={12} >
                                    <TextField
                                        
                                        label="پسورد"
                                        type="password"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا پسورد خود را وارد نمایید"
                                        helperText=""
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                </Grid>
                                <Grid className={style.auth_field} item md={6} xs={12} >
                                    <TextField
                                        
                                        label="تکرار پسورد"
                                        type="password"
                                        style={{ margin: 8 }}
                                        placeholder="لطفا مجدد پسورد خود را وارد نمایید"
                                        helperText=""
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        />
                                </Grid>
                            </Grid>
                            <div className={style.auth_submitRegister}>
                                <Button className={classes.submit} fullWidth variant="contained" color="primary">
                                    ساخت حساب
                                </Button>
                            </div>
                            <div className={style.auth_signInBy}>
                                <CircularProgress />
                            </div>
                            <div className={style.auth_SignUp}>
                                <p>من حساب کاربری دارم</p>
                                <a onClick={handleAuth("register")}>ورود به حساب</a>
                            </div>
                    
                        </form>
                            
                    </Grid>
                </Grid>
            
            </div>
        </CSSTransition>
    )
}

export default Auth;