import React, { Component } from 'react';
import './populararticles.css';
import { MyArticles } from './Content'
import { NavLink } from 'react-router-dom';
import {connect} from 'react-redux';


class PopularArticles extends Component {
    render() { 
        return ( 
            <div className="populararticles">
                <h2 className="articlesheading">Popular articles</h2>
                <div className="articleContent">
                    {MyArticles.map((content, key) =>{
                        return <div key={key} className="articleCard">
                                    <div style={ this.props.isDark ? {backgroundColor: "#2b2a2a"} : null } className="cardcontent">
                                        <div className="articlecardimg">
                                            <NavLink to={`blog/${content.link}`}>
                                                <div className="articleimgwrapper" style={{ overflow:"hidden" }}>
                                                    <div aria-hidden="true" style={{ width:"100%" }}></div>
                                                    <picture>
                                                        <img className="articlemainimg" sizes="(max-width: 960px) 100vw, 960px" src={content.img} alt="Uboux Logo" loading="lazy"></img>
                                                    </picture>
                                                </div>
                                            </NavLink>
                                        </div>
                                        <div className="articlecarddesc">
                                            <h2 style={ this.props.isDark ? {color:"white"} : null } className="articlecardheading">{content.heading}</h2>
                                            <p style={ this.props.isDark ? {color:"white"} : null } className="articlecardp">{content.desc}</p>
                                            <div className="articlecardtags">
                                                {content.tags.map((tags, i) => {
                                                    return <NavLink className={tags} key={i} to="/blog/Why-you-should-move-to-the-new-Protocol-Buffers-instead-of-old-JSON">{tags}</NavLink>
                                                })}
                                            </div>
                                            <i style={ this.props.isDark ? {color:"white"} : null } className="articleCardItalics">
                                                {content.date}
                                                <span className="articleitalic">{content.time}</span>
                                            </i>
                                        </div>
                                    </div>
                                </div>
                    })}
                </div>
                <div className="articlebutton">
                    <button className="seemoreArticle">
                        <NavLink to="/blog/">See more</NavLink>
                    </button>
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


export default connect(mapStateToProps)(PopularArticles);