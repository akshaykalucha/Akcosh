import React, { Component } from 'react';
import Intro from './Intro';
import MyWork from './Mywork';
import FeaturedWork from './FeaturedWork';
import Services from './Services';
import Otherwork from './Otherwork';
import PopularArticles from './PopularArticles';
import './indexpage.css';


export class Index extends Component{
    render() {
        return (
            <div className="index">
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

export default Index;