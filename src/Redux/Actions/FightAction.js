import axios from "axios";
import { FIGHT_LIST_FAIL, FIGHT_LIST_REQUEST, FIGHT_LIST_SUCCESS } from "../Constants/FightConstants.js";

export const listFlight = (id) => async (dispatch, getState) => {
    try {
        dispatch({ type: FIGHT_LIST_REQUEST });

        var data;
        await axios.get(`/api/v1/fight/airplanetypeid/${id}`,
            {
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                baseURL: "https://airport-managerment-be.vercel.app",
            }).then((res) => (data = res.data));

        dispatch({ type: FIGHT_LIST_SUCCESS, payload: data });
    } catch (error) {
        const message =
            error.response && error.response.data.message
                ? error.response.data.message
                : error.message;
        dispatch({ type: FIGHT_LIST_FAIL, payload: message });
    }
};