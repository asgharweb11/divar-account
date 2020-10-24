import { 
    Grid, Typography, Button , CardMedia , TextField
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// Icons
import {Send} from '@material-ui/icons';
// Styles
import style from "../../../../styles/main/post.module.css"


const useStyles = makeStyles({
    form : {
        position: "relative",
        boxShadow: "-1px 2px 5px #ececec"
    },
    form_in : {
        background: "white",
    },
    form_textfield : {
        width : "100%"
    },
    btnSend : {
        background: "#ff7ed0",
        "&:hover" : {
            background : "#ff8ec0"
        }
    }
})

const Form = () => {
    const classes = useStyles()

    return (
        <Grid className={classes.form} container direction="row" justify="center">
            <Grid className={classes.form_in} item xs={12}>
                <div className={style.form_header}>
                    <Typography variant="subtitle1" component="h6">
                        کامنت گذاری
                    </Typography>
                </div>
                <div className={style.form_input}>
                    <textarea rows="10" cols="5" placeholder="لطفا متن خود را وارد نمایید"></textarea>
                </div>
                <div className={style.form_send}>
                    <Button className={classes.btnSend} variant="contained" color="primary">
                        <Send />
                        ارسال
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default Form