import {
    Grid, Typography
} from "@material-ui/core"
//Icons
import {
    AssignmentInd
} from '@material-ui/icons';
// Styles 
import style from "../../styles/makeShop/makeShop.module.scss"

const DataUser = () => {
    return (
        <div className={style.dataUser}>
            <Grid container direction="row" justify="center" alignItems="flex-start" spacing={3}>
                <Grid item xs={12}>
                    <div className={style.dataUser_header}>
                        <AssignmentInd />
                        <Typography variant="subtitle1" component="h1">اطلاعات حساب</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.dataUser_photo}>
                        <img src="/profile/1.jpg" alt="پروفایل" />
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.texts}>
                        <Typography variant="subtitle1" component="h3">اصغر علی عبدی</Typography>
                        <Typography variant="caption" component="span">asgharweb11@gmail.com</Typography>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <div className={style.descript}>
                        <Typography variant="subtitle1" component="h4">بیوگرافی شما</Typography>
                        <Typography variant="body1" component="p">
                        در این مطلب قصد داریم نگاهی به بازی‌های رایگان روزانه اندروید و آیفون داشته باشیم و آن‌ها را با شما کاربران به اشتراک بگذاریم. 
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

export default DataUser;