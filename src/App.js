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
                        <Route exact path="/" render={(props) => (
                            <MyEventsContainer {...props} state={this.state} />
                        )} />
                        <Route path="/my-events" render={(props) => (
                            <MyEventsContainer {...props} state={this.state} />
                        )} />
                        <Route path="/login" render={(props) => (
                            <Login {...props} handleLogin={this.handleLogin} />
                        )} />
                        <Route path="/register" render={(props) => (
                            <Register {...props} state={this.state} />
                        )} />
                        <Route path="/profile" render={(props) => (
                            <ProfilePage {...props} state={this.state} />
                        )} />
                        <Route path="/join-rso" render={(props) => (
                            <JoinRSO {...props} state={this.state} />
                        )} />
                        <Route path="/create-event" render={(props) => (
                            <CreateEvent {...props} state={this.state} />
                        )} />
                    </Switch>
                </main>
            </div>
        );
    }
}

export default App;
