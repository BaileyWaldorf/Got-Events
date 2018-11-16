import React, {Component} from 'react';

const Event = (props) => (
    <button className="eventCard" onClick={() => {props.selectEvent(props.index)}}>
        <h4>
            <span style={{float: "left"}}>{props.event.name}</span>
            <span style={{float: "right"}}>{props.event.date}</span>
        </h4>
        <br /><br />
        <p style={{textAlign: "left"}}>{props.event.description}</p>
    </button>
);

export default Event;
