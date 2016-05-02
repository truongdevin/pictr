var React = require('react');
var hashHistory = require('react-router').hashHistory;
var NavBar = require("./nav_bar");

module.exports = React.createClass({

  redirectUser: function() {
    var userId = this.props.user.id;
    var url = "/users/"+userId;
    this.props.callback();
    hashHistory.push(url);
  },

  render: function() {
    var user = this.props.user;
    return <li className="search-item" onClick={this.redirectUser}>{user.username}</li>;
  }
});
