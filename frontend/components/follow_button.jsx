var React = require('react');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({

  handleFollow: function(e){
    console.log("Followed!");
    var data = {
      follower_id: JSON.parse(localStorage.getItem('currentUser')).id,
      followed_id: this.props.user.id
    };
    ClientActions.createRelationship(data);
  },

  handleUnfollow: function(e){
    console.log("Unfollowed!");
    var self = this;
    var relationshipId;
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
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
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var relationshipButton = <div onClick={this.handleFollow}>Follow</div>;

    currentUser.relationships.forEach(function(relationship){
      if (relationship.followed_id === user.id) {
        relationshipButton = <div onClick={self.handleUnfollow}>Unfollow</div>;
      }
    });

    return <div className="follow-button">{relationshipButton}</div>;
  }
});