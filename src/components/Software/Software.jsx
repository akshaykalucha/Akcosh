import React, { Component } from 'react';
import './software.css';
import { SoftwareTable } from '../Home/Content';
import { Tableheading } from '../Home/Content';
import { webArchitecture } from '../Home/Content';
import { ServicesHeading } from '../Home/Content';
import { SoftwareServices } from '../Home/Content';
import { connect } from 'react-redux';


class Software extends Component {
    render() { 
        return ( 
            <div className="software">
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
                                    return <tr key={key}>
                                                <td>{data.title}</td>
                                                <td>{data.description}</td>
                                                <td>{data.language}</td>
                                                <td>{data.date}</td>
                                                <td>{data.stars}</td>
                                                <td>{data.updates}</td>
                                            </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="softwareSection">
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
                                        <td>{data.Name}</td>
                                        <td>{data.Endpoint}</td>
                                        <td>{data.Language}</td>
                                        <td>{data.Description}</td>
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
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {

    }
}

export default  Software;