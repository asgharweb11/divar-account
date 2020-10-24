import {
    Grid , Typography , Card , CardActionArea, Button
} from "@material-ui/core"
import {
    makeStyles
} from "@material-ui/core/styles"
// Icons
import {
    Payment
} from '@material-ui/icons';
// Style
import style from "../../../../styles/main/card.module.css"


const useStyles = makeStyles({
    card : {
        boxShadow : "-1px 2px 5px rgb(216 216 216)"
    },
    cardArea : {
        padding: "15px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    },
    btnBuy : {
        color : "white",
        background : "#ffaaaa",
        "&:hover" : {
            background : "#fb7c7c"
        }
    }
})

const Pay = () => {
    const classes = useStyles()
    return (
        <Grid className={style.pay_box} container direction="row" justify="center">
            <Grid className={style.pay_pay} item xs={12}>
                <Card className={`${style.pay_card} ${classes.card}`}>
                    <CardActionArea className={classes.cardArea}>
                        <div className={style.pay_photo}>
                            <img src="/profile/4.jpg" alt="zarinpal" />
                        </div>
                        <div className={style.pay_title}>
                            <Typography variant="subtitle1" component="h3">زرین پال</Typography>
                            <Typography variant="caption" component="p">درگاه پرداخت مطمعن</Typography>
                        </div>
                        <div className={style.pay_price}>
                            <Typography variant="subtitle2" component="p">مجموع :</Typography>
                            <Typography variant="subtitle2" component="p">6.100.000 تومان</Typography>
                        </div>
                    </CardActionArea>
                    <div className={style.pay_buy}>
                        <Button className={classes.btnBuy} fullWidth>
                            <Payment />
                            <Typography variant="subtitle1" component="p">
                                پرداخت
                            </Typography>
                        </Button>
                    </div>
                </Card>
            </Grid>
        </Grid>
    )
}

export default Pay