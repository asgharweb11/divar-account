import { useState } from "react"
import { useRouter} from "next/router"
import Link from "next/link"
import {
    Grid , ButtonGroup , Button
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core"
import { create } from 'jss';
import {StylesProvider , jssPreset , createMuiTheme, ThemeProvider} from "@material-ui/core/styles"
import rtl from 'jss-rtl';

// Components 
import FormUser from "./formUser";
import FormShop from "./formShop";
import DataUser from "./dataUser"
// Styles 
import style from "../../styles/makeShop/makeShop.module.scss"


const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

const useStyles = makeStyles({
    makeShop_main : {
        position : "fixed",
        top : 0,
        left : 0,
        bottom : 0,
        right : 0,
        backgroundImage: "url(/background/background.jpeg)",
        backgroundSize: "cover",
        overflowY : "auto"
    },
    makeShop : {
        margin: "50px 0px",
        background: "white",
        boxShadow: "0px 5px 10px 0px rgb(15 15 15 / 30%)",
        borderRadius: "5px",
        padding: "10px",
        color: "rgb(63, 62, 62)",
        position : "relative",
    },
    formBtns : {
        borderTop : "1px solid #0000001a",
        marginTop: 25,
        padding: "15px !important"
    }
})

const theme = createMuiTheme({
    direction: 'rtl',
});

const MakeShop = () => {
    const classes = useStyles()
    const Router = useRouter()

    return (
        <StylesProvider jss={jss}>
            <ThemeProvider theme={theme}>
                <div>
                    <Grid className={classes.makeShop_main} container direction="row" justify="center" alignItems="center">
                        <Grid className={classes.makeShop} item md={8} sm={10} xs={11}>
                            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={1}>
                                {/* <Grid item md={5} sm={6} xs={12}>
                                    <FormUser />
                                </Grid> */}
                                <Grid item md={5} sm={6} xs={12}>
                                    <DataUser />
                                </Grid>
                                <Grid item md={7} sm={6} xs={12}>
                                    <FormShop />
                                </Grid>
                                <Grid className={classes.formBtns} item xs={12}>
                                    <div className={style.btns}>
                                        <ButtonGroup>
                                            <Button onClick={() => (Router.push("/"))} variant="outlined" color="secondary">برگشت</Button>
                                            <Button variant="outlined" color="primary">ساخت فروشگاه</Button>
                                        </ButtonGroup>
                                    </div>
                                </Grid>
                                
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </ThemeProvider>
        </StylesProvider>
    )
}

export default MakeShop;