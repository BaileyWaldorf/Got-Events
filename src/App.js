import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Router from './Router';
import Login from './components/Login'
import CreateEvents from './components/CreateEvents'
import Register from './components/Register'


class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <Router />
                <div eventname="name" style={{marginLeft:"50%"}}>Event Name: Spirit Splash</div>
                <div style={{marginLeft:"50%"}}>Location: Reflection Pond </div>
                <div style={{marginLeft:"50%"}}>Date: November 9th 2018</div>
                <div style={{marginLeft:"50%"}}>Time: 1:00 pm</div>
                <div style={{marginLeft:"50%"}}>Rating: 5.0/5.0</div>
                <div style={{marginLeft:"50%"}}>Description: Come to the Reflection Pond for the famous Spirit Splash!</div>
                <div style={{marginLeft:"50%"}}>There is music, splashing, water, a fountain, and best of all, RUBBER DUCKIES!</div>
                
                
            </div>
        );
    }

    // render() {
    //     return (
    //         <Register></Register>
    //     );
    // }
}

export default App;
