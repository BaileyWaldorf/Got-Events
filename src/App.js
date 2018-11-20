import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login'                  //gud
import CreateEvents from './components/CreateEvents'
import Register from './components/Register'
import Event from './components/Event'
import JoinRSO from './components/JoinRSO.js'
import ProfilePage from './components/ProfilePage.js'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MainPage: false,
            LoginPage: true,
            RegisterPage: false
        }
    }


    render() {
        return (
            <div className="App">
                <Main></Main>
            </div>
        );
    }
}

export default App;
