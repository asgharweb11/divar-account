import Link from "next/link"
import {
    Grid,
    Card,
    CardActionArea,
    CardMedia,
    Typography,
    CardContent,
    CardActions,
    Button,
} from "@material-ui/core"
import {makeStyles} from "@material-ui/core/styles"

import style from "../../../../styles/main/section.module.css"

const useStyles = makeStyles({
    posts_main : {
        marginTop: "20px"
    },
    root: {
        boxShadow: "-1px 2px 1px #e6e6e6"
    },
    media: {
        height: 140,
        position : "relative",
    },
    title : {
        marginBottom: 15,
        fontSize: "15px",
        color: "#504f4f"
    },
    moreContainer : {
        marginTop : "100px",
        textAlign: "center"
    },
    btnMore : {
        color: "#7b7b7b",
        background: "white",
        boxShadow: "-1px 2px 5px #eaeaea",
        "&:hover" : {
            color : "#404040"
        }
    }
});

const Posts = () => {

    const classes = useStyles();

    const posts = [
        {
            id : 1,
            title : "بازی جی تی آی وی",
            photo : "/post/7.jpg",
            text : "یک بازی اکشن خفن و حرفه در سبک جهان ، گویا راک استار قصد دارد بخش انلاین این بازی را به یک شهر زامبی تبدیل نمایید ، تا در بروز رسانی بعدی منتظر باشید",
            price : "1.800.000 تومان"
        },
        {
            id : 2,
            title : "بازی Rainbow six",
            photo : "/post/8.jpg",
            text : "یک بازی اکشن خفن و حرفه در سبک جهان ، گویا راک استار قصد دارد بخش انلاین این بازی را به یک شهر زامبی تبدیل نمایید ، تا در بروز رسانی بعدی منتظر باشید",
            price : "800.000 تومان"
        },
        {
            id : 3,
            title : "بازی فورت نایت",
            photo : "/post/9.jpg",
            text : "یک بازی اکشن خفن و حرفه در سبک جهان ، گویا راک استار قصد دارد بخش انلاین این بازی را به یک شهر زامبی تبدیل نمایید ، تا در بروز رسانی بعدی منتظر باشید",
            price : "200.000 تومان"
        },
        {
            id : 4,
            title : "بازی خوناشام",
            photo : "/post/10.jpg",
            text : "یک بازی اکشن خفن و حرفه در سبک جهان ، گویا راک استار قصد دارد بخش انلاین این بازی را به یک شهر زامبی تبدیل نمایید ، تا در بروز رسانی بعدی منتظر باشید",
            price : "4.000.000 تومان"
        },
        {
            id : 5,
            title : "بازی اویل 8",
            photo : "/post/2.jpg",
            text : "یک بازی اکشن خفن و حرفه در سبک جهان ، گویا راک استار قصد دارد بخش انلاین این بازی را به یک شهر زامبی تبدیل نمایید ، تا در بروز رسانی بعدی منتظر باشید",
            price : "600.000 تومان"
        },
        {
            id : 6,
            title : "بازی need for speed",
            photo : "/post/4.jpg",
            text : "یک بازی اکشن خفن و حرفه در سبک جهان ، گویا راک استار قصد دارد بخش انلاین این بازی را به یک شهر زامبی تبدیل نمایید ، تا در بروز رسانی بعدی منتظر باشید",
            price : "1.100.000 تومان"
        }
    ]



    return (
        <Grid className={classes.posts_main} container direction="row" justify="flex-start" spacing={3}>
                {
                    posts.map((item , index) => {
                        return (
                            <Grid item md={4} sm={6} xs={12} key={index}>
                                    <Card className={classes.root}>
                                        <CardActionArea>
                                            <CardMedia
                                            className={`${classes.media} ${style.posts_media}`}
                                            image={item.photo}
                                            title="Contemplative Reptile"
                                            />
                                            <CardContent>
                                                <Typography className={classes.title} gutterBottom variant="h5" component="h2">
                                                    {item.title}
                                                </Typography>
                                                <Typography variant="body2" color="textSecondary" component="p">
                                                {item.text}                           
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                        <CardActions>
                                            <Link href={`/post/${item.id}`}>
                                                <Button size="small" color="primary">
                                                بیشتر
                                                </Button>
                                            </Link>
                                        
                                            <Button size="small" color="primary">
                                                {item.price}
                                            </Button>
                                        </CardActions>
                                    </Card>
                                                                
                            </Grid>

                        )
                    })
                }

        </Grid>
    )
}

export default Posts