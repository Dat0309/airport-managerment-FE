import { FIGHT_LIST_FAIL, FIGHT_LIST_REQUEST, FIGHT_LIST_SUCCESS } from "../Constants/FightConstants.js";

export const flightListReducer = (state = { flight: []}, action)=>{
    switch(action.type){
        case FIGHT_LIST_REQUEST:
            return {loading: true, flight: []};
        case FIGHT_LIST_SUCCESS:
            return {loading: false, flight: action.payload};
        case FIGHT_LIST_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}