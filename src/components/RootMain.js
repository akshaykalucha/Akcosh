import React, { Component } from 'react';
import Main from './Home/Main';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import {connect} from 'react-redux'


export class RootMain extends Component {
    render() {
        return(
                <Provider store={store}>
                    <div style={ this.props.isDark ? {backgroundColor:"#212121"} : null }>
                    <Main />
                    </div>
                </Provider>
            )
    }
}

const mapStateToProps = state => {
    return{
        isDark: state.WebsiteInterface.isDark
    }
}


export default connect(mapStateToProps)(RootMain);
