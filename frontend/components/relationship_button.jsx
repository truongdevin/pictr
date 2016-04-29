var React = require('react');

module.exports = React.createClass({

  handleFollow: function(e){
    console.log("Followed!");
  },

  handleUnfollow: function(e){
    console.log("Unfollowed!");
  },

  render: function() {
    var user = this.props.user;
    // debugger;
    var relationshipButton = <span onClick={this.handleFollow}>Follow</span>;
    user.followers.forEach(function(follow) {
      if (follow.username === JSON.parse(localStorage.getItem('currentUser')).username) {
        relationshipButton = <span onClick={this.handleUnfollow}>FUCK</span>;
      }
    });
    return <span>{relationshipButton}</span>;
  }
});
