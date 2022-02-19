import { createStore, combineReducers } from "redux";
import { chatReducer } from "./chatReducer";

let rootReducer = combineReducers({chatReducer});
export let store = createStore(rootReducer);