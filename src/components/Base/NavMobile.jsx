import React from 'react';
import DrawerButton from './DrawerButton';
import Mylogo from './mylogo.svg';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import './navmobile.css';


function NavMobile(props) {
    return (
        <div className="mainParentMob">
            <div style={ props.isDarknessStore ? {backgroundColor: "#212121"} : null } className="parentMobNav">
                <div className="navmobile">
                        <NavLink style={ props.isDarknessStore ? {color: "white"} : null } to="/" className="navmobilea">
                            <img style={ props.isDarknessStore ? {filter: "brightness(0) invert(1)"} : null } className="navmobilelogo" src={Mylogo} alt=""/>
                            Akcosh
                        </NavLink>
                </div>
            </div>
            <DrawerButton drawer={props.drawerHandler} clickbutton={props.click} />
        </div>
    )
}


const mapStateToProps = state => {
    return {
        isDarknessStore: state.WebsiteInterface.isDark
    }
}

export default connect(mapStateToProps)(NavMobile);