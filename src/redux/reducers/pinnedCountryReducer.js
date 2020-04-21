import initialState from "./initialState";
import * as TYPES from "../types";

export default function pinnedCountryReducer(state = initialState.pinnedCountry, action) {
    switch(action.type) {
        case TYPES.SET_PINNED_COUNTRY:
            return action.id;
        case TYPES.CLEAR_PINNED_COUNTRY:
            return null;
        default:
            return state;
    }

}