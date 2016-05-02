var React = require('react');
var UserStore = require('../stores/user_store.js');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      username: [],
      full_name: [],
      posts: []
      // user: UserStore.find(JSON.parse(this.props.params.userId))
    };
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.fetchUser);
    ClientActions.fetchUser(JSON.parse(this.props.params.userId));
  },

  componentWillUnmount: function () {
    this.userListener.remove();
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
      <div>{posts}</div>
    );
  }
});
