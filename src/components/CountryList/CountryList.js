import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {getStats} from '../../redux/actions/statsActions';
import CountryCard from "./CountryCard";

class CountryList extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            loading: false
        }
    }

    render() {
        return (
            <React.Fragment>
                {this.props.stats.map((country, index) => {
                    return <CountryCard country={country} key={index}/>
                })}
            </React.Fragment>
        );
    }
}

const matchStateToProps = (state) => {
    return {
        stats: state.stats.slice(0, 75)
    }
};

const matchDispatchToProps = (dispatch) => {
    return {
        updateStats: bindActionCreators(getStats, dispatch)
    }
};

export default connect(matchStateToProps, matchDispatchToProps)(CountryList);