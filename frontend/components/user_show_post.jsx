var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  getInitialState: function() {
    return {
      post: this.props.currPost
    };
  },

  componentDidMount: function() {
    this.postListener = PostStore.addListener(this.fetchPost);
    ClientActions.fetchPost(this.props.currPost.id);
  },

  componentWillUnmount: function () {
    this.postListener.remove();
  },

  fetchPost: function () {
    var post = PostStore.find(this.props.currPost.id);
    this.setState({
      post: post
    });
  },

  render: function () {
    if (this.state.post !== undefined) {
      debugger;
      return <div>{this.state.post.id}</div>;
    } else {
      return <div></div>;
    }
  }
});
