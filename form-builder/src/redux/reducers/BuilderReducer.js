import { ActionTypes } from '../constants/ActionTypes.js'
const intialState = {
    allItems: [],
    dragItem: "",
    dropItem: "",
    formDetails: [],
    switchs: true
}
export const builderReducer = (state = { intialState }, { type, payload }) => {
    switch (type) {
        case ActionTypes.addItem:
            return {
                ...state,
                allItems: payload
            }
        case ActionTypes.dragItem:
            return {
                ...state,
                dragItem: payload
            }
        case ActionTypes.dropItem:
            return {
                ...state,
                dropItem: payload
            }
        case ActionTypes.setFormDetails:
            return {
                ...state,
                formDetails: payload
            }
        case ActionTypes.switchPage:
            return {
                ...state,
                switchs: payload
            }
        default:
            return state
    }

}