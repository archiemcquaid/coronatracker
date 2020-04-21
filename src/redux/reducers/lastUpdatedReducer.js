import initialState from "./initialState";
import * as TYPES from "../types";

export default function lastUpdatedReducer(state = initialState.lastUpdated, action) {
    switch(action.type) {
        case TYPES.SET_LAST_UPDATED:
            return new Date().getTime();
        default:
            return state;
    }

}