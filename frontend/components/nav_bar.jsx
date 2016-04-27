var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/client_actions.js');
var hashHistory = ReactRouter.hashHistory;


module.exports = React.createClass({
  handleHome: function() {
    console.log("clicked home");
    hashHistory.push('/');

  },

  //get initial state is just a placeholder until i implement cloudinary
  getInitialState: function() {
    return {
      image_url:""
    };
  },

  urlChange: function(e) {
    e.preventDefault();
    this.setState({image_url: e.target.value});
  },

  handleSubmit: function(e) {
    e.preventDefault();
    var postData = {
      user_id: 1,
      image_url: this.state.image_url
    };
    ClientActions.createPost(postData);
    this.setState({image_url: ""});
  },

  handleSignOut: function() {
    // console.log("clicked SignOut");
    ClientActions.signOut();
  },

  render: function() {
    // this uploadPlaceholder will be replaced with cloudinary. Just testing.
    var uploadPlaceholder = <form onSubmit={this.handleSubmit}>
                              <input
                                type="text"
                                value={this.state.image_url}
                                onChange={this.urlChange} />
                              <input type="submit" value="Upload Photo" />
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
