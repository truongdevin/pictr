var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');
var Post = require('../components/post');

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
      return (<Post key={post.id} post={post}/>);
    });

    var intro = <div></div>;
    if (posts.length < 1) {
      intro = (
        <div className="welcome">
          <h2>Welcome to Pictr!</h2><br/>
          <div>- Use the Search button to find users to follow</div>
          <br/>
          <div>- Or start uploading your own photos</div>
        </div>
      );
    }
    return (
      <div>
        {intro}
        <div>{posts}</div>
      </div>
    );
  }
});
