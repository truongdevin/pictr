var React = require('react');

module.exports = React.createClass({
  render: function(){
    var post = this.props.post;
    var comments = post.comments.map(function(comment){
      return <div key={comment.id}>{comment.body}</div>;
    });
    return(
      <div className="individual-post">
        <h3>{post.user.username}</h3>
        <img className="index-photos" src={post.image_url}/>
        {comments}
      </div>
    );
  }
});
