import React, { Component } from 'react';
import './services.css';
import { MyServices } from './Content';
import {connect} from "react-redux";

class Services extends Component {
    render() { 
        return ( 
            <div style={ this.props.isDark ? {backgroundColor: "#2b2a2a", color:"white"} : null } className="services">
                <div className="servicesContent">
                    <h2>Services</h2>
                    <div className="servicesdiv">
                        {MyServices.map((content, key) => {
                            return <div className="servicesCard" key={key}>
                                <div className="servicesimg"><img src={content.img} alt={content.heading} /></div>
                                <h4 className="servicesheading">{content.heading}</h4>
                                <p style={ this.props.isDark ? {color:"white"} : null }>{content.desc}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return{
        isDark: state.WebsiteInterface.isDark
    }
}


export default connect(mapStateToProps)(Services);