import {
    Box , Grid , TextField , CardMedia , Button
} from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"
// Style 
import style from "../../../../styles/panelUser/addPost.module.scss"


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
        height : "250px"
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
                            <TextField
                                id="outlined-helperText"
                                label="عنوان محصول"
                                defaultValue=""
                                helperText="لطفا عنوان محصول خود را وارد نمایید"
                                variant="outlined"
                                fullWidth
                            />
                        </div>
                        <div className={style.step1_forms_form}>
                            <TextField
                                className={classes.textarea}
                                id="outlined-multiline-static"
                                label="توضیحات محصول"
                                rows={13}
                                multiline
                                defaultValue=""
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
                                <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                                    {
                                        boxs.map((box , index) => {
                                            return (
                                                <Grid item xs={6}>
                                                    <div className={style.step1_uploadFile}>
                                                        <Box
                                                            className={classes.step1_uploadBtn}
                                                            display="flex"
                                                            justifyContent="center"
                                                            alignItems="center"
                                                            position="absolute" 
                                                            top={0} 
                                                            right={0} 
                                                            left={0} 
                                                            bottom={0}
                                                        >
                                                            <input
                                                                accept="image/*"
                                                                className={classes.input}
                                                                id="contained-button-file"
                                                                multiple
                                                                type="file"
                                                            />
                                                            <label htmlFor="contained-button-file">
                                                                <Button variant="contained" color="primary" component="span">
                                                                    آپلود عکس
                                                                </Button>
                                                            </label>
                                                        </Box>
                                                        <div className={style.step1_uploadPic}>
                                                            <CardMedia 
                                                                component="img"
                                                                alt="اپلود عکس محصول"
                                                                title="اپلود عکس محصول"
                                                                image="/background/background.jpeg"
                                                                className={classes.photo}
                                                            />
                                                        </div>
                                                    </div>
                                                </Grid>
                                            
                                            )
                                        })
                                    }
                                    
                                </Grid>
                            </div>
                        </Grid>
                        <Grid item xs={12}>

                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default Step1;