import React, { Component } from 'react';
import Screen from './src/navigations/screen';
import { ToastProvider } from 'react-native-toast-notifications';


export default class App extends Component {
    render() {
        return ( 
            <ToastProvider>
            <Screen />
            </ToastProvider>
        );
    }
}
