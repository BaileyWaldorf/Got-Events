import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import RSOs from './containers/RSOs';
import EventsContainer from './containers/EventsContainer';

class App extends Component {

    render() {
        return (
            <div className="App">
                <Header/>
                <EventsContainer />
                {/* <EventInfoContainer /> */}
                <RSOs />
            </div>
        );
    }
}

export default App;
