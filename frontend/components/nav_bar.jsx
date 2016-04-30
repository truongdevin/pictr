var React = require('react');
var ReactRouter = require('react-router');
var ClientActions = require('../actions/client_actions.js');
var hashHistory = ReactRouter.hashHistory;
var SearchBar = require('./search_bar');
var Modal = require("react-modal");
var UserStore = require("../stores/user_store");

var style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)'
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    padding         : '20px',
    backgroundColor : '#ffe9ec',
    background      : '#fff',
    outline         : 'none',
    opacity         : '0',
    transition      : 'opacity 0.5s'
  }
};

module.exports = React.createClass({
  getInitialState: function(){
    return({ modalOpen: false });
  },

  // componentDidMount: function () {
  //   this.navListener = UserStore.addListener(this.rerender);
  //   // ClientActions.fetchUsers();
  // },
  //
  // rerender: function () {
  //
  // },

  closeModal: function(){
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  },

  openModal: function(){
    this.setState({ modalOpen: true });
  },

  onModalOpen: function() {
    style.content.opacity = 100;
  },

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
          <li className="home-button" onClick={this.handleHome}>Pictr</li>
          <li onClick={this.openModal}>Search</li>
          <li onClick={this.upload}>Upload</li>
          <li>Profile</li>
          <li onClick={this.handleSignOut}>Sign Out </li>
        </ul>
        <Modal
          isOpen={this.state.modalOpen}
          style={style}
          onAfterOpen={this.onModalOpen}

          onRequestClose={this.closeModal}>
          <SearchBar/>
        </Modal>

      </div>

    );
  }
});
