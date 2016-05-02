var React = require('react');
var UserStore = require('../stores/user_store.js');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: [],
      full_name: [],
      posts: []
    };
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.fetchUser);
    // ClientActions.fetchUser(JSON.parse(this.props.params.userId));
    ClientActions.fetchUsers();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
    // this.userPropListener.remove();
  },

  componentWillReceiveProps: function(prop) {
    this.userListener = UserStore.addListener(this.fetchUser);
    ClientActions.fetchUser(JSON.parse(prop.params.userId));
  },

  fetchUser: function () {
    var user = UserStore.find(JSON.parse(this.props.params.userId));
    this.setState({
      username: user.username,
      full_name: user.full_name,
      posts: user.posts
    });
  },

  render: function() {
    var posts = this.state.posts.map(function(post){
      return <img key={post.id} className="user-photos" src={post.image_url}/>;
    });
    return (
      <div className="user-photos-container">{posts}</div>
    );
  }
});
