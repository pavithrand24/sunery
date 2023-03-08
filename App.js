import React, { Component } from 'react';
import Screen from './src/navigations/screen';
import { ToastProvider } from 'react-native-toast-notifications';
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';


class App extends Component {
    render() {
        return ( 
            <ToastProvider>
            <Screen />
            </ToastProvider>
        );
    }
}

export default gestureHandlerRootHOC(App);