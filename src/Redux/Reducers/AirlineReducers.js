import { AIRLINE_SINGLE_FAIL, AIRLINE_SINGLE_REQUEST, AIRLINE_SINGLE_SUCCESS } from "../Constants/AirlineConstants.js";

export const airlineReducer = (state = {airline: {}}, action) => {
    switch(action.type){
        case AIRLINE_SINGLE_REQUEST:
            return {...state, loading: true};
        case AIRLINE_SINGLE_SUCCESS:
            return {loading: false, airline: action.payload};
        case AIRLINE_SINGLE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}