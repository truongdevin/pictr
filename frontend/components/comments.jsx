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
    
    var likes;
    switch (post.likes.length) {
      case (0):
        likes = "";
        break;
      case (1):
        likes = <div className="likes">{post.likes.length} like</div>;
        break;
      default:
        likes = <div className="likes">{post.likes.length} likes</div>;
        break;
    }

    return (
      <div className="comments-and-likes">
        {likes}
        <div className="comments-box">{comments}</div>
        <div className="comment-form-and-like-button">
          <LikeButton post={post}/>
          <CommentForm post_id={post.id}/>
        </div>
      </div>
    );
  }
});
