import CountryList from "../components/CountryList/CountryList";
import GlobalStats from "../components/GlobalStats/GlobalStats";
import Settings from "../components/Settings/Settings";

export default [
    {
        path: '/globalStats',
        component: GlobalStats,
        exact: true,
    },
    {
        path: '/countryList',
        component: CountryList
    },
    {
        path: '/settings',
        component: Settings
    },
];