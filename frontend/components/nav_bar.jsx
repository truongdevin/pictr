var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/client_actions.js');
var hashHistory = ReactRouter.hashHistory;

module.exports = React.createClass({
  handleHome: function() {
    hashHistory.push('/');
  },

  handleSignOut: function() {
    ClientActions.signOut();
  },

  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        var postData = {
          user_id: JSON.parse(localStorage.getItem('currentUser')).id,
          image_url: results[0].url
        };
        ClientActions.createPost(postData);
      }
    }.bind(this));
  },

  render: function() {
    return(
      <div>
        <ul className="navbar-links">
          <li onClick={this.handleSignOut}>Sign Out </li>
          <li>Profile</li>
          <li onClick={this.upload}>Upload</li>
          <li className="home-button" onClick={this.handleHome}>Pictr</li>
        </ul>
      </div>
    );
  }
});
