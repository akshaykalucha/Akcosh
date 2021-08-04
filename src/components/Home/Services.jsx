import React, { Component } from 'react';
import './services.css';
import { MyServices } from './Content';

class Services extends Component {
    render() { 
        return ( 
            <div className="services">
                <div className="servicesContent">
                    <h2>Services</h2>
                    <div className="servicesdiv">
                        {MyServices.map((content, key) => {
                            return <div className="servicesCard" key={key}>
                                <div className="servicesimg"><img src={content.img} alt={content.heading} /></div>
                                <h4 className="servicesheading">{content.heading}</h4>
                                <p>{content.desc}</p>
                            </div>
                        })}
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Services;