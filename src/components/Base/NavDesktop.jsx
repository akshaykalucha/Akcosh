import React, { Component } from 'react'
import './NavDesktop.css';
import Mylogo from './mylogo.svg';
import darkness from './darkness.svg';
import { NavLink } from 'react-router-dom';


class NavDesktop extends Component {
    state = {  }
    render() { 
        return ( 
            <div className="parentNav">
                <div className="desktopnav hfIis">
                    <div className="nameNav">
                    <img className="Nav__Logo-A" src={Mylogo} alt=""/>
                    <NavLink to="/">Akcosh</NavLink>
                    </div>
                    <div className="navLinks">
                        <NavLink activeStyle={{color: "#212121", opacity: "1"}} exact to="/">Home</NavLink>
                        <NavLink activeStyle={{color: "#212121", opacity: "1"}} to="/about/">About</NavLink>
                        <NavLink activeStyle={{color: "#212121", opacity: "1"}} to="/blog/">Blog</NavLink>
                        <NavLink activeStyle={{color: "#212121", opacity: "1"}} to="/software/">Software</NavLink>
                        <NavLink activeStyle={{color: "#212121", opacity: "1"}} to="/contact/">Contact</NavLink>
                        <button className="toggleLight">
                            <img src={darkness} alt="" />
                        </button>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default NavDesktop;