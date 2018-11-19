import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Router from './Router';
import Login from './components/Login'
import CreateEvents from './components/CreateEvents'
import Register from './components/Register'
import Event from './components/Event'
import JoinRSO from './components/JoinRSO.js'


class App extends Component {


     render() {
         return (
             <JoinRSO></JoinRSO>
         );
     }
}

export default App;
