import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MyEventsContainer from './containers/MyEventsContainer';
// import Login from './components/Login';
// import Register from './components/Register';

const Router = () => (
    <main>
        <Switch>
            <Route exact path='/' component={MyEventsContainer}/>
            {/* <Route path='/login' component={Login}/>
            <Route path='/register' component={Register}/> */}
        </Switch>
    </main>
)

export default Router;
