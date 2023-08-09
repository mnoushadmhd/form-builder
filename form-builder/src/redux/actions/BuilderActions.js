import { ActionTypes } from '../constants/ActionTypes.js'
export const addItem = (items) => {
    return {
        type: ActionTypes.addItem,
        payload: items
    }
}
export const dragItem = (item) => {
    return {
        type: ActionTypes.dragItem,
        payload: item
    }
}
export const dropItem = (item) => {
    return {
        type: ActionTypes.dropItem,
        payload: item
    }
}
export const setFormDetails = (item) => {
    return {
        type: ActionTypes.setFormDetails,
        payload: item
    }
}
export const switchPage = (item) => {
    return {
        type: ActionTypes.switchPage,
        payload: item
    }
}