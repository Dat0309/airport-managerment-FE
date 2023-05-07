import { TERMINAL_SINGLE_FAIL, TERMINAL_SINGLE_REQUEST, TERMINAL_SINGLE_SUCCESS } from "../Constants/TerminalConstant.js";

export const terminalReducer = (state = {terminal: {}}, action) => {
    switch(action.type){
        case TERMINAL_SINGLE_REQUEST:
            return {...state, loading: true};
        case TERMINAL_SINGLE_SUCCESS:
            return {loading: false, terminal: action.payload};
        case TERMINAL_SINGLE_FAIL:
            return {loading: false, error: action.payload};
        default:
            return state;
    }
}