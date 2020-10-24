import {
    Grid
} from "@material-ui/core"
// Components
import Products from "./products"
import Pay from "./pay"
// Style
import style from "../../../../styles/main/card.module.css"

const Body = () => {
    return(
        <Grid container direction="row" justify="center" spacing={3}>
            <Grid className={style.body_products} item md={8} xs={12}>
                <Products />
            </Grid>
            <Grid className={style.body_pay} item md={4} xs={12}>
                <Pay />
            </Grid>
        </Grid>
    )
}

export default Body;