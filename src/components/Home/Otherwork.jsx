import React, { Component } from 'react';
import './otherwork.css';

class Otherwork extends Component {
    render() { 
        return ( 
            <div className="otherwork">
                <div className="otherworkContent">
                    <h2 className="My__Work-h1">My Work</h2>
                    <p className="My__Work-p">I was never the best at school or academics, I’m just a super curious guy. 
                    I exists to share these ideas and theories that interest me. I spend a lot
                    of time building software and coding, but there’s also a lot more to it. I’ve 
                    been working on algorithms to document the logic, reasoning, and problems encountered 
                    during the process of learning engineering. A combination of innovation and storytelling 
                    learning new things and gaining experience in field of computer science.</p>
                    <div className="mywork__workdone">
                        <div className="workdone">
                            <h3>Software Development</h3>
                            <ul className="work-list">
                                <li>Java/C# Automation. CPU bound business logic</li>
                                <li>Low level/embedded IoT programming</li>
                                <li>Cloud computing, microservices, APIs, full stack web apps</li>                    
                            </ul>
                        </div>
                        <div className="workdone">
                            <h3>Graphic Designing</h3>
                            <ul className="work-list">
                                <li>Graphic, templates designs</li>
                                <li>Business model template, software drafts</li>
                                <li>documented and easy to access as a npm module</li>
                                <li>Colors, components, typography etc... all in one place,</li>
                            </ul>
                        </div>
                        <div className="workdone">
                            <h3>Full Stack Development</h3>
                            <ul className="work-list">
                                <li>Get your mvp up & running in less than a week built with the MERN or JAM stack</li>
                                <li>ask your early users for feedback before scaling it.</li>
                                <li>Cloud computing, microservices, APIs, full stack web apps</li>
                            </ul>
                        </div>
                        <div className="workdone">
                            <h3>Open Source</h3>
                            <ul className="work-list">
                                <li>love open source and micro startups</li>
                                <li>Contribute in Agile based, test driven, and unit testing development</li>
                            </ul>
                        </div>
                    </div>
                </div> 
            </div>
        );
    }
}
 
export default Otherwork;