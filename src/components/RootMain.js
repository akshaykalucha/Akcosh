import React, { Component } from 'react';
import Main from './Home/Main';
import { Provider } from 'react-redux';
import { store } from './Store/store';


export class RootMain extends Component {
    render() {
        return(
                <Provider store={store}>
                    <Main />
                </Provider>
            )
    }
}

export default RootMain
