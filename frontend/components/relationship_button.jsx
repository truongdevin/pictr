var React = require('react');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({

  getInitialState: function() {
    return {
      user: this.props.user
    };
  },

  handleFollow: function(e){
    console.log("Followed!");
    var data = {
      follower_id: JSON.parse(localStorage.getItem('currentUser')).id,
      followed_id: this.state.user.id
    };
    ClientActions.createRelationship(data);
  },

  componentWillReceiveProps: function(newProps) {
    // debugger;
    this.setState({user: newProps.user});
  },

  handleUnfollow: function(e){
    console.log("Unfollowed!");
    var self = this;
    var relationshipId;
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    currentUser.relationships.forEach(function(relationship){
      if (relationship.followed_id === self.state.user.id) {
        relationshipId = relationship.id;
      }
    });
    ClientActions.deleteRelationship(relationshipId);
  },

  render: function() {
    var user = this.state.user;
    var self = this;
    var relationshipButton = <span onClick={this.handleFollow}>Follow</span>;
    user.followers.forEach(function(follow) {
      if (follow.username === JSON.parse(localStorage.getItem('currentUser')).username) {
        relationshipButton = <span onClick={self.handleUnfollow}>Unfollow</span>;
      }
    });
    return <span>{relationshipButton}</span>;
  }
});
