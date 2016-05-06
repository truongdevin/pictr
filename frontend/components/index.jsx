var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');
var Post = require('../components/post');

module.exports = React.createClass({
  getInitialState: function () {
    return { posts: [] , intro: <div/>};
  },

  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.getPosts);
    ClientActions.fetchPosts();
  },

  componentWillUnmount: function () {
    this.postListener.remove();
  },

  getPosts: function () {
    this.setState({posts: PostStore.all(), intro: <div/>});
    if (this.state.posts.length < 1) {
      this.setState({
        intro: (
          <div className="welcome">
            <h2>Welcome to Pictr!</h2><br/>
            <div>- Use the Search button to find users to follow</div>
            <br/>
            <div>- Or start uploading your own photos</div>
          </div>
        )
      });
    }
  },

  render: function () {
    var posts = this.state.posts.map(function (post) {
      return (<Post key={post.id} post={post}/>);
    });

    return (
      <div>
        {this.state.intro}
        <div>{posts}</div>
      </div>
    );
  }
});
