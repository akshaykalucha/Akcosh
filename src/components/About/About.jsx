import React, { Component } from 'react';
import {connect} from 'react-redux';
import setupimg from '../Assets/mysetup.jpg';
import './about.css';
import github from '../Assets/github.svg';
import linkedin from '../Assets/linkedin.svg';
import instagram from '../Assets/instagram.svg';
import twitter from '../Assets/twitter.svg';
import unsplash from '../Assets/unsplash.svg';


class About extends Component {
    render() { 
        return ( 
            <div style={ this.props.isDark ? {backgroundColor: "#212121"} : null } className="AboutContainer">
                <div className="Aboutmewrapper">
                    <h1 style={ this.props.isDark ? {color: "white"} : null } className="aboutheading">About me</h1>
                    <div className="aboutmeContent">
                        <div className="aboutIntro">
                            <p style={ this.props.isDark ? {color: "white"} : null } className="aboutp">I’m Akshay Kalucha, also known as Akcosh, I’m a self-taught software developer, Graphic, UI/UX Designer
                               and full stack JavaScript developer. I'm really interested in Technologies & solving dev problems. 
                               You can know more about me by reading my articles. Currently I'm working onsite for Intellify Delhi as a 
                               Full stack software developer and i love to work on new technologies while exploring and learning the core 
                               concepts of development.</p>
                            <p style={ this.props.isDark ? {color: "white"} : null } className="aboutp">Currently I'm doing consulting, working on <a target="_blank" rel="noopener noreferrer" href="https://github.com/akshaykalucha3/React-HeartStroke-Prediction">React Heart Stroke APP </a>and helping build the <a target="_blank" rel="noopener noreferrer" href="https://github.com/akshaykalucha3/React-HeartStroke-Prediction">Landing Page</a>.</p>
                            <p style={ this.props.isDark ? {color: "white"} : null } className="aboutp">For business inquiries feel free to get in touch with me at:</p>
                            <div className="businessInquiry">
                                <p style={ this.props.isDark ? {color: "white"} : null } className="businessLocation">
                                    <img style={ this.props.isDark ? {filter: "brightness(0) invert(1)"} : null } src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCAxNCAxNCI+PGcgZmlsbD0iIzAzMDEwNCI+PHBhdGggZD0iTTcgOUw1LjI2OCA3LjQ4NC4zMTYgMTEuNzI5Yy4xOC4xNjcuNDIzLjI3MS42OTEuMjcxaDExLjk4NmMuMjY3IDAgLjUwOS0uMTA0LjY4OC0uMjcxTDguNzMyIDcuNDg0IDcgOXoiLz48cGF0aCBkPSJNMTMuNjg0IDIuMjcxQTEuMDA3IDEuMDA3IDAgMCAwIDEyLjk5MyAySDEuMDA3Yy0uMjY3IDAtLjUwOS4xMDQtLjY4OS4yNzNMNyA4bDYuNjg0LTUuNzI5ek0wIDIuODc4djguMzA4bDQuODMzLTQuMTA3ek05LjE2NyA3LjA3OUwxNCAxMS4xODZWMi44NzV6Ii8+PC9nPjwvc3ZnPg==" alt="rr"
                                    className="EnquiryImg" />
                                    akshay23l@hotmail.com
                                </p>
                                <p style={ this.props.isDark ? {color: "white"} : null } className="businessLocation">
                                    <img style={ this.props.isDark ? {filter: "brightness(0) invert(1)"} : null } src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCA1NzguMTA2IDU3OC4xMDYiPjxwYXRoIGQ9Ik01NzcuODMgNDU2LjEyOGMxLjIyNSA5LjM4NS0xLjYzNSAxNy41NDUtOC41NjggMjQuNDhsLTgxLjM5NiA4MC43ODFjLTMuNjcyIDQuMDgtOC40NjUgNy41NTEtMTQuMzgxIDEwLjQwNC01LjkxNiAyLjg1Ny0xMS43MjkgNC42OTMtMTcuNDM5IDUuNTA4LS40MDggMC0xLjYzNS4xMDUtMy42NzYuMzA5LTIuMDM3LjIwMy00LjY4OS4zMDctNy45NTMuMzA3LTcuNzU0IDAtMjAuMzAxLTEuMzI2LTM3LjY0MS0zLjk3OXMtMzguNTU1LTkuMTgyLTYzLjY0NS0xOS41ODRjLTI1LjA5Ni0xMC40MDQtNTMuNTUzLTI2LjAxMi04NS4zNzYtNDYuODE4LTMxLjgyMy0yMC44MDUtNjUuNjg4LTQ5LjM2Ny0xMDEuNTkyLTg1LjY4LTI4LjU2LTI4LjE1Mi01Mi4yMjQtNTUuMDgtNzAuOTkyLTgwLjc4My0xOC43NjgtMjUuNzA1LTMzLjg2NC00OS40NzEtNDUuMjg4LTcxLjI5OS0xMS40MjUtMjEuODI4LTE5Ljk5My00MS42MTYtMjUuNzA1LTU5LjM2NFM0LjU5IDE3Ny4zNjIgMi41NSAxNjQuNTEtLjMwNiAxNDEuNTYuMTAyIDEzNC4yMTZjLjQwOC03LjM0NC42MTItMTEuNDI0LjYxMi0xMi4yNC44MTYtNS43MTIgMi42NTItMTEuNTI2IDUuNTA4LTE3LjQ0MnM2LjMyNC0xMC43MSAxMC40MDQtMTQuMzgyTDk4LjAyMiA4Ljc1NmM1LjcxMi01LjcxMiAxMi4yNC04LjU2OCAxOS41ODQtOC41NjggNS4zMDQgMCA5Ljk5NiAxLjUzIDE0LjA3NiA0LjU5czcuNTQ4IDYuODM0IDEwLjQwNCAxMS4zMjJsNjUuNDg0IDEyNC4yMzZjMy42NzIgNi41MjggNC42OTIgMTMuNjY4IDMuMDYgMjEuNDItMS42MzIgNy43NTItNS4xIDE0LjI4LTEwLjQwNCAxOS41ODRsLTI5Ljk4OCAyOS45ODhjLS44MTYuODE2LTEuNTMgMi4xNDItMi4xNDIgMy45NzhzLS45MTggMy4zNjYtLjkxOCA0LjU5YzEuNjMyIDguNTY4IDUuMzA0IDE4LjM2IDExLjAxNiAyOS4zNzYgNC44OTYgOS43OTIgMTIuNDQ0IDIxLjcyNiAyMi42NDQgMzUuODAyczI0LjY4NCAzMC4yOTMgNDMuNDUyIDQ4LjY1M2MxOC4zNiAxOC43NyAzNC42OCAzMy4zNTQgNDguOTYgNDMuNzYgMTQuMjc3IDEwLjQgMjYuMjE1IDE4LjA1MyAzNS44MDMgMjIuOTQ5IDkuNTg4IDQuODk2IDE2LjkzMiA3Ljg1NCAyMi4wMzEgOC44NzFsNy42NDggMS41MzFjLjgxNiAwIDIuMTQ1LS4zMDcgMy45NzktLjkxOCAxLjgzNi0uNjEzIDMuMTYyLTEuMzI2IDMuOTc5LTIuMTQzbDM0Ljg4My0zNS40OTZjNy4zNDgtNi41MjcgMTUuOTEyLTkuNzkxIDI1LjcwNS05Ljc5MSA2LjkzOCAwIDEyLjQ0MyAxLjIyMyAxNi41MjMgMy42NzJoLjYxMWwxMTguMTE1IDY5Ljc2OGM4LjU3MSA1LjMwOCAxMy42NyAxMi4wMzggMTUuMzAzIDIwLjE5OHoiIGZpbGw9IiMwMTAwMDIiLz48L3N2Zz4=" alt="rr"
                                    className="EnquiryImg" />
                                    987****100
                                </p>
                                <p style={ this.props.isDark ? {color: "white"} : null } className="businessLocation">
                                    <img style={ this.props.isDark ? {filter: "brightness(0) invert(1)"} : null } src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCA1NzguMTA2IDU3OC4xMDYiPjxwYXRoIGQ9Ik0zMjIuNjIxIDQyLjgyNUMyOTQuMDczIDE0LjI3MiAyNTkuNjE5IDAgMjE5LjI2OCAwYy00MC4zNTMgMC03NC44MDMgMTQuMjc1LTEwMy4zNTMgNDIuODI1LTI4LjU0OSAyOC41NDktNDIuODI1IDYzLTQyLjgyNSAxMDMuMzUzIDAgMjAuNzQ5IDMuMTQgMzcuNzgyIDkuNDE5IDUxLjEwNmwxMDQuMjEgMjIwLjk4NmMyLjg1NiA2LjI3NiA3LjI4MyAxMS4yMjUgMTMuMjc4IDE0LjgzOCA1Ljk5NiAzLjYxNyAxMi40MTkgNS40MjggMTkuMjczIDUuNDI4IDYuODUyIDAgMTMuMjc4LTEuODExIDE5LjI3My01LjQyOCA1Ljk5Ni0zLjYxMyAxMC41MTMtOC41NjIgMTMuNTU5LTE0LjgzOEwzNTYuMDIgMTk3LjI4NGM2LjI4Mi0xMy4zMjQgOS40MjQtMzAuMzU4IDkuNDI0LTUxLjEwNi4wMDUtNDAuMzUzLTE0LjI2OC03NC44LTQyLjgyMy0xMDMuMzUzem0tNTEuNjc5IDE1NS4wM2MtMTQuMjczIDE0LjI3Mi0zMS40OTcgMjEuNDExLTUxLjY3NCAyMS40MTFzLTM3LjQwMS03LjEzOS01MS42NzgtMjEuNDExYy0xNC4yNzUtMTQuMjc3LTIxLjQxNC0zMS41MDEtMjEuNDE0LTUxLjY3OCAwLTIwLjE3NSA3LjEzOS0zNy40MDIgMjEuNDE0LTUxLjY3NSAxNC4yNzctMTQuMjc1IDMxLjUwNC0yMS40MTQgNTEuNjc4LTIxLjQxNCAyMC4xNzcgMCAzNy40MDEgNy4xMzkgNTEuNjc0IDIxLjQxNCAxNC4yNzQgMTQuMjcyIDIxLjQxMyAzMS41IDIxLjQxMyA1MS42NzUgMCAyMC4xNzUtNy4xMzggMzcuMzk4LTIxLjQxMyA1MS42Nzh6Ii8+PC9zdmc+" alt="rr"
                                    className="EnquiryImg" />
                                    626 Model Town 1, Delhi 9
                                </p>
                                <p style={ this.props.isDark ? {color: "white"} : null } className="businessLocation">
                                    <img style={ this.props.isDark ? {filter: "brightness(0) invert(1)"} : null } src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNHB4IiBoZWlnaHQ9IjI0cHgiIHZpZXdCb3g9IjAgMCA1NzguMTA2IDU3OC4xMDYiPjxwYXRoIGQ9Ik0zMjIuNjIxIDQyLjgyNUMyOTQuMDczIDE0LjI3MiAyNTkuNjE5IDAgMjE5LjI2OCAwYy00MC4zNTMgMC03NC44MDMgMTQuMjc1LTEwMy4zNTMgNDIuODI1LTI4LjU0OSAyOC41NDktNDIuODI1IDYzLTQyLjgyNSAxMDMuMzUzIDAgMjAuNzQ5IDMuMTQgMzcuNzgyIDkuNDE5IDUxLjEwNmwxMDQuMjEgMjIwLjk4NmMyLjg1NiA2LjI3NiA3LjI4MyAxMS4yMjUgMTMuMjc4IDE0LjgzOCA1Ljk5NiAzLjYxNyAxMi40MTkgNS40MjggMTkuMjczIDUuNDI4IDYuODUyIDAgMTMuMjc4LTEuODExIDE5LjI3My01LjQyOCA1Ljk5Ni0zLjYxMyAxMC41MTMtOC41NjIgMTMuNTU5LTE0LjgzOEwzNTYuMDIgMTk3LjI4NGM2LjI4Mi0xMy4zMjQgOS40MjQtMzAuMzU4IDkuNDI0LTUxLjEwNi4wMDUtNDAuMzUzLTE0LjI2OC03NC44LTQyLjgyMy0xMDMuMzUzem0tNTEuNjc5IDE1NS4wM2MtMTQuMjczIDE0LjI3Mi0zMS40OTcgMjEuNDExLTUxLjY3NCAyMS40MTFzLTM3LjQwMS03LjEzOS01MS42NzgtMjEuNDExYy0xNC4yNzUtMTQuMjc3LTIxLjQxNC0zMS41MDEtMjEuNDE0LTUxLjY3OCAwLTIwLjE3NSA3LjEzOS0zNy40MDIgMjEuNDE0LTUxLjY3NSAxNC4yNzctMTQuMjc1IDMxLjUwNC0yMS40MTQgNTEuNjc4LTIxLjQxNCAyMC4xNzcgMCAzNy40MDEgNy4xMzkgNTEuNjc0IDIxLjQxNCAxNC4yNzQgMTQuMjcyIDIxLjQxMyAzMS41IDIxLjQxMyA1MS42NzUgMCAyMC4xNzUtNy4xMzggMzcuMzk4LTIxLjQxMyA1MS42Nzh6Ii8+PC9zdmc+" alt="rr"
                                    className="EnquiryImg" />
                                    Somewhere in North Campus, University of Delhi
                                </p>
                            </div>
                        </div>
                        <div className="aboutsetupimg">
                            <a href="https://www.twitter.com/lifeofakshy" target="_blank" rel="noopener noreferrer">
                                <div className="imgWrapper" style={{ position:"relative",overflow:"hidden" }}>
                                    <div aria-hidden="true" style={{ width:"100%",paddingBottom: "56.0156%" }}></div>
                                        <picture>
                                            <img className="mainimg" sizes="(max-width: 630px) 100vw, 630px" src={setupimg} alt="Uboux Logo" loading="lazy" style={{ position:"absolute",top:"0px",left:"0px",width:"100%",height:"100%",objectFit:"cover",objectPosition:"center center",opacity:"1",transition:"opacity 500ms ease 0s" }}></img>
                                        </picture>
                                </div>
                            </a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/lifeofakshy" className="aboutseemore">See more on Twitter</a>
                        </div>
                    </div>
                    <div className="aboutcontact">
                        <h2 style={ this.props.isDark ? {color: "white"} : null } className="abouth2">Or somewhere else on the web</h2>
                        <div className="contactlinks">
                            <div className="contactlogo">
                                <a style={ this.props.isDark ? {color: "white"} : null } target="_blank" rel="noopener noreferrer" href="https://www.github.com/akshaykalucha3">
                                    <img style={ this.props.isDark ? {filter: "brightness(0) invert(1)"} : null } src={github} alt="" />
                                    Github
                                </a>
                            </div>
                            <div className="contactlogo">
                                <a style={ this.props.isDark ? {color: "white"} : null } target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/akshaykalucha/">
                                    <img style={ this.props.isDark ? {filter: "brightness(0) invert(1)"} : null } src={linkedin} alt="" />
                                    Linkedin
                                </a>
                            </div>
                            <div className="contactlogo">
                                <a style={ this.props.isDark ? {color: "white"} : null } target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/lifeofakshy">
                                    <img style={ this.props.isDark ? {filter: "brightness(0) invert(1)"} : null } src={instagram} alt="" />
                                    Instagram
                                </a>
                            </div>
                            <div className="contactlogo">
                                <a style={ this.props.isDark ? {color: "white"} : null } target="_blank" rel="noopener noreferrer" href="https://www.twitter.com/lifeofakshy">
                                    <img style={ this.props.isDark ? {filter: "brightness(0) invert(1)"} : null } src={twitter} alt="" />
                                    Twitter
                                </a>
                            </div>
                            <div className="contactlogo">
                                <a style={ this.props.isDark ? {color: "white"} : null } target="_blank" rel="noopener noreferrer" href="https://www.snapchat.com/akshaykalucha3">
                                    <img style={ this.props.isDark ? {filter: "brightness(0) invert(1)"} : null } src={unsplash} alt="" />
                                    Snapchat
                                </a>
                            </div>
                        </div>
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


export default connect(mapStateToProps)(About);