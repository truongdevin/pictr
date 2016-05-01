var React = require('react');
var Comments = require('./comments');

module.exports = React.createClass({
  render: function(){
    var post = this.props.post;
    return(
      <div className="individual-post">
        <div className="post-author">{post.user.username}</div>
        <img className="index-photos" src={post.image_url}/>
        <Comments post={post}/>
      </div>
    );
  }
});
