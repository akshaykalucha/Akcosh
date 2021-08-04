import React, { Component } from 'react';
import './footer.css';
import FooterCard from './FooterCard';
import FooterMain from './FooterMain';

class Footer extends Component {
    render() { 
        return ( 
            <>
                <FooterCard />
                <FooterMain />
            </>
        );
    }
}
 
export default Footer;