var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({
  getInitialState: function() {
    return {
      post: this.props.currPost
    };
  },

  componentDidMount: function() {
    this.blahListener = PostStore.addListener(this.fetchPost);
    ClientActions.fetchPost(this.props.currPost.id);
  },

  componentWillUnmount: function () {
    this.blahListener.remove();
  },

  fetchPost: function () {
    var post = PostStore.find(this.props.currPost.id);
    this.setState({
      post: post
    });
  },

  render: function () {
    return <div>{this.state.post.id}</div>;
  }
});
