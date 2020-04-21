import React from 'react'
import {FaThumbtack} from 'react-icons/fa';
import {MdClose} from "react-icons/md";
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {clearPinnedCountry, setPinnedCountry} from "../../redux/actions/pinnedCountryActions";
import NumberFormat from 'react-number-format';
import Tooltip from 'rc-tooltip';
import 'rc-tooltip/assets/bootstrap.css';
import ordinal from "ordinal";

function CountryCard(props) {
    const {country} = props;
    return (
        <div className={`card country-card${props.isPinned ? ' no-shadow' : ''}`}>
            <header className="card-header">
                <div className={"country-name"}>
                    <p className="card-header-title">
                        {country.country}{props.isPinned && ` - ${ordinal(country.id)}`}
                    </p>
                    {!props.isPinned ? (
                        <button className="button is-light" onClick={() => props.setPinnedCountry(country.id)}>
                        <span className="icon">
                          <FaThumbtack/>
                        </span>
                        </button>
                    ) : (
                        <button className="button is-light" onClick={() => props.clearPinnedCountry()}>
                        <span className="icon">
                          <MdClose/>
                        </span>
                        </button>
                    )}
                </div>
            </header>
            <div className="card-content">
                <div className="mb-1">
                    <div className={"double"}>
                        <div>
                            <NumberFormat displayType={'text'} thousandSeparator={true}
                                          value={country.totalCases - country.recovered - country.deaths}/> infected.
                        </div>
                        <div>
                            {country.newToday ? `+${country.newToday}` : `-`}
                        </div>
                    </div>
                </div>
                <div className="has-text-danger mb-1">
                    <div className={"double"}>
                        <div>
                            <NumberFormat displayType={'text'} thousandSeparator={true} value={country.deaths}/> deaths.
                        </div>
                        <div>
                            <Tooltip placement="top" trigger={['click']} overlay={<span>
                                % of deaths post infection
                            </span>}>
                                <p>{((country.deaths / (country.recovered + country.deaths)) * 100).toFixed(2)}%</p>
                            </Tooltip>
                        </div>
                        <div>
                            {country.newDeathsToday ? `+${country.newDeathsToday}` : `-`}
                        </div>
                    </div>
                </div>
                <div>
                    <div className={"double"}>
                        <div>
                            <NumberFormat displayType={'text'} thousandSeparator={true} value={country.recovered}/> recovered.
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

const matchDispatchToProps = (dispatch) => {
    return {
        setPinnedCountry: bindActionCreators(setPinnedCountry, dispatch),
        clearPinnedCountry: bindActionCreators(clearPinnedCountry, dispatch),
    }
};

export default connect(undefined, matchDispatchToProps)(CountryCard);