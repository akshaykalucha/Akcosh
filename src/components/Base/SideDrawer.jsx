import React from 'react'
import './sideDrawer.css'
import Darkness from './darkness.svg'
import { connect } from 'react-redux'
import { setDark } from '../Store/actions';
import Brightness from './brightness.svg';
import { NavLink } from 'react-router-dom';


 const SideDrawer = props => {
    const handleDarkMode = () => {
        // console.log("making dark")
        props.setIsDark(!props.isDarknessStore)
    }

    return (
        <div style={ props.isDarknessStore ? {backgroundColor: "#2b2a2a"} : null } className={props.showSidedrawer ? "drawerOpen" : "drawerClosed"} onClick={props.unshowsideDrawer}>
            <div className="Sidelist">
                <NavLink style={ props.isDarknessStore ? {color: "white"} : null }  activeStyle={ props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}} exact to="/">Home</NavLink>
                <NavLink style={ props.isDarknessStore ? {color: "white"} : null }  activeStyle={ props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}} to="/about/">About</NavLink>
                <NavLink style={ props.isDarknessStore ? {color: "white"} : null }  activeStyle={ props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}} to="/blog/">Blog</NavLink>
                <NavLink style={ props.isDarknessStore ? {color: "white"} : null }  activeStyle={ props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}} to="/software/">Software</NavLink>
                <NavLink style={ props.isDarknessStore ? {color: "white"} : null }  activeStyle={ props.isDarknessStore ? {color: "#888686" } : {color: "#212121"}} to="/contact/">Contact</NavLink>
                <button onClick={handleDarkMode} className="brightnessbutton">
                    <img src={props.isDarknessStore ? Brightness : Darkness} alt="" />
                </button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isDarknessStore: state.WebsiteInterface.isDark
    }}

const mapDispatchToProps = dispatch => {
    return {
        setIsDark: (value) => dispatch(setDark(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SideDrawer)