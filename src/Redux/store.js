import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { flightListReducer } from "./Reducers/FightReducers.js";
import { airlineReducer } from "./Reducers/AirlineReducers.js";
import { airPlaneTypeReducer } from "./Reducers/AirPlaneTypeReducers.js";
import { terminalReducer } from "./Reducers/TerminalReducers.js";


const reducer = combineReducers({
  listFlight: flightListReducer,
  airline: airlineReducer,
  airPlaneType: airPlaneTypeReducer,
  terminal: terminalReducer,
});


const middleware = [thunk];

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
