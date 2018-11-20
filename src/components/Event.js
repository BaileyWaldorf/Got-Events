import React from 'react';

const Event = (props) => (
    <button className="eventCard" onClick={() => {props.selectEvent(props.index)}}>
        <div>
            <h4>
                <span style={{float: "left"}}>{props.event.name}</span>
                <span style={{float: "right"}}>Location: {props.event.location}</span>
            </h4>
            <br /><br />
            <p style={{float: "left"}}>{props.event.description.slice(0, 60)}</p>
            <p style={{float: "right"}}>University: {props.event.university_name}</p>
        </div>
    </button>
);

export default Event;
