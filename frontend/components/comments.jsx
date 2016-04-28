var React = require('react');
var CommentForm = require('./comment_form');

module.exports = React.createClass({

  render: function () {
    var post = this.props.post;
    var comments = post.comments.map(function(comment){
      return (
        <div className="comment-single" key={comment.id}>{comment.user.username}: {comment.body}</div>
      );
    });
    return (
      <div>
        <div className="comments-box">{comments}</div>
        <CommentForm post_id={post.id}/>
      </div>
    );
  }
});
