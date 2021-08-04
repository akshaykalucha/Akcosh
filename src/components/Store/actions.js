import { ActionTypes } from './actionTypes';


export const setDark = (val) => {
    return {
        type: ActionTypes.SET_DARK,
        payload: val
    }
}

export const showDrawer = (drawer) => {
    return {
        type: ActionTypes.SHOW_DRAWER,
        payload: drawer
    }
}

export const setMobile = (mobile) => {
    return {
        type: ActionTypes.SET_MOBILE,
        payload: mobile
    }
}

export const setTitle = (title) => {
    return {
        type: ActionTypes.SET_TITLE,
        payload: title
    }
}