import { ActionTypes } from "./actionTypes";


const initialState = {
    sideDrawerOpen: false,
    isMobile: false,
    isDark: false,
    title: ''
}

export const WebsiteInterface = (state=initialState, {type, payload} ) => {
    switch(type) {
        case ActionTypes.SHOW_DRAWER:
            return {
                ...state,
                sideDrawerOpen: payload,
            }
        
        case ActionTypes.SET_MOBILE:
            return{
                ...state,
                isMobile: payload
            }

        case ActionTypes.SET_DARK:
            return{
                ...state,
                isDark: payload
            }
        
        case ActionTypes.SET_TITLE:
            return{
                ...state,
                title: payload
            }

        default:
            return state
    };

};