import React, { Component } from 'react';
import './software.css';
import { SoftwareTable } from '../Home/Content';
import { Tableheading } from '../Home/Content';
import { webArchitecture } from '../Home/Content';
import { ServicesHeading } from '../Home/Content';
import { SoftwareServices } from '../Home/Content';
import {connect} from 'react-redux';


class Software extends Component {
    render() { 
        return ( 
            <div style={ this.props.isDark ? {backgroundColor: "#212121", color:"white"} : null } className="software">
                <div className="mysoftwareTable">
                    <h1>Software Repository</h1>
                    <div className="softwareTable">
                        <table className="softwareTab">
                            <thead>
                                <tr>
                                    {Tableheading.map((data, key) => {
                                        return <th key={key}>{data}</th>
                                    })}
                                </tr>
                            </thead>
                            <tbody>
                                {SoftwareTable.map((data, key) => {
                                    return <tr  key={key}>
                                                <td style={ this.props.isDark ? {color:"white"} : null }>{data.title}</td>
                                                <td style={ this.props.isDark ? {color:"white"} : null }>{data.description}</td>
                                                <td style={ this.props.isDark ? {color:"white"} : null }>{data.language}</td>
                                                <td style={ this.props.isDark ? {color:"white"} : null }>{data.date}</td>
                                                <td style={ this.props.isDark ? {color:"white"} : null }>{data.stars}</td>
                                                <td style={ this.props.isDark ? {color:"white"} : null }>{data.updates}</td>
                                            </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div style={ this.props.isDark ? {backgroundColor: "#2b2a2a", color:"white"} : null } className="softwareSection">
                    <div className="webarch">
                        <div className="softwareIntro">
                            <h2>Technology Stack</h2>
                            <p>MY WEBSITE ARCHITECTURE</p>
                        </div>
                        <div className="websiteArchitecture">
                                {webArchitecture.map((data, key) => {
                                    return <div className="Archcontent" key={key}>
                                        <h3>{data.heading}</h3>
                                        <sub>{data.sub}</sub>
                                        <ul>
                                            {data.list.map((listContent, i) => {
                                                return <li key={i}>{listContent}</li>
                                            })}
                                        </ul>
                                    </div>
                                })}
                        </div>
                    </div>
                </div>
                <div className="softwareservices">
                    <h2>Services</h2>
                    <table>
                        <thead>
                            <tr>
                                {ServicesHeading.map((data, key) => {
                                    return <th key={key}>{data}</th>
                                })}
                            </tr>
                        </thead>
                        <tbody>
                            {SoftwareServices.map((data, key) => {
                                return <tr key={key}>
                                        <td style={ this.props.isDark ? {color:"white"} : null }>{data.Name}</td>
                                        <td style={ this.props.isDark ? {color:"white"} : null }>{data.Endpoint}</td>
                                        <td style={ this.props.isDark ? {color:"white"} : null }>{data.Language}</td>
                                        <td style={ this.props.isDark ? {color:"white"} : null }>{data.Description}</td>
                                    </tr>
                            })}
                        </tbody>
                    </table>
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


export default connect(mapStateToProps)(Software);