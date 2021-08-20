import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Intro.css';

class Intro extends Component {
    state = {
        emailHover: false,
        emailClicked: false
    }

    render() { 
        return ( 
            <div className="Intro">
                <p className={this.state.emailHover ? this.state.emailClicked ? "email-btn eeemail email-btn-clicked" : "eeemail email-btn" : "eeemail email-copy"}
                    onClick={() => this.setState({emailClicked: true})} onMouseEnter={() => this.setState({emailHover: true})} onMouseLeave={() => 
                    this.setState({emailHover:false, emailClicked: false})}>
                    {this.state.emailHover ? this.state.emailClicked ? "Copied to clipboard!" : "Click here to copy!" : "akshay23l@hotmail.com"}
                </p>
                <div className="IntroContent">
                    <div className="Mainname"><h1>I'm Akshay Kalucha</h1></div>
                    <p className="IntroPara">Also known as Akcosh, a student, Full Stack JavaScript Developer, & Software Programming hobbyist <br/> through research & development.
                            I love open source and building side projects. algorithms to document the logic, reasoning, and problems,
                            but there’s also a lot more to it.</p>
                    <div className="neon_btn">
                        <a target="_blank" rel="noopener noreferrer" className="neon_btn_link" href="#">View resume</a>
                        <NavLink className="neon_btn_link" to="/contact/">Get In Touch</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Intro;