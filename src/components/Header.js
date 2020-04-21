import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getStats} from '../redux/actions/statsActions';
import {FaSync} from 'react-icons/fa';
import {clearPinnedCountry} from "../redux/actions/pinnedCountryActions";
import CountryCard from "./CountryList/CountryCard";
import moment from "moment";
import {action as toggleMenu} from 'redux-burger-menu';
import {AiOutlineMenu} from "react-icons/ai";

class Header extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        };
    }

    updateStats = () => {
        this.props.updateStats();
        this.setState({loading: true})
    };

    UNSAFE_componentWillReceiveProps() {
        this.setState({loading: false});
    }

    render() {

        const lastUpdated = this.props.lastUpdated ? moment(this.props.lastUpdated).format('MM/DD/YYYY HH:mm:ss') : '...';

        return (
            <div className={`header ${this.props.pinnedCountry && 'pinned-country'}`}>
                {this.state.loading ? (
                    <progress className="progress is-tiny is-danger no-br no-margin" max="100"/>
                ) : (
                    <progress className="progress is-tiny is-danger no-br no-margin" max="100"
                              value={!this.state.loading && 0}/>
                )}
                <div className={"inner-header"}>
                    <div className={"double"}>
                        <button className="button is-light is-large" style={{background: 'none'}}
                                onClick={() => this.props.toggleMenu(!this.props.menuOpen)}
                                disabled={this.state.loading}>
                        <span className="icon">
                          <AiOutlineMenu/>
                        </span>
                        </button>
                        <h1 className="title" style={{marginTop: 10}}>
                            Covid-19
                        </h1>
                        <button className="button is-light is-large" onClick={this.updateStats}
                                disabled={this.state.loading}>
                        <span className="icon">
                          <FaSync/>
                        </span>
                        </button>
                    </div>
                    <div className={"last-updated"}>Last Updated: {lastUpdated}</div>
                </div>

                {this.props.pinnedCountry && (
                    <div>
                        <CountryCard country={this.props.pinnedCountry} isPinned={true}/>
                    </div>
                )}
            </div>
        );
    }
}

const matchStateToProps = (state) => {
    return {
        stats: state.stats,
        pinnedCountry: state.pinnedCountry ? state.stats.find(el => (el.id === state.pinnedCountry)) : null,
        lastUpdated: state.lastUpdated,
        menuOpen: state.burgerMenu.isOpen
    }
};

const matchDispatchToProps = (dispatch) => {
    return {
        updateStats: bindActionCreators(getStats, dispatch),
        clearPinnedCountry: bindActionCreators(clearPinnedCountry, dispatch),
        toggleMenu: bindActionCreators(toggleMenu, dispatch),
    }
};

export default connect(matchStateToProps, matchDispatchToProps)(Header);