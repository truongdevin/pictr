var React = require('react');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({
  getInitialState: function () {
    return ({body: ""});
  },

  bodyChange: function (e) {
    var newBody = e.target.value;
    this.setState({ body: newBody });
  },

  handleSubmit: function (e) {
    e.preventDefault();
    var commentData = {
      user_id: JSON.parse(localStorage.getItem('currentUser')).id,
      post_id: this.props.post_id,
      body: this.state.body
    };
    ClientActions.createComment(commentData);
    this.setState({body: ""});
  },

  render: function () {
    return (
      <div className="comment-form-box">
        <form onSubmit={this.handleSubmit}>
          <input className="comment-form-textbox"
            placeholder="Add a comment..."
            type="text"
            value={this.state.body}
            onChange={this.bodyChange} />
          <input className="button-hidden" type="submit" value="Post Comment!" />
        </form>
      </div>
    );
  }
});
