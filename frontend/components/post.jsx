var React = require('react');

module.exports = React.createClass({
  render: function(){
    var post = this.props.post;
    return(
      <div className="individual-post">
        <h3>{post.user.username}</h3>
        <img className="index-photos" src={post.image_url}/>
        <div>Comments go Here</div>
      </div>
    );
  }
});
