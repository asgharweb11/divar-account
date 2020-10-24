import * as Types from "../types"

export const DetailAction = (open) => dispatch => {
    dispatch({
        type : Types.PAGE_LOADING,
        payload : {pageLoading : open}
    })
}