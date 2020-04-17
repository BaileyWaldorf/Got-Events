import React from 'react';

const EventInfoHeader = (props) => (
    <div className="event-info-header">
        {props.event === undefined
            ? null
            :   <div>
                    <h2>Event Info</h2>
                    <h3 style={{textAlign: "left"}}>{props.event.name}</h3>
                    <h4 style={{textAlign: "left"}}>{props.event.description}</h4>
                    <h5 style={{textAlign: "left"}}>Location: {props.event.location}</h5>
                    <h5 style={{textAlign: "left"}}>Date: {props.event.event_time.slice(0, 10)}</h5>
                    <h5 style={{textAlign: "left"}}>Rating: {props.event.rating} stars</h5>
                    <hr />
                    <h2>Contact Info</h2>
                    <p style={{textAlign: "left"}}>Email: {props.event.contact_email}</p>
                    <p style={{textAlign: "left"}}>Number: {props.event.contact_num}</p>
                </div>
        }
    </div>
);

export default EventInfoHeader;
