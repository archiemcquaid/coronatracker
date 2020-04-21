import initialState from "./initialState";
import * as TYPES from "../types";

export default function statsReducer(state = initialState.stats, action) {
    switch(action.type) {
        case TYPES.LOAD_STATS:
            return action.stats.map((el, index) => {
                return {...el, id: index + 1}
            });
        default:
            return state;
    }
}