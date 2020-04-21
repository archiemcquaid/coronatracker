import {combineReducers} from 'redux'
import statsReducer from './statsReducer'
import pinnedCountryReducer from "./pinnedCountryReducer";
import globalStatsReducer from "./globalStatsReducer";
import lastUpdatedReducer from "./lastUpdatedReducer";
import {reducer as burgerMenu} from 'redux-burger-menu';
import settingsReducer from "./settingsReducer";

const rootReducer = combineReducers({
    burgerMenu,
    stats: statsReducer,
    pinnedCountry: pinnedCountryReducer,
    lastUpdated: lastUpdatedReducer,
    globalStats: globalStatsReducer,
    settings: settingsReducer
});

export default rootReducer;