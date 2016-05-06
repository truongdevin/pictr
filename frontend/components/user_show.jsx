var React = require('react');
var UserStore = require('../stores/user_store.js');
var ClientActions = require('../actions/client_actions.js');
var UserStats = require('./user_stats');
var Modal = require("react-modal");
var UserShowPost = require('./user_show_post');

var hashHistory = require('react-router').hashHistory;


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
    height          : 'auto',
    width           : '620px',
    margin          : '0 auto',
    border          : '1px solid transparent',
    padding         : '0px',
    backgroundColor : 'transparent',
    background      : '#fff',
    outline         : 'none',
    opacity         : '0',
    transition      : 'opacity 0.5s',
    borderRadius    : '5px'
  }
};

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: [],
      full_name: [],
      posts: [],
      user: [],
      modalOpen: false,
      url: [],
      post: []
    };
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.fetchUser);
    ClientActions.fetchUsers();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  componentWillReceiveProps: function (prop) {
    this.userListener.remove();
    this.userListener = UserStore.addListener(this.fetchUser);
    ClientActions.fetchUsers();
  },

  fetchUser: function () {
    var user = UserStore.find(JSON.parse(this.props.params.userId));
    this.setState({
      username: user.username,
      full_name: user.full_name,
      posts: user.posts,
      user: user
    });
  },

  closeModal: function(){
    hashHistory.push({
      pathname: this.props.location.pathname,
    });
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  },

  openModal: function(url, post){
    hashHistory.push({
      pathname: this.props.location.pathname,
      query: {modal:true}
    });
    this.setState({ modalOpen: true , url: url, post:post});
  },

  onModalOpen: function() {
    style.content.opacity = 100;
  },

  render: function() {
    var self = this;
    var posts = this.state.posts.map(function(post){
      var idx = post.image_url.indexOf('upload')+6;
      var url = post.image_url.slice(0,idx)+"/w_600,h_600,c_limit"+post.image_url.slice(idx);
      return <img key={post.id} onClick={self.openModal.bind(null,url,post)} className="user-photos" src={url}/>;
    });

    var followedUsers = [];
    var followers = [];
    if (this.state.user.followed_users) {
      this.state.user.followed_users.forEach(function(followedUser) {
        followedUsers.push(UserStore.find(followedUser.followed_id));
      });

      this.state.user.followers.forEach(function(follower) {
        followers.push(UserStore.find(follower.follower_id));
      });
    }
    return (
      <div>
        <UserStats user={this.state.user}
          followedUsers={followedUsers}
          followers={followers}/>
        <div className="user-photos-container">{posts.reverse()}</div>
        <Modal
          isOpen={this.state.modalOpen}
          style={style}
          onAfterOpen={this.onModalOpen}
          onRequestClose={this.closeModal}>
          <UserShowPost
            selectedPost={this.state.post}
            callback={this.closeModal}/>
        </Modal>
      </div>
    );
  }
});
