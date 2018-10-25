import React, {Component} from 'react';

export default class RSOs extends Component {
    constructor(props) {
        super(props);
        this.state = {
            RSOs: []
        };

        fetch('http://localhost:3001/RSOs')
        .then(response => response.json())
        .then(response => (this.setState({RSOs: response}, () => {console.log(this.state.RSOs)})))
    }

    render() {
        return (
            <div>
                Hello World
                <ul>
                    {this.state.RSOs.map(RSO => <ul key={RSO.RSO_ID}>
                        <h2>{RSO.NAME}</h2>
                        <p>{RSO.DESCRIPTION}</p>
                    </ul>)}
                </ul>
            </div>
        );
    }
}
