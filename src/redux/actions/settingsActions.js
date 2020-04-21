import * as TYPES from "../types";

export function setSetting(key, value) {
    return {
        type: TYPES.SET_SETTING,
        key,
        value
    }
}