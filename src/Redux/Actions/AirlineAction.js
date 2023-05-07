import axios from "axios";
import { AIRLINE_SINGLE_FAIL, AIRLINE_SINGLE_REQUEST, AIRLINE_SINGLE_SUCCESS } from "../Constants/AirlineConstants.js";

export const airlineDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: AIRLINE_SINGLE_REQUEST });
        var data;
        await axios.get(`/api/v1/airline/${id}`,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                baseURL: "https://airport-managerment-be.vercel.app",
            }
        ).then((res) => (data = res.data));
        dispatch({ type: AIRLINE_SINGLE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: AIRLINE_SINGLE_FAIL,
            payload: message,
        });
    }
};