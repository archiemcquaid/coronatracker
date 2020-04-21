import React from 'react';
import connect from "react-redux/es/connect/connect";
import {bindActionCreators} from "redux";
import {getStats} from "./redux/actions/statsActions";
import SideMenu from "./components/Menu/SideMenu";
import {Route, Switch, Redirect} from "react-router-dom"
import Header from "./components/Header";
import routes from "./constants/routes";

class App extends React.Component{

    constructor(props) {
        super(props);
    }


    componentDidMount() {
        this.props.updateStats();
    }


    render() {

        const loadPage = this.props.loadPage || "/countryList";

        return (
            <div id="outer-container">
                <SideMenu pageWrapId={"page-wrap"} outerContainerId={"outer-container"} isOpen={this.props.menuOpen}
                          customBurgerIcon={false}/>
                <main id="page-wrap container">
                    <div className="container">
                        <Header/>
                        <div className={`scroll-page ${this.props.pinnedCountry && 'pinned-country'}`}>
                            <Switch>
                                {routes.map((navItem, index) => {
                                    return (<Route {...navItem} key={index}/>)
                                })}
                                <Redirect to={loadPage}/>
                            </Switch>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

const matchStateToProps = (state) => {
    return {
        menuOpen: state.burgerMenu.isOpen,
        loadPage: state.settings.loadPage,
        pinnedCountry: !!state.pinnedCountry
    }
};

const matchDispatchToProps = (dispatch) => {
    return {
        updateStats: bindActionCreators(getStats, dispatch)
    }
};

export default connect(matchStateToProps, matchDispatchToProps)(App);