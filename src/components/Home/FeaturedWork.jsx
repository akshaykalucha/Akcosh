import React, { Component } from 'react';
import './featuredwork.css';
import { sideProjs, SharedList } from './Content.js';

class FeaturedWork extends Component {
    render() {
        return ( 
            <div className="featuredwork">
                <h2 className="featuredheading">Featured work</h2>
                <div className="sideprojects">
                    <h4 className="sideProjectsheading">Side Projects</h4>
                    <div className="projectCards">
                        {sideProjs.map((data, key) => {
                            return <a target="_blank" rel="noopener noreferrer" key={key} href={data.link} className="cardAnchor">
                                <div className="card">
                                    <div className="cardHeading">
                                        <h3>{data.heading}</h3>
                                    </div>
                                    <div className="cardPic">
                                        <div className="imgdiv" aria-hidden="true"></div>
                                        <img className="mainimg" sizes="(max-width: 630px) 100vw, 630px" src={data.img} alt={data.heading} loading="lazy"></img>
                                    </div>
                                    <div className="cardDesc">
                                        <p>{data.desc}</p>
                                    </div>
                                </div>
                            </a>
                        })}
                    </div>
                </div>
                {SharedList.map((content, i) => {
                    return <div key={i} className="othershared">
                    <h4 className="othersharedHeading">{i===0 ? "Shared on Github" : "Shared on Twitter"}</h4>
                        <div className="othersharedcards">
                            {content.map((data, key) => {
                                if(key === 3){
                                    return <a target="_blank" rel="noopener noreferrer" className={i===0 ? "SvgLogo" : "SvgLogo twitterbg"} key={key} href={data.a}>
                                        <img className="sharedImg" src={data.img} alt={data.heading} />
                                        See more
                                    </a>
                                }else{
                                    return <a target="__blank" rel="noopener noreferrer" className="cardAnchor" key={key} href={data.link}>
                                    <div className="card">
                                        <div className="cardHeading">
                                            <h3>{data.heading}</h3>
                                        </div>
                                        <div className="cardImg">
                                            <div className="imgWrapper" style={{ position:"relative",overflow:"hidden" }}>
                                                <div aria-hidden="true" style={{ width:"100%",paddingBottom: "85%" }}></div>
                                                <picture>
                                                    <img className="mainimg" sizes="(max-width: 630px) 100vw, 630px" src={data.img} alt="Uboux Logo" loading="lazy" style={{ position:"absolute",height:"100%" }}></img>
                                                </picture>
                                            </div>
                                        </div>
                                        <div className="cardDesc">
                                            <p>{data.desc}</p>
                                        </div>
                                    </div>
                                </a>
                                }
                            })}
                        </div>
                    </div>
                })}
            </div>
        );
    }
}
 
export default FeaturedWork;