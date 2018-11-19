import React from 'react';

const EventInfoHeader = (props) => (
    <div className="event-info-header">
        <h3 style={{textAlign: "left"}}>{props.event.title}</h3>
        <h4 style={{textAlign: "left"}}>Starts: {props.event.starts.slice(0, -15)}</h4>
        <h4 style={{textAlign: "left"}}>Ends: {props.event.ends.slice(0, -15)}</h4>
        <br /><br />
        <p style={{textAlign: "left"}}  dangerouslySetInnerHTML={{__html:
        props.event.description}}></p>
    </div>
);

export default EventInfoHeader;
