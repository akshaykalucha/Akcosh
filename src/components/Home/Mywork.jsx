import React, { Component } from 'react';
import skill1 from './icon1.svg';
import skill2 from './icon5.svg';
import skill3 from './icon4.svg';
import './mywork.css';
import { NavLink } from 'react-router-dom';


class MyWork extends Component {

    render() { 
        return ( 
            <div className="myskills">
                <div className="skillsection">
                    <h2>Skills</h2>
                    <div className="featured">
                        <div className="backendDev workimg">
                            <img src={skill1} alt="fullstack" />
                            <h4>Full stack development</h4>
                        </div>
                        <div className="UI/UX workimg">
                            <img src={skill2} alt="UI/UX dev" />
                            <h4>UI/UX Design</h4>
                        </div>
                        <div className="SoftwareProg workimg">
                            <img src={skill3} alt="backendDev" />
                            <h4>Software Programming</h4>
                        </div>
                    </div>
                    <div className="mytechstack">
                        <NavLink to="blog/the-tech-tools-I-use">See the tech tools I use</NavLink>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default MyWork;