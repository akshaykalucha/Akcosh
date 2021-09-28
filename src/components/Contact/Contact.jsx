import React, { Component } from 'react';
import './contact.css';
import {connect} from "react-redux";

class Contact extends Component {
    render() { 
        return ( 
            <div style={ this.props.isDark ? {backgroundColor: "#212121", color: "white"} : null } className="contactme">
                <div className="contactform">
                    <h4 className="contactmehead">
                        Feel free to email me via
                        <a href="mailto:akshay23l@hotmail.com" target="_top"> akshay23l@hotmail.com</a>
                    </h4>
                    <p className="contactmehead">Or fill in the contact form down below</p>
                    <form action="#" className="contactForm">
                        <div className="contactformel">
                            <label htmlFor="name" aria-label="please insert your name">Full name:<input name="name" type="text" id="name" error="0" className="formfield" value="" /></label>
                        </div>
                        <div className="contactformel">
                            <label htmlFor="email" aria-label="please insert your email">Your email:<input name="email" type="email" id="email" error="0" className="formfield" value="" /></label>
                        </div>
                        <div className="contactformel">
                            <label htmlFor="message" aria-label="please insert your message">Message:<textarea name="message" id="message" error="0" textarea="true" className="formtextarea"></textarea></label>
                        </div>
                        <div className="contactformbtn">
                            <button htmlFor="submit" className="formsendbtn">Send</button>
                        </div>
                    </form>
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
 
export default connect(mapStateToProps)(Contact);