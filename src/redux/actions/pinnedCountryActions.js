import * as TYPES from "../types";

export function setPinnedCountry(id) {
    return {
        type: TYPES.SET_PINNED_COUNTRY,
        id
    }
}

export function clearPinnedCountry() {
    return {
        type: TYPES.CLEAR_PINNED_COUNTRY
    }
}