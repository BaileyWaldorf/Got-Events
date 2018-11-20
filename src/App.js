import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import Login from './components/Login'                  //gud
import CreateEvents from './components/CreateEvents'
import Register from './components/Register'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            MainPage: false,
            LoginPage: true,
            RegisterPage: false
        }
    }

    GoToLogin = () => {
        this.setState({LoginPage: true, RegisterPage:false, MainPage:false})
    }

    GoToRegister = () => {
        this.setState({LoginPage: false, RegisterPage:true, MainPage:false})
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
