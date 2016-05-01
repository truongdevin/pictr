var React = require('react');
var CommentForm = require('./comment_form');
var IndividualComment = require('./individual_comment');
var LikeButton = require('./like_button');

module.exports = React.createClass({

  render: function () {
    var post = this.props.post;
    var comments = post.comments.map(function(comment){
      return (
        <IndividualComment key={comment.id} comment={comment}/>
      );
    });

    return (
      <div>
        <div className="likes">{this.props.post.likes.length} Likes!</div>
        <div className="comments-box">{comments}</div>
        <div className="comment-form-and-like-button">
          <LikeButton post={post}/>
          <CommentForm post_id={post.id}/>
        </div>
      </div>
    );
  }
});
