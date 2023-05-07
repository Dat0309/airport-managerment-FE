import axios from "axios";
import { AIRPLANETYPE_SINGLE_FAIL, AIRPLANETYPE_SINGLE_REQUEST, AIRPLANETYPE_SINGLE_SUCCESS } from "../Constants/AirPlaneTypeConstants.js";

export const airPlaneTypeDetails = (id) => async (dispatch) => {
    try {
        dispatch({ type: AIRPLANETYPE_SINGLE_REQUEST });
        var data;
        await axios.get(`/api/v1/airPlane/${id}`,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                baseURL: "https://airport-managerment-be.vercel.app",
            }
        ).then((res) => (data = res.data));
        dispatch({ type: AIRPLANETYPE_SINGLE_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({
            type: AIRPLANETYPE_SINGLE_FAIL,
            payload: message,
        });
    }
};