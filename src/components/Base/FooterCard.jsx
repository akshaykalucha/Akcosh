import React, { Component } from 'react';
import './Footercard.css';

class FooterCard extends Component {
    state = {
        clicked: false,
        changeClr: false,
    }
    subscribe = (e) => {
        e.preventDefault();
        e.disabled = true
        this.setState({
            changeClr: true
        })
        setTimeout(() => {
            this.setState({
                clicked: true,
                changeClr: false
            })
        }, 2000);
    }



    render() { 
        return (
            <div className="footercard">
                <div className="footerCardSection">
                    <form action="#" className="footercardform">
                        <h3 className="footerCardheading">Subscribe to Akcosh.me</h3>
                        <p className="footerCardP">And get the latest articles delivered right to your inbox!</p>
                        <div className="footerforminput">
                            <input aria-label="please insert your email" form="[object Object]" placeholder="youremail@example.com" type="email" className="footerinput" />
                            <button disabled={this.state.changeClr ? true : false} onClick={(e) => {this.subscribe(e)}} type="submit" className="footerbutton">Subscribe</button>
                        </div>
                        <h4 style={!this.state.clicked ? {display: "none"} : {display: "block"}} className="promptmsg">Thank you! You will receive your first email shortly 
                        <span role="img" aria-label="successfully subscribed to news letter">🎉</span>
                        </h4>
                    </form>
                </div>
            </div>
        );
    }
}
 
export default FooterCard;