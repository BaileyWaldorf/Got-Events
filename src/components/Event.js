import React from 'react';

const Event = (props) => (
    <button className="eventCard" onClick={() => {props.selectEvent(props.index)}}>
        <div>
            <h4>
                {props.event.title.length > 80
                    ? <span style={{float: "left"}}>{props.event.title.slice(0, 80)}...</span>
                    : <span style={{float: "left"}}>{props.event.title}</span>}
                <span style={{float: "right"}}>{props.event.starts.slice(0, -15)}</span>
            </h4>
            <br /><br />
            <div style={{float: "left"}}>{props.event.location}</div>
            <p style={{float: "right"}}>Category: {props.event.category}</p>
        </div>
    </button>
);

export default Event;
