import React, {Component} from 'react';

export default class Comments extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newComment: ''
        }
    }

    onEditClick = (comment) => {
        console.log("dont have that implimented yet")
    }

    onDeleteClick = (comment) => {
        fetch('http://localhost:3001/delete-comment', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: comment.username,
            event: comment.event,
            comment: comment.comment
          }),
        });
    }

    submitComment = () => {
        var username = this.props.comment
        fetch('http://localhost:3001/create-comment', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username: this.props.username,
            comment: this.state.newComment,
            event: this.props.event.id
          }),
        });
    }

    handleCommentInput = (event) => {
        this.setState({newComment: event.target.value});
    }

    render() {
        return (
            <div style={{marginTop: '20px', marginBottom: '20px'}}>
                <h2>Comments</h2>
                {this.props.comments.map((comment, index) =>
                    <div class="comment">
                        {comment.username} says: {comment.comment}{"  "}
                        <button onClick={() => {this.onEditClick(comment)}}>Edit</button>
                        <button onClick={() => {this.onDeleteClick(comment)}}>Delete</button>
                    </div>)
                }
                <input class="LoginInput" onChange={this.handleCommentInput} placeholder="Add a comment..."></input>
                <button onClick={() => {this.submitComment()}}>Add Comment</button>
            </div>
        )
    }
}
