var React = require('react');
var CommentForm = require('./comment_form');
var IndividualComment = require('./individual_comment');

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
        <div className="comments-box">{comments}</div>
        <CommentForm post_id={post.id}/>
      </div>
    );
  }
});
