import {
    Grid,
    CardMedia,
    Typography,
    IconButton,
    Button
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core"
import Slider from "react-slick";
// Components
import Bread from "../breadcrumbs"
// Icons
import {
    Devices,
    SportsEsports,
    Straighten,
    ChevronLeft,
    ChevronRight,
    LocalMall,
} from '@material-ui/icons';
// Components 
// Styles
import style from "../../../../styles/main/post.module.css"


const useStyle = makeStyles({
    carouselS : {
        height : 100
    },
    carouselThumb : {
        marginBottom : 60
    },
    btnBuy : {
        color: "#ffffff",
        background: "#ff6b6b",
        padding: "15px",
        transitions : "0.5s",
        "&:hover" : {
            background : "red"
        }
    },
    MeidaCarousel : {
        height : "500px",
        "@media (max-width : 850px)" : {
            height : "420px"
        },
        "@media (max-width : 699px)" : {
            height : "325px"
        },
        "@media (max-width : 500px)" : {
            height : "230px"
        },
        "@media (max-width : 350px)" : {
            height : "125px"
        }
    }

})

const CarouselL = () => {

    const classes = useStyle();

    const CarouselMain = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
    };


    return (
        <Grid className={style.container} container direction="row" justify="center">
            <Grid className={style.bread} item xs={12}>
                <Bread />
            </Grid>
            <Grid className={style.carousel} item md={6} xs={12}>
                <Grid container direction="row" justify="center" className={style.carousel_container}>
                    <Grid className={style.carousel_main} item xs={12}>
                        <Slider {...CarouselMain}>
                            <div className={style.carouselBig}>
                                <CardMedia
                                    className={classes.MeidaCarousel}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    image="/post/1.jpg"
                                    title="Contemplative Reptile" 
                                />
                            </div>
                            <div className={style.carouselBig}>
                                <CardMedia
                                    className={classes.MeidaCarousel}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    image="/post/2.jpg"
                                    title="Contemplative Reptile" 
                                />
                            </div>
                            <div className={style.carouselBig}>
                                <CardMedia
                                    className={classes.MeidaCarousel}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    image="/post/3.jpg"
                                    title="Contemplative Reptile" 
                                />
                            </div>
                            <div className={style.carouselBig}>
                                <CardMedia
                                    className={classes.MeidaCarousel}
                                    component="img"
                                    alt="Contemplative Reptile"
                                    image="/post/4.jpg"
                                    title="Contemplative Reptile" 
                                />
                            </div>

                        </Slider>
                    </Grid>
                    <Grid className={style.boxBuy} item xs={12}>
                        <Button className={classes.btnBuy} fullWidth>
                            <LocalMall />
                            <div className={style.textBtn}>
                                اضافه به سبد خرید
                            </div>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid className={style.content} item md={6} xs={12}>
                <Grid container direction="row" justify="center">
                    <Grid className={style.header} item xs={12}>
                        <div className={style.title}>
                            <Typography variant="h5" component="h1">Game Fortnit 2020</Typography>
                        </div>
                        <div className={style.price}>
                            <Typography variant="h6">
                                2.800.000 تومان
                            </Typography>
                        </div>
                    </Grid>
                    <Grid className={style.special} item xs={12}>
                    <div className={style.boxSpecial}>
                            <div className={style.boxIcon}>
                                <IconButton>
                                    <Devices />
                                </IconButton>
                            </div>
                            <div className={style.boxText}>
                                <Typography variant="subtitle1" component="p">
                                    کامپیوتر
                                </Typography>
                            </div>
                        </div>
                        <div className={style.boxSpecial}>
                            <div className={style.boxIcon}>
                                <IconButton>
                                    <SportsEsports />
                                </IconButton>
                            </div>
                            <div className={style.boxText}>
                                <Typography variant="subtitle1" component="p">
                                    اکشن / تخیلی
                                </Typography>
                            </div>
                        </div>
                        <div className={style.boxSpecial}>
                            <div className={style.boxIcon}>
                                <IconButton>
                                    <Straighten />
                                </IconButton>
                            </div>
                            <div className={style.boxText}>
                                <Typography variant="subtitle1" component="p">
                                    ظرفیت سه
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid className={style.descript} item xs={12}>
                        <Typography variant="subtitle1" component="p">
                            فروش کنسول‌های بازی و بازی‌های ویدئویی آغاز کرده و به مرور زمان وارد بازار گوشی‌های هوشمند و وسایل الکترونیکی و دیجیتالی شده است ، تیم فعلی مجموعه گنوپلی حاصل 15 سال تجربه فعالیت در زمینه محصولات دیجیتالی است.
                        </Typography>
                    </Grid>
                    <Grid className={style.numberProduct} item xs={12}>
                        <div className={style.IconNum}>
                            <IconButton>
                                <ChevronRight />
                            </IconButton>
                        </div>
                        <div>
                            <div className={style.boxNum}>25</div>
                        </div>
                        <div className={style.IconNum}>
                            <IconButton>
                                <ChevronLeft />
                            </IconButton>
                        </div>
                    </Grid>
                </Grid>
            </Grid>
            <style jsx global>{`
                .carouselSmall{

                }
                .carouselSmall li {
                    margin: 0 25px;
                }
            `}</style>
        </Grid>
    )
}

export default CarouselL