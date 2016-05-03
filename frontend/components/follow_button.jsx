var React = require('react');
var ClientActions = require('../actions/client_actions.js');
var UserStore = require('../stores/user_store');

module.exports = React.createClass({

  handleFollow: function(e){
    var data = {
      follower_id: JSON.parse(localStorage.getItem('currentUser')).id,
      followed_id: this.props.user.id
    };
    ClientActions.createRelationship(data);
  },

  handleUnfollow: function(e){
    var self = this;
    var relationshipId;
    var followerId = JSON.parse(localStorage.getItem('currentUser')).id;
    var currentUser = UserStore.find(followerId);

    currentUser.followed_users.forEach(function(followed_user){
      if (followed_user.followed_id === self.props.user.id) {
        relationshipId = followed_user.id;
      }
    });

    ClientActions.deleteRelationship(relationshipId);
  },

  render: function() {
    var user = this.props.user;
    var self = this;
    var followerId = JSON.parse(localStorage.getItem('currentUser')).id;
    var currentUser = UserStore.find(followerId);
    var followButton = <div className="follow-button" onClick={this.handleFollow}>Follow</div>;

    currentUser.followed_users.forEach(function(followed_user){
      if (followed_user.followed_id === user.id) {
        followButton = <div className="unfollow-button" onClick={self.handleUnfollow}>Followed</div>;
      }
    });

    return <div>{followButton}</div>;
  }
});
