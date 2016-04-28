var React = require('react');
var ClientActions = require('../actions/client_actions');

module.exports = React.createClass({

  deleteComment: function (e) {
    e.preventDefault();
    ClientActions.deleteComment(this.props.comment.id);
  },

  render: function () {
    var comment = this.props.comment;
    var deleteButton = "";

    if (comment.user.username === JSON.parse(localStorage.getItem('currentUser')).username) {
      deleteButton = <button className="delete-button" onClick={this.deleteComment}>x</button>;
    }

    return (
      <div className="comment-and-delete">
        <div className="comment-single">{comment.user.username}: {comment.body}</div>
        {deleteButton}
      </div>
    );
  }
});
