import React, {Component} from 'react';
import connect from "react-redux/es/connect/connect";
import Stat from "./Stat";

class GlobalStats extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        return (
            <div className={"page-margin global-stats"}>
                <Stat value={this.props.stats.totalCases} label={"Total Cases"}/>
                <Stat value={this.props.stats.deaths} label={"Deaths"} className={'has-text-danger'}/>
                <Stat value={this.props.stats.recovered} label={"Recovered"}/>
            </div>
        );
    }
}

const matchStateToProps = (state) => {
    return {
        stats: state.globalStats
    }
};

export default connect(matchStateToProps, undefined)(GlobalStats);