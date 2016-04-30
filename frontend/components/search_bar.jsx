var React = require('react');
var UserStore = require('../stores/user_store.js');
var ClientActions = require('../actions/client_actions.js');
var RelationshipButton = require('./relationship_button');

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
    // debugger;
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
    }

    var dropdownContent = libraries.map(function(l){
      return (
        <li className="dropdown-content" key={l.id}>{l.username}:<RelationshipButton user={l}/></li>
      );
    });

    return (
      <div>
        <input className="dropdown" type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="User search" />
        <ul>
          {dropdownContent}
          </ul>
        </div>
    );
  }
});
