import initialState from "./initialState";
import * as TYPES from "../types";

export default function settingsReducer(state = initialState.settings, action) {
    switch(action.type) {
        case TYPES.SET_SETTING:
            let newSettings = {...state.settings};
            newSettings[action.key] = action.value;
            return newSettings;
        default:
            return state;
    }

}