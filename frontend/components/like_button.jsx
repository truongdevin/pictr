var React = require('react');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({

  handleLike: function(e){
    var data = {
      user_id: JSON.parse(localStorage.getItem('currentUser')).id,
      post_id: this.props.post.id
    };
    ClientActions.createLike(data);
  },

  handleUnlike: function(e){
    var self = this;
    var post = this.props.post;
    var likeId;
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));

    post.likes.forEach(function(like) {
      if (like.user_id === currentUser.id) {
        likeId = like.id;
      }
    });

    ClientActions.deleteLike(likeId);
  },

  render: function() {
    var self = this;
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var post = this.props.post;

    var likeButton = <div onClick={this.handleLike}>Like</div>;

    post.likes.forEach(function(like) {
      if (like.user_id === currentUser.id) {
        likeButton = <div onClick={self.handleUnlike}>Unlike</div>;
      }
    });

    return <div className="like-container">{likeButton}</div>;
  }
});
