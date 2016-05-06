var React = require('react');
var UserStore = require('../stores/user_store.js');
var ClientActions = require('../actions/client_actions.js');
var FollowButton = require('./follow_button');
var hashHistory = require('react-router').hashHistory;

var SearchItem = require('./search_item');

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
    var allUsers = this.state.users,
      searchString = this.state.searchString.trim().toLowerCase(),
      currentUser = JSON.parse(localStorage.getItem('currentUser'));

    if(searchString.length > 0){
      allUsers = allUsers.filter(function(singleUser){
        return singleUser.username.toLowerCase().match(searchString);
      });
    }
    var self = this;
    var dropdownContent = allUsers.map(function(singleUser){
      return (
        <ul key={singleUser.id} className="dropdown-content">
          <SearchItem user={singleUser} callback={self.props.callback}/>
          <li><FollowButton user={singleUser}/></li>
        </ul>
      );
    });

    return (
      <div className='dropdown-container'>
        <input className="dropdown-input" type="text" value={this.state.searchString} onChange={this.handleChange} placeholder="User search" />
        <div className='dropdown-box'>
          {dropdownContent}
        </div>
      </div>
    );
  }
});
