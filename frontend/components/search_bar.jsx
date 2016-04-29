var React = require('react');
var UserStore = require('../stores/user_store.js');
var ClientActions = require('../actions/client_actions.js');

module.exports = React.createClass({
  getInitialState: function () {
    return {users: [], searchString: '' };
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this.getUsers);
    ClientActions.fetchUsers();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  getUsers: function () {
    this.setState({ users: UserStore.all() });
  },

  handleChange: function(e){
    this.setState({searchString:e.target.value});
  },

  render: function() {
    var libraries = this.state.users,
      searchString = this.state.searchString.trim().toLowerCase();

    if(searchString.length > 0){

      libraries = libraries.filter(function(l){
        return l.username.toLowerCase().match(searchString);
      });
    } else {
      libraries = [];
    }

    return (
      <div>
        <input type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="User search" />
        <ul>
          {libraries.map(function(l){
            return <li key={l.id}>{l.username}</li>;
            }) }
          </ul>
        </div>
    );
  }
});
