var React = require('react');
var SearchItem = require('./search_item');
var FollowButton = require('./follow_button');
var Modal = require("react-modal");

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
    top             : '20%',
    width           : '500px',
    bottom          : '20%',
    margin          : '0 auto',
    border          : '1px solid #ccc',
    padding         : '20px',
    backgroundColor : 'snow',
    background      : '#fff',
    outline         : 'none',
    opacity         : '0',
    transition      : 'opacity 0.5s',
    borderRadius    : '15px'
  }
};

module.exports = React.createClass({
  getInitialState: function() {
    return {
      modalOpen1:false,
      modalOpen2: false,
      user: this.props.user,
      followedUsers: this.props.followedUsers,
      followers: this.props.followers
    };
  },

  componentWillReceiveProps: function(nextProps) {
    this.setState({
      user: nextProps.user,
      followedUsers: nextProps.followedUsers,
      followers: nextProps.followers
    })
  },

  closeModal1: function(){
    this.setState({ modalOpen1: false });
    style.content.opacity = 0;
  },

  closeModal2: function(){
    this.setState({ modalOpen2: false });
    style.content.opacity = 0;
  },

  openModal1: function(url, post){
    this.setState({ modalOpen1: true});
  },

  openModal2: function(url, post){
    this.setState({ modalOpen2: true});
  },

  onModalOpen: function() {
    style.content.opacity = 100;
  },

  render: function() {
    var followedUsers = this.state.followedUsers;
    var followers = this.state.followers;
    var user = this.state.user;
    if (user.length===0) {
      return <div></div>;
    }
    var self = this;
    var followedUsersContent = followedUsers.map(function(singleUser){
      return (
        <ul key={singleUser.id} className="dropdown-content">
          <SearchItem user={singleUser} callback={self.closeModal2}/>
          <li><FollowButton user={singleUser}/></li>
        </ul>
      );
    });

    var followersContent = followers.map(function(singleUser){
      return (
        <ul key={singleUser.id} className="dropdown-content">
          <SearchItem user={singleUser} callback={self.closeModal1}/>
          <li><FollowButton user={singleUser}/></li>
        </ul>
      );
    });

    return (
      <div>
        <div className="user-show-stats-container">
          <div className="user-show-username">{user.username}</div>
          <div className="user-show-full-name">{user.full_name}</div>
          <div className="user-show-followers">
            <div onClick={this.openModal1}>
              {user.followers.length} followers
            </div>
            <div onClick={this.openModal2}>
              {user.followed_users.length} following
            </div>
          </div>
          <FollowButton user={this.state.user}/>
        </div>

        <Modal
          isOpen={this.state.modalOpen1}
          style={style}
          onAfterOpen={this.onModalOpen}
          onRequestClose={this.closeModal1}>
          {followersContent}
        </Modal>

        <Modal
          isOpen={this.state.modalOpen2}
          style={style}
          onAfterOpen={this.onModalOpen}
          onRequestClose={this.closeModal2}>
          {followedUsersContent}
        </Modal>
      </div>
    );
  }
});
