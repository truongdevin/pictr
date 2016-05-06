var React = require('react');
var ClientActions = require('../actions/client_actions.js');
var UserStore = require('../stores/user_store');

module.exports = React.createClass({

  getInitialState: function () {
    return {
      followerId: JSON.parse(localStorage.getItem('currentUser')).id,
      currentUser: UserStore.find(JSON.parse(localStorage.getItem('currentUser')).id)
    };
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this.getUser);
    if (UserStore.all().length === 0) {
      ClientActions.fetchUsers();
    }
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  getUser: function () {
    this.setState({ currentUser: UserStore.find(this.state.followerId) });
  },

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

    this.state.currentUser.followed_users.forEach(function(followed_user){
      if (followed_user.followed_id === self.props.user.id) {
        relationshipId = followed_user.id;
      }
    });

    ClientActions.deleteRelationship(relationshipId);
  },

  render: function() {
    var self = this;
    var followButton = <div className="follow-button" onClick={this.handleFollow}>Follow</div>;
    if (this.state.currentUser) {
      this.state.currentUser.followed_users.forEach(function(followed_user){
        if (followed_user.followed_id === self.props.user.id) {
          followButton = <div className="unfollow-button" onClick={self.handleUnfollow}>Followed</div>;
          }
        });

        if (this.state.followerId === self.props.user.id) {
          followButton = <div/>;
        }

        return <div>{followButton}</div>;
    } else {
      return <div/>;
    }
  }
});
