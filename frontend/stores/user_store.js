var Store = require('flux/utils').Store;
var PostConstants = require('../constants/post_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var UserStore = new Store(AppDispatcher);

var _users = {};

var resetUsers = function (users) {
  _users = {};

  users.forEach(function (user) {
    _users[user.id] = user;
  });
};

var addRelationship = function(relationship) {
  //find user by relationship.followed_id since thats how the show button logic works.
  // add currentuser.username to the followers.
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  // debugger;
  var changedUser = _users[relationship.followed_id];
  changedUser.followers.push(currentUser);
  currentUser.relationships.push(relationship);
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
  // debugger;
};

var removeRelationship = function(relationship) {
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  var changedUser = _users[relationship.followed_id];
  var dupedFollowers = changedUser.followers.slice();

  for (var i=0; i<changedUser.followers.length; i++) {
    if (dupedFollowers[0].username === currentUser.username) {
      dupedFollowers.splice(i,1);
    }
  }
  changedUser.followers = dupedFollowers;
};

UserStore.all = function () {
  var allUsers = Object.keys(_users).map(function (userId) {
    return _users[userId];
  });
  return allUsers;
};

UserStore.find = function (id) {
  return _users[id];
};


UserStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PostConstants.USERS_RECEIVED:
      resetUsers(payload.users);
      break;
    case PostConstants.RELATIONSHIP_RECEIVED:
      addRelationship(payload.relationship);
      break;
    case PostConstants.RELATIONSHIP_REMOVED:
      removeRelationship(payload.relationship);
      break;
  }
  this.__emitChange();
};

module.exports = UserStore;
