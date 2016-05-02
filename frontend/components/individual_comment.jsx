var React = require('react');
var ClientActions = require('../actions/client_actions');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({

  deleteComment: function (e) {
    e.preventDefault();
    ClientActions.deleteComment(this.props.comment.id);
  },

  redirectUser: function(e) {
    var userId = this.props.comment.user.id;
    var url = "/users/"+userId;
    hashHistory.push(url);
  },

  render: function () {
    var comment = this.props.comment;
    var deleteButton = "";

    if (comment.user.username === JSON.parse(localStorage.getItem('currentUser')).username) {
      deleteButton = <button className="delete-button" onClick={this.deleteComment}>x</button>;
    }

    return (
      <div className="comment-and-delete">
        <div className="comment-single">
          <span className="user-link" onClick={this.redirectUser}>{comment.user.username}</span>
          : {comment.body}
        </div>
        {deleteButton}
      </div>
    );
  }
});
