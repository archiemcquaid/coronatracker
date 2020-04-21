import initialState from "./initialState";
import * as TYPES from "../types";

export default function globalStatsReducer(state = initialState.globalStats, action) {
    switch(action.type) {
        case TYPES.LOAD_GLOBAL_STATS:
            return action.globalStats;
        default:
            return state;
    }
}