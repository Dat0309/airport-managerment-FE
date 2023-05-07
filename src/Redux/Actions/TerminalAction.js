import axios from "axios";
import { TERMINAL_SINGLE_FAIL, TERMINAL_SINGLE_REQUEST, TERMINAL_SINGLE_SUCCESS } from "../Constants/TerminalConstant.js";

export const terminalDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: TERMINAL_SINGLE_REQUEST });
        var data;
        await axios.get(`/api/v1/terminal/${id}`,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                baseURL: "https://airport-managerment-be.vercel.app",
            }
        ).then((res) => (data = res.data));
        dispatch({ type: TERMINAL_SINGLE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: TERMINAL_SINGLE_FAIL,
            payload: message,
        });
    }
};