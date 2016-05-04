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

    var likeButton = <i id="unfilled" onClick={this.handleLike} className="fa fa-birthday-cake fa-2x"></i>;

    post.likes.forEach(function(like) {
      if (like.user_id === currentUser.id) {
        likeButton = <i id="filled" onClick={self.handleUnlike} className="fa fa-birthday-cake fa-2x"></i>;
      }
    });

    return <div className="like-container">{likeButton}</div>;
  }
});
