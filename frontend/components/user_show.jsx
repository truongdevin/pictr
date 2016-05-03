var React = require('react');
var UserStore = require('../stores/user_store.js');
var PostStore = require('../stores/post_store');
var ClientActions = require('../actions/client_actions.js');
var UserStats = require('./user_stats');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: [],
      full_name: [],
      posts: [],
      user: []
    };
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.fetchUser);
    this.postListener = PostStore.addListener(this.fetchUser);
    ClientActions.fetchUsers();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
    this.postListener.remove();
    if (this.userProfileListener) {
      this.userProfileListener.remove();
    }
  },

  //enabling this allows profile button on show page, but leads to console errors..
  // componentWillReceiveProps: function (prop) {
  //   this.userProfileListener = UserStore.addListener(this.fetchUser);
  //   ClientActions.fetchUsers();
  // },

  fetchUser: function () {
    // debugger; IT ISNT UPDATING!!!
    var user = UserStore.find(JSON.parse(this.props.params.userId));
    this.setState({
      username: user.username,
      full_name: user.full_name,
      posts: user.posts,
      user: user
    });
  },

  render: function() {
    var posts = this.state.posts.map(function(post){
      return <img key={post.id} className="user-photos" src={post.image_url}/>;
    });
    return (
      <div>
        <UserStats user={this.state.user}/>
        <div className="user-photos-container">{posts}</div>
      </div>
    );
  }
});
