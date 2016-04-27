var React = require('react');

module.exports = React.createClass({
  render: function(){
    var post = this.props.post;
    return(
      <div>
        <h3>{post.user.username}</h3>
        {post.image_url}
        <div>Comments go Here</div>
      </div>
    );
  }
});
