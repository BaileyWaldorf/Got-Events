import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import CreateEvents from './CreateEvents';
import MyEventsContainer from '../containers/MyEventsContainer';
import ProfilePage from './ProfilePage';

const Main = () => (
        <Switch>
            <Route exact path='/' component={Login}></Route>
            <Route path='/register' component={Register}></Route>
            <Route path='/createEvents' component={CreateEvents}></Route>
            <Route path='/myEvents' component={MyEventsContainer}></Route>
            <Route path='/profile' component={ProfilePage}></Route>
        </Switch>
)

export default Main;