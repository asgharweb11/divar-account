import {
    TextField, Grid, Typography
} from "@material-ui/core"
// Icons 
import {
    AssignmentInd
} from '@material-ui/icons';
// Styles
import style from "../../styles/makeShop/makeShop.module.scss"

const FormUser = () => {
    return (
        <div className={style.fromUser}>
            <Grid container direction="row" justify="flex-space" alignItems="center" spacing={3}>
                <Grid item xs={12}>
                    <div className={style.fromUser_header}>
                        <AssignmentInd />
                        <Typography variant="subtitle1" component="h1">اطلاعات کاربری</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        label="نام"
                        placeholder="لطفا نام خود را وارد نمایید"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink : true
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        label="نام خانوادگی"
                        placeholder="لطفا نام خانوادگی خود را وارد نمایید"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink : true
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        label="ایمیل"
                        placeholder="لطفا ایمیل خود را وارد نمایید"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink : true
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        label="پسورد"
                        placeholder="لطفا پسورد خود را وارد نمایید"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink : true
                        }}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField 
                        label="تکرار پسورد"
                        placeholder="لطفا مجدد پسورد خود را وارد نمایید"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{
                            shrink : true
                        }}
                    />
                </Grid>
            </Grid>
        </div>
    )
}

export default FormUser;