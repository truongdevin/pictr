var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');
var hashHistory = require('react-router').hashHistory;
var Post = require('./post');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      post: this.props.selectedPost
    };
  },

  componentDidMount: function() {
    this.postListener = PostStore.addListener(this.fetchPost);
    ClientActions.fetchPost(this.props.selectedPost.id);
  },

  componentWillUnmount: function () {
    this.postListener.remove();
  },

  fetchPost: function () {
    var post = PostStore.find(this.props.selectedPost.id);
    this.setState({
      post: post
    });
  },

  render: function () {
    if (this.state.post !== undefined && this.state.post.comments !== undefined) {
      return <Post post={this.state.post} callback={this.props.callback}/>;
    } else {
      return <div></div>;
    }
  }
});
