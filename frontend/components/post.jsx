var React = require('react');
var Comments = require('./comments');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  redirectUser: function(e) {
    var userId = this.props.post.user.id;
    var url = "/users/"+userId;
    hashHistory.push(url);
  },

  render: function(){
    var post = this.props.post;
    return(
      <div className="individual-post">

        <div className="post-author">
          <span className="user-link" onClick={this.redirectUser}>{post.user.username}</span>
        </div>
        <img className="index-photos" src={post.image_url}/>
        <Comments post={post}/>
      </div>
    );
  }
});
