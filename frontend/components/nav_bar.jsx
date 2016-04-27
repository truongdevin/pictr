var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/client_actions.js');
var hashHistory = ReactRouter.hashHistory;


module.exports = React.createClass({
  handleHome: function() {
    console.log("clicked home");
    hashHistory.push('/');

  },

  handleSignOut: function() {
    // console.log("clicked SignOut");
    ClientActions.signOut();
  },

  render: function() {
    var placeholder = 'hi';
    var uploadPlaceholder = <form onSubmit={this.handleSubmit}>
                              <input
                                type="text"
                                value={placeholder}
                                onChange={this.titleChange} />
                              <input type="submit" value="Create Post" />
                            </form>;


    return(
      <div>
        <ul className="navbar-links">
          <li onClick={this.handleSignOut}>Sign Out </li>
          <li>Profile</li>
          <li>{uploadPlaceholder}</li>
          <li>Upload</li>
          <li className="home-button" onClick={this.handleHome}>Pictr</li>
        </ul>
      </div>
    );
  }
});
