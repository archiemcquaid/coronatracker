import * as TYPES from "../types";
import coronaStatsService from "../../services/coronaStatsService";
import {setLastUpdated} from "./lastUpdatedActions";

export function getStatsSuccess(stats) {
    return {
        type: TYPES.LOAD_STATS,
        stats
    }
}

export function getGlobalStatsSuccess(globalStats) {
    return {
        type: TYPES.LOAD_GLOBAL_STATS,
        globalStats
    }
}

export function getStats() {
    return function(dispatch) {
        return coronaStatsService.getStatsMock().then(stats => {
            dispatch(getStatsSuccess(stats.countries));
            dispatch(getGlobalStatsSuccess(stats.stats));
            dispatch(setLastUpdated());
        }).catch(err => {
            throw err;
        })
    }
}