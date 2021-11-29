import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { carsReducer } from "./reducers/carsReducer";
import { alertsReducer } from "./reducers/alertReducer";
const composeEnhancers = composeWithDevTools({});
const rootReducer = combineReducers({ carsReducer, alertsReducer });
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
