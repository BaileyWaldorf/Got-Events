import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Router from './Router';
import { Redirect } from 'react-router';
import Login from './components/Login'                  //gud
import CreateEvents from './components/CreateEvents'
import Register from './components/Register'
import Event from './components/Event'
import JoinRSO from './components/JoinRSO.js'


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

    // render() {
        // return (
        //     <div className="App">
        //         <Header/>
        //         <Router />
        //         <div eventname="name" style={{marginLeft:"50%"}}>Event Name: Spirit Splash</div>
        //         <div style={{marginLeft:"50%"}}>Location: Reflection Pond </div>
        //         <div style={{marginLeft:"50%"}}>Date: November 9th 2018</div>
        //         <div style={{marginLeft:"50%"}}>Time: 1:00 pm</div>
        //         <div style={{marginLeft:"50%"}}>Rating: 5.0/5.0</div>
        //         <div style={{marginLeft:"50%"}}>Description: Come to the Reflection Pond for the famous Spirit Splash!</div>
        //         <div style={{marginLeft:"50%"}}>There is music, splashing, water, a fountain, and best of all, RUBBER DUCKIES!</div>


        //     </div>
        // );


    //     if (this.state.RegisterPage === true) {
    //         return (
    //             <div>
    //                 <Redirect push to="/Register"></Redirect>
    //                 <Register ></Register>
    //             </div>
    //         );
    //     }
    //
    //     if (this.state.LoginPage === true) {
    //         return (
    //             <div>
    //                 <Redirect push to="/Login"></Redirect>
    //                 <Login linkRegister={this.GoToRegister}></Login>
    //             </div>
    //         );
    //     }
    // }

     render() {
         return (
             <Register></Register>
         );
     }
}

export default App;
