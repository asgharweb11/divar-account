import {
    Grid , IconButton , Typography
} from "@material-ui/core"
// Icons
import {
    Cancel,
    AttachMoney
} from "@material-ui/icons"

// Style
import style from "../../../../styles/main/card.module.css"

const Products = () => {
    return (
        <Grid container direction="row" justify="center">
            <Grid className={style.body_product} item xs={12}>
                <div className={style.body_close}>
                    <IconButton>
                        <Cancel />
                    </IconButton>
                </div>
                <div className={style.body_product_detail}>
                    <div className={style.body_product_photo}>
                        <img src="/post/2.jpg" alt="post" />
                    </div>
                    <div className={style.body_product_other}>
                        <div className={style.body_product_title}>
                            <Typography variant="subtitle2" component="h2">
                                Game Gta v
                            </Typography>
                        </div>
                        <div className={style.body_product_detailBuy}>
                            <div className={style.body_product_number}>
                                <input type="number" value="1" />
                                <Typography variant="caption" component="span">تعداد</Typography>
                            </div>
                            <div className={style.body_product_price}>
                                <Typography variant="caption" component="span">2.800.000 تومان</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid className={style.body_product} item xs={12}>
                <div className={style.body_close}>
                    <IconButton>
                        <Cancel />
                    </IconButton>
                </div>
                <div className={style.body_product_detail}>
                    <div className={style.body_product_photo}>
                        <img src="/post/7.jpg" alt="post" />
                    </div>
                    <div className={style.body_product_other}>
                        <div className={style.body_product_title}>
                            <Typography variant="subtitle2" component="h2">
                                Game Gta v
                            </Typography>
                        </div>
                        <div className={style.body_product_detailBuy}>
                            <div className={style.body_product_number}>
                                <input type="number" value="1" />
                                <Typography variant="caption" component="span">تعداد</Typography>
                            </div>
                            <div className={style.body_product_price}>
                                <Typography variant="caption" component="span">2.800.000 تومان</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid className={style.body_product} item xs={12}>
                <div className={style.body_close}>
                    <IconButton>
                        <Cancel />
                    </IconButton>
                </div>
                <div className={style.body_product_detail}>
                    <div className={style.body_product_photo}>
                        <img src="/post/9.jpg" alt="post" />
                    </div>
                    <div className={style.body_product_other}>
                        <div className={style.body_product_title}>
                            <Typography variant="subtitle2" component="h2">
                                Game Gta v
                            </Typography>
                        </div>
                        <div className={style.body_product_detailBuy}>
                            <div className={style.body_product_number}>
                                <input type="number" value="1" />
                                <Typography variant="caption" component="span">تعداد</Typography>
                            </div>
                            <div className={style.body_product_price}>
                                <Typography variant="caption" component="span">2.800.000 تومان</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>

            <Grid className={style.body_product} item xs={12}>
                <div className={style.body_close}>
                    <IconButton>
                        <Cancel />
                    </IconButton>
                </div>
                <div className={style.body_product_detail}>
                    <div className={style.body_product_photo}>
                        <img src="/post/8.jpg" alt="post" />
                    </div>
                    <div className={style.body_product_other}>
                        <div className={style.body_product_title}>
                            <Typography variant="subtitle2" component="h2">
                                Game Gta v
                            </Typography>
                        </div>
                        <div className={style.body_product_detailBuy}>
                            <div className={style.body_product_number}>
                                <input type="number" value="1" />
                                <Typography variant="caption" component="span">تعداد</Typography>
                            </div>
                            <div className={style.body_product_price}>
                                <Typography variant="caption" component="span">2.800.000 تومان</Typography>
                            </div>
                        </div>
                    </div>
                </div>
            </Grid>


        </Grid>
    )
}

export default Products