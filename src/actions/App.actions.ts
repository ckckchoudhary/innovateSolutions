import { AnyAction } from "redux";

export const UPDATE_APP = "UPDATE_APP";

export function updateApp(): AnyAction {
    return {
        type: UPDATE_APP
    }
}