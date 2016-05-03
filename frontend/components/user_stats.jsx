var React = require('react');

module.exports = React.createClass({

  render: function() {
    var user = this.props.user;
    if (user.length===0) {
      return <div></div>;
    }
    return (
      <div className="user-show-stats-container">
        <div className="user-show-username">{user.username}</div>
        <div className="user-show-full-name">{user.full_name}</div>
        <div className="user-show-followers">
          <div>{user.followers.length} followers</div>
          <div>{user.followed_users.length} following</div>
        </div>
    </div>
    );
  }
});
