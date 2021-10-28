import { AnyAction } from "redux";
import { UPDATE_APP } from "../actions/App.actions";

export interface IAppState {
    randomData: number
};


const initialState: IAppState = {
    randomData: Math.random()
}


export const AppReducer = (state: IAppState = initialState, action: AnyAction): IAppState => {
    switch (action.type) {
        case UPDATE_APP: {
            return {
                ...state,
                randomData: Math.random()
            }
        }
        default: return state;
    }
}