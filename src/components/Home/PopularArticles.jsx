import React, { Component } from 'react';
import './populararticles.css';
import { MyArticles } from './Content'
import { NavLink } from 'react-router-dom';

class PopularArticles extends Component {
    render() { 
        return ( 
            <div className="populararticles">
                <h2 className="articlesheading">Popular articles</h2>
                <div className="articleContent">
                    {MyArticles.map((content, key) =>{
                        return <div key={key} className="articleCard">
                                    <div className="cardcontent">
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
                                            <h2 className="articlecardheading">{content.heading}</h2>
                                            <p className="articlecardp">{content.desc}</p>
                                            <div className="articlecardtags">
                                                {content.tags.map((tags, i) => {
                                                    return <NavLink className={tags} key={i} to="/blog/Why-you-should-move-to-the-new-Protocol-Buffers-instead-of-old-JSON">{tags}</NavLink>
                                                })}
                                            </div>
                                            <i className="articleCardItalics">
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
 
export default PopularArticles;