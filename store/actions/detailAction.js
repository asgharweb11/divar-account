import * as Types from "../types"

// Refresh Page And Loading
export const DetailAction = (open) => dispatch => {
    dispatch({
        type : Types.PAGE_LOADING,
        payload : {pageLoading : open}
    })
}

export const Message = (data) => dispatch => {

    dispatch({
        type : Types.MESSAGE,
        payload : data
    })

}