import React, {Component} from 'react';

export default class Comments extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("recieved comments: ", this.props.comments)
        return (
            <div style={{marginTop: '550px'}}>
                <h2>Comments</h2>
                {this.props.comments.map((comment, index) =>
                    <div class="comment">
                        {comment.comment}{"  "}
                        <button>Edit</button>
                        <button>Delete</button>
                    </div>)
                }
            </div>
        )
    }
}
