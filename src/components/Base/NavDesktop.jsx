import React, { Component } from 'react'
import './NavDesktop.css';
import Mylogo from './mylogo.svg';
import Darkness from './darkness.svg'
import Brightness from './brightness.svg';
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';
import { setDark } from '../Store/actions';


class NavDesktop extends Component {
    state = {  }
    handleDarkMode = () => {
        // console.log("making dark")
        this.props.setIsDark(!this.props.isDark)
    }

    render() { 
        return ( 
            <div style={ this.props.isDark ? {backgroundColor: "#2b2a2a"} : null } className="parentNav">
                <div className="desktopnav hfIis">
                    <div className="nameNav">
                    <img style={ this.props.isDark ? {filter: "brightness(0) invert(1)"} : null } className="Nav__Logo-A" src={Mylogo} alt=""/>
                    <NavLink style={ this.props.isDark ? {color: "white"} : null } to="/">Akcosh</NavLink>
                    </div>
                    <div className="navLinks">
                        <NavLink style={ this.props.isDark ? {color: "white"} : null }  activeStyle={ this.props.isDark ? {color: "#888686" } : {color: "#212121"}} exact to="/">Home</NavLink>
                        <NavLink style={ this.props.isDark ? {color: "white"} : null }  activeStyle={ this.props.isDark ? {color: "#888686" } : {color: "#212121"}} to="/about/">About</NavLink>
                        <NavLink style={ this.props.isDark ? {color: "white"} : null }  activeStyle={ this.props.isDark ? {color: "#888686" } : {color: "#212121"}} to="/blog/">Blog</NavLink>
                        <NavLink style={ this.props.isDark ? {color: "white"} : null }  activeStyle={ this.props.isDark ? {color: "#888686" } : {color: "#212121"}} to="/software/">Software</NavLink>
                        <NavLink style={ this.props.isDark ? {color: "white"} : null }  activeStyle={ this.props.isDark ? {color: "#888686" } : {color: "#212121"}} to="/contact/">Contact</NavLink>
                        <button onClick={this.handleDarkMode} className="toggleLight">
                            <img src={this.props.isDark ? Brightness : Darkness} alt="" />
                        </button>
                    </div>
                </div>
            </div>
         );
    }
}

const mapStateToProps = state => {
    return {
        isDark: state.WebsiteInterface.isDark
    }
}

const mapDispatchToProps = dispatch => {
    return {
        setIsDark: (value) => dispatch(setDark(value)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavDesktop);