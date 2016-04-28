var React = require('react');
var ClientActions = require('../actions/client_actions');

module.exports = React.createClass({

  deleteComment: function (e) {
    e.preventDefault();
    ClientActions.deleteComment(this.props.comment.id);
  },

  render: function () {
    var comment = this.props.comment;
    return (
      <div>
        <div className="comment-single">{comment.user.username}: {comment.body}</div>
        <button onClick={this.deleteComment}>Delete</button>
      </div>
    );
  }
});
