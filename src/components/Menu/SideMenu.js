import React from 'react';
import {slide as Menu} from 'react-burger-menu';
import {decorator as reduxBurgerMenu} from 'redux-burger-menu';
import MenuLink from "./MenuLink";
import navigation from '../../constants/nav';

const ReduxBurgerMenu = reduxBurgerMenu(Menu);

class SideMenu extends React.Component{
    render() {
        return (
            <ReduxBurgerMenu {...this.props}>
                {navigation.map((navItem, index) => {
                    return (<MenuLink {...navItem} key={index}/>);
                })}
            </ReduxBurgerMenu>
        );
    }
}

export default SideMenu;