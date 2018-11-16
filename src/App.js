import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Router from './Router';
import Login from './components/Login'
class App extends Component {

    // render() {
    //     return (
    //         <div className="App">
    //             <Header/>
    //             <Router />
    //         </div>
    //     );
    // }

    render() {
        return (
            <Login></Login>
        );
    }
}

export default App;
