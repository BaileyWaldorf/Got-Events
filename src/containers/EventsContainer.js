import React, {Component} from 'react';
import Event from '../components/Event';
import EventInfoContainer from './EventInfoContainer';

const description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
const date = "April 20th, 2019"

export default class EventsContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            publicEvents: [
                {name: "Comedy Knight (Past due)", description: "Unfortunately we dont have anyone good this year, like Adam Devine last year. This year we have insert_name_here comedian! Come for good laughs!", date: "November 5th 2018"},
                {name: "Knights got talent", description: "Come to show off your special and unique talent, like singing, dancing, and much more! Tons of fun people will be there, sharing their talents too!", date: "November 7th 2018 "},
                {name: "Concert Knight", description: "A$AP Fergie will be here! You all know him of course! He has famous music, we swear!", date: "November 8th 2018"},
                {name: "Spirit Splash", description: "Come to the Reflection Pond for the famous Spirit Splash! There is music, splashing, water, a fountain, and best of all, RUBBER DUCKIES!", date: "November 9th 2018"},
                {name: "Fireworks extraveganza", description: "Awesome fireworks will be blown up in the sky! It is better than Magic Kingdom's fireworks show!", date: "November 9th 2018"},
                {name: "Football game", description: "UCF vs. NAVY. Kick off at 12:03 pm. Be there or be sqaure!", date: "November 10th 2018"},
                {name: "Event Title 7", description: description, date: date},
                {name: "Event Title 8", description: description, date: date},
                {name: "Event Title 9", description: description, date: date},
            ],
            privateEvents: [],
            RSOEvents: [],
            showPublicEvents: true,
            showPrivateEvents: false,
            showRSOEvents: false,
        };
    }

    render() {
        return (
            <div className="events-container">
                {this.state.showPublicEvents
                    ? this.state.publicEvents.map(event =>
                    <Event key={event.name} event={event} click={() => {console.log("hello")}} />
                    )
                    : null
                }

                {this.state.showPrivateEvents
                    ? this.state.privateEvents.map(event =>
                    <Event key={event.name} event={event} click={this.showEventInfo(event)} />
                    )
                    : null
                }

                {this.state.showRSOEvents
                    ? this.state.RSOEvents.map(event =>
                    <Event key={event.name} event={event} click={this.showEventInfo(event)} />
                    )
                    : null
                }
            </div>
        );
    }
}
