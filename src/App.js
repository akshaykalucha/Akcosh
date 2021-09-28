import React, { Component } from 'react';
import RootMain from './components/RootMain';
import {connect} from 'react-redux';

export class App extends Component {
    render() {
        return (
            <div style={ this.props.isDark ? {backgroundColor:"#212121"} : null }>
                <RootMain />
            </div>
        )
    }
}
const mapStateToProps = state => {
    return{
        isDark: state.WebsiteInterface.isDark
    }
}


export default connect(mapStateToProps)(App);