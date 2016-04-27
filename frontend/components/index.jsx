var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({
  getInitialState: function () {
    return { posts: [] };
  },

  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.getPosts);
    ClientActions.fetchPosts();
  },

  componentWillUnmount: function () {
    this.postListener.remove();
  },

  getPosts: function () {
    this.setState({ posts: PostStore.all() });
  },

  render: function () {
    var posts = this.state.posts.map(function (post) {
      return (<div key={post.id}> {post.image_url} : {post.user.username}</div>);
    });
    return (
      <div className="post-index">
        <div>{posts}</div>
      </div>
    );
  }
});
