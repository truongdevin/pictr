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

    currentUser.relationships.forEach(function(relationship){
      if (relationship.followed_id === self.props.user.id) {
        relationshipId = relationship.id;
      }
    });

    ClientActions.deleteRelationship(relationshipId);
  },

  render: function() {
    var user = this.props.user;
    var self = this;
    var followerId = JSON.parse(localStorage.getItem('currentUser')).id;
    var currentUser = UserStore.find(followerId);
    var relationshipButton = <div className="follow-button" onClick={this.handleFollow}>Follow</div>;

    currentUser.relationships.forEach(function(relationship){
      if (relationship.followed_id === user.id) {
        relationshipButton = <div className="follow-button" onClick={self.handleUnfollow}>Unfollow</div>;
      }
    });

    return <div>{relationshipButton}</div>;
  }
});
