import * as types from "../types"

const datas = {
    pageLoading : false,
    page : "خانه"
}

export const detailReducer = (state = datas , action) => {
    switch(action.type) {
        case types.PAGE_LOADING :
            return {
                ...state,
                pageLoading : action.payload.pageLoading
            }
        default : 
            return state;
    }
}