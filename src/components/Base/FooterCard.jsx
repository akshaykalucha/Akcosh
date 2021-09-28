import React, { Component } from 'react';
import './Footercard.css';
import axios from 'axios';
import {connect} from 'react-redux';


class FooterCard extends Component {
    state = {
        clicked: false,
        changeClr: false,
        email: "",
    }
    
    validateEmail = (email) => {
        axios.get(`https://www.ipqualityscore.com/api/json/email/acyGUsOrUMedF7S8Qy9r9cTRukKbY57f/${email}`,{headers: {
            'Cache-Control': 'no-cache',
            'Pragma': 'no-cache',
            'Expires': '0',
            'Access-Control-Allow-Origin' : '*',
            'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
            'Content-Type' : 'application/x-www-form-urlencoded; charset=UTF-8;application/json' 
        }})
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
    subscribe = (e) => {
        e.preventDefault();
        e.disabled = true
        this.setState({
            changeClr: true
        })
        this.validateEmail(this.state.email)
        setTimeout(() => {
            this.setState({
                clicked: true,
                changeClr: false,
                email: "",
            })
        }, 2000);
    }


    render() { 
        return (
            <div style={ this.props.isDark ? {backgroundColor: "#2b2a2a"} : null } className="footercard">
                <div style={ this.props.isDark ? {backgroundColor: "#2b2a2a"} : null } className="footerCardSection">
                    <form action="#" className="footercardform">
                        <h3 style={ this.props.isDark ? {color: "white"} : null } className="footerCardheading">Subscribe to Akcosh.me</h3>
                        <p style={ this.props.isDark ? {color: "white"} : null } className="footerCardP">And get the latest articles delivered right to your inbox!</p>
                        <div className="footerforminput">
                            <input value={this.state.email} onChange={(e) => this.setState({email: e.target.value})} aria-label="please insert your email" form="[object Object]" placeholder="youremail@example.com" type="email" className="footerinput" />
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

const mapStateToProps = state => {
    return{
        isDark: state.WebsiteInterface.isDark
    }
}
 
export default connect(mapStateToProps)(FooterCard);