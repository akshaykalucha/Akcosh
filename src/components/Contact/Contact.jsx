import React, { Component } from 'react';
import './contact.css';

class Contact extends Component {
    render() { 
        return ( 
            <div className="contactme">
                <div className="contactform">
                    <h4 className="contactmehead">
                        Feel free to email me via
                        <a href="mailto:akshay23l@hotmail.com" target="_top"> akshay23l@hotmail.com</a>
                    </h4>
                    <p className="contactmehead">Or fill in the contact form down below</p>
                    <form action="#" className="contactForm">
                        <div className="contactformel">
                            <label for="name" aria-label="please insert your name">Full name:<input name="name" type="text" id="name" error="0" className="formfield" value="" /></label>
                        </div>
                        <div className="contactformel">
                            <label for="email" aria-label="please insert your email">Your email:<input name="email" type="email" id="email" error="0" className="formfield" value="" /></label>
                        </div>
                        <div className="contactformel">
                            <label for="message" aria-label="please insert your message">Message:<textarea name="message" id="message" error="0" textarea="true" className="formtextarea"></textarea></label>
                        </div>
                        <div className="contactformbtn">
                            <button type="submit" className="formsendbtn">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default Contact;