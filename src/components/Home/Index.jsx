import React, { Component } from 'react';
import Intro from './Intro';
import MyWork from './Mywork';
import FeaturedWork from './FeaturedWork';
import Services from './Services';
import Otherwork from './Otherwork';
import PopularArticles from './PopularArticles';
import './indexpage.css';
import {connect} from 'react-redux';


export class Index extends Component{
    render() {
        return (
            <div style={ this.props.isDark ? {backgroundColor: "#212121", color: "white"} : null } className="index">
                <Intro />
                <MyWork />
                <FeaturedWork />
                <Services />
                <Otherwork />
                <PopularArticles />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return{
        isDark: state.WebsiteInterface.isDark
    }
}


export default connect(mapStateToProps)(Index);
