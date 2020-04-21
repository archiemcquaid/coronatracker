import React from 'react';
import connect from "react-redux/es/connect/connect";
import {action as toggleMenu} from "redux-burger-menu";
import {Link} from 'react-router-dom';

function MenuLink(props) {
    return (
        <div id={props.path} className="menu-item" onClick={() => props.closeMenu()}>
            <Link to={props.path}>
                {props.displayName}
            </Link>
        </div>
    )
}

const matchDispatchToProps = (dispatch) => {
    return {
        closeMenu: () => dispatch(toggleMenu(false))
    }
};


export default connect(undefined, matchDispatchToProps)(MenuLink);