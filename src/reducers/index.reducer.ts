import { combineReducers, createStore } from "redux";
import { AppReducer } from "./App.reducer";

export const allReduces = combineReducers({
    homePage: AppReducer
})

export const AppStore = createStore(allReduces);