import React, {Component} from 'react';
import {connect} from 'react-redux';
import Select from 'react-select'
import navigation from '../../constants/nav';
import {bindActionCreators} from "redux";
import {setSetting} from "../../redux/actions/settingsActions";

const launchPageOptions = navigation.map(el => {
    return {
        value: el.path,
        label: el.displayName
    }
});

class Settings extends Component{

    constructor(props) {
        super(props);
    }

    render() {

        const settings = this.props.settings;

        return (
            <div className={"page-margin settings"}>
                <div className={"setting"}>
                    <p>
                        Launch Page
                    </p>
                    <Select
                        inputProps={{readOnly:true}}
                        isSearchable={ false }
                        className={'selector'}
                        options={launchPageOptions}
                        onChange={(option) => this.props.setSetting('loadPage', option.value)}
                        value={launchPageOptions.find(el => (el.value === settings.loadPage))}/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        settings: state.settings
    };
}

const matchDispatchToProps = (dispatch) => {
    return {
        setSetting: bindActionCreators(setSetting, dispatch)
    }
};

export default connect(
    mapStateToProps, matchDispatchToProps
)(Settings);