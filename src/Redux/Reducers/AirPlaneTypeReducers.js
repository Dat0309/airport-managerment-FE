import { AIRPLANETYPE_SINGLE_FAIL, AIRPLANETYPE_SINGLE_REQUEST, AIRPLANETYPE_SINGLE_SUCCESS } from "../Constants/AirPlaneTypeConstants.js";

export const airPlaneTypeReducer = (state = {airPlaneType: {}}, action) => {
    switch(action.type){
        case AIRPLANETYPE_SINGLE_REQUEST:
            return {...state, loading: true};
        case AIRPLANETYPE_SINGLE_SUCCESS:
            return {loading: false, airPlaneType: action.payload};
        case AIRPLANETYPE_SINGLE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}