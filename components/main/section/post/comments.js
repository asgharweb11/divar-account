import {useState} from "react"
import {
    Grid, Typography, Button
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core"
import style from "../../../../styles/main/post.module.css"

const useStyles = makeStyles({
    sendCom : {
        color: "#545454",
        background: "white"
    },
    boxTextAnswer_send : {
        color: "#ffffff",
        background: "#ff6b6b",
        boxShadow: "0 0 black",
        marginLeft: "10px",
        "&:hover" : {
            background : "#ff5b5b"
        }
    }
})

const Comments = () => {
    const classes = useStyles()

    return (
        <Grid className={style.comments} container direction="row" justify="center">
            <Grid className={style.comment} item xs={12}>
                <div className={style.commentDetail}>
                    <div className={style.profile}>
                        <img src="/profile/3.jpg" alt="user" />
                        <div className={style.proText}>
                            <Typography variant="subtitle1" component="h6">
                                Asghar Ali
                            </Typography>
                            <Typography variant="caption" component="span">
                                2 ساعت پیش
                            </Typography>
                        </div>
                    </div>
                    <div className={style.text}>
                        سلام چرا جواب نمیدین توی این آموزش اومدین با node سمت بک اند رو زدین یا با react خالی فرانت رو زدین
                    </div>
                    <div className={style.sendComment}>
                        <Button className={classes.sendCom} variant="contained">پاسخ</Button>
                    </div>
                    <div className={style.boxTextAnswer}>
                        <div className={style.boxTextAnswer_textarea}>
                            <textarea placeholder="لطفا پاسخ خود را وارد نمایید"></textarea>
                        </div>
                        <div className={style.boxTextAnswer_send}>
                            <Button className={classes.boxTextAnswer_send} variant="contained">
                                لغو
                            </Button>
                            <Button className={classes.boxTextAnswer_send} variant="contained">
                                ارسال پاسخ
                            </Button>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid className={style.comment} item xs={12}>
                <div className={style.commentDetail}>
                    <div className={style.profile}>
                        <img src="/profile/1.jpg" alt="user" />
                        <div className={style.proText}>
                            <Typography variant="subtitle1" component="h6">
                                Asghar Ali
                            </Typography>
                            <Typography variant="caption" component="span">
                                2 ساعت پیش
                            </Typography>
                        </div>
                    </div>
                    <div className={style.text}>
                        سلام چرا جواب نمیدین توی این آموزش اومدین با node سمت بک اند رو زدین یا با react خالی فرانت رو زدین
                    </div>
                    <div className={style.sendComment}>
                        <Button className={classes.sendCom} variant="contained">پاسخ</Button>
                    </div>
                    <div className={style.boxTextAnswer}>
                        <div className={style.boxTextAnswer_textarea}>
                            <textarea placeholder="لطفا پاسخ خود را وارد نمایید"></textarea>
                        </div>
                        <div className={style.boxTextAnswer_send}>
                            <Button className={classes.boxTextAnswer_send} variant="contained">
                                لغو
                            </Button>
                            <Button className={classes.boxTextAnswer_send} variant="contained">
                                ارسال پاسخ
                            </Button>
                        </div>
                    </div>
                
                </div>
                
                <Grid className={style.answer} container direction="row" justify="flex-start">
                    <Grid className={style.answer_comment} item xs={12}>
                        <div className={style.commentDetail}>
                            <div className={style.profile}>
                                <img src="/profile/4.jpg" alt="user" />
                                <div className={style.proText}>
                                    <Typography variant="subtitle1" component="h6">
                                        Asghar Ali
                                    </Typography>
                                    <Typography variant="caption" component="span">
                                        2 ساعت پیش
                                    </Typography>
                                </div>
                            </div>
                            <div className={style.text}>
                                سلام چرا جواب نمیدین توی این آموزش اومدین با node سمت بک اند رو زدین یا با react خالی فرانت رو زدین
                            </div>
                            <div className={style.sendComment}>
                                <Button className={classes.sendCom} variant="contained">پاسخ</Button>
                            </div>
                            <div className={style.boxTextAnswer}>
                                <div className={style.boxTextAnswer_textarea}>
                                    <textarea placeholder="لطفا پاسخ خود را وارد نمایید"></textarea>
                                </div>
                                <div className={style.boxTextAnswer_send}>
                                    <Button className={classes.boxTextAnswer_send} variant="contained">
                                        لغو
                                    </Button>
                                    <Button className={classes.boxTextAnswer_send} variant="contained">
                                        ارسال پاسخ
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                    <Grid className={style.answer_comment} item xs={12}>
                        <div className={style.commentDetail}>
                            <div className={style.profile}>
                                <img src="/profile/1.jpg" alt="user" />
                                <div className={style.proText}>
                                    <Typography variant="subtitle1" component="h6">
                                        Asghar Ali
                                    </Typography>
                                    <Typography variant="caption" component="span">
                                        2 ساعت پیش
                                    </Typography>
                                </div>
                            </div>
                            <div className={style.text}>
                                سلام چرا جواب نمیدین توی این آموزش اومدین با node سمت بک اند رو زدین یا با react خالی فرانت رو زدین
                            </div>
                            <div className={style.sendComment}>
                                <Button className={classes.sendCom} variant="contained">پاسخ</Button>
                            </div>
                            <div className={style.boxTextAnswer}>
                                <div className={style.boxTextAnswer_textarea}>
                                    <textarea placeholder="لطفا پاسخ خود را وارد نمایید"></textarea>
                                </div>
                                <div className={style.boxTextAnswer_send}>
                                    <Button className={classes.boxTextAnswer_send} variant="contained">
                                        لغو
                                    </Button>
                                    <Button className={classes.boxTextAnswer_send} variant="contained">
                                        ارسال پاسخ
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Comments;