import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import { Switch, Route } from 'react-router-dom';
import MyEventsContainer from './containers/MyEventsContainer';
import Login from'./components/Login';
import Register from './components/Register';
import ProfilePage from './components/ProfilePage';
import JoinRSO from './components/JoinRSO';
import CreateEvent from './components/CreateEvent';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            authenticated: false,
            user: []
        };
    }

    handleLogin = (user) => {
        console.log("user has logged in!")
        this.setState({authenticated: true, user: user})
    }

    handleLogout = () => {
        console.log("user has logged out!");
        this.setState({authenticated: false})
    }

    render() {
        return (
            <div className="App">
                <Header authenticated={this.state.authenticated} handleLogin={this.handleLogin} handleLogout={this.handleLogout}/>
                <main>
                    <Switch>
                        <Route path="/" render={(props) => (
                            <MyEventsContainer {...props} state={this.state} />
                        )} />
                        <Route path="/my-events" render={(props) => (
                            <MyEventsContainer {...props} state={this.state} />
                        )} />
                        <Route exact path='/my-events' component={MyEventsContainer}/>
                        <Route path='/register' component={Register}/>
                        <Route path='/profile' component={ProfilePage}/>
                        <Route path='/join-rso' component={JoinRSO}/>
                        <Route path='/create-event' component={CreateEvent}/>
                        <Route path="/login" render={(props) => (
                            <Login {...props} handleLogin={this.handleLogin} />
                        )} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
