import React, { Component } from 'react';
import './Footercard.css';

class FooterCard extends Component {
    render() { 
        return (
            <div className="footercard">
                <div className="footerCardSection">
                    <form action="#" className="footercardform">
                        <h3 className="footerCardheading">Subscribe to Akcosh.me</h3>
                        <p className="footerCardP">And get the latest articles delivered right to your inbox!</p>
                        <div className="footerforminput">
                            <input aria-label="please insert your email" form="[object Object]" placeholder="youremail@example.com" type="email" className="footerinput" />
                            <button type="submit" className="footerbutton">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default FooterCard;