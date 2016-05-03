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
