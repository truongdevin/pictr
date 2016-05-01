var React = require('react');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({

  handleLike: function(e){
    console.log("Liked!");
    var data = {
      user_id: JSON.parse(localStorage.getItem('currentUser')).id,
      post_id: this.props.post.id
    };
    ClientActions.createLike(data);
  },

  handleUnlike: function(e){
    console.log("Unliked!");
    var self = this;
    var likeId;
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    currentUser.likes.forEach(function(like){
      if (like.post_id === self.props.post.id) {
        likeId = like.id;
      }
    });
    ClientActions.deleteLike(likeId);
  },

  render: function() {
    var self = this;
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var likeButton = <div onClick={this.handleLike}>Like</div>;

    currentUser.likes.forEach(function(like){
      if (like.post_id === self.props.post.id) {
        likeButton = <div onClick={self.handleUnlike}>Unlike</div>;
      }
    });

    return <div className="like-container">{likeButton}</div>;
  }
});
