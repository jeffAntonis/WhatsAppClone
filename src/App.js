import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import firebase from 'firebase';
import '@firebase/firestore'
import '@firebase/auth'

import ReduxThunk from "redux-thunk";

import Routes from './Routes';
//NÃO PRECISAVA COLOCAR O INDEX POIS ELE JÁ RECONHECIA 
import reducers from './reducers/index';

class App extends Component {

    componentWillMount(){
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyBOeTr0jshBip7hnUCpA51k5ZzWfPpA3w4",
            authDomain: "whatsapp-clone-a6d94.firebaseapp.com",
            databaseURL: "https://whatsapp-clone-a6d94.firebaseio.com",
            projectId: "whatsapp-clone-a6d94",
            storageBucket: "whatsapp-clone-a6d94.appspot.com",
            messagingSenderId: "964147973358"
        };
        firebase.initializeApp(config);
    }

    render(){
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Routes />   
            </Provider>
        );
    }    
}

export default App;