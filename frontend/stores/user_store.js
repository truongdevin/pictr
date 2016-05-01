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

var addLike = function(relationship) {

  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  currentUser.relationships.push(relationship);
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
};

var removeLike = function(relationship) {

  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  for (var i=0; i<currentUser.relationships.length; i++) {
    if (currentUser.relationships[i].id === relationship.id) {
      currentUser.relationships.splice(i,1);
    }
  }
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
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
      addLike(payload.relationship);
      break;
    case PostConstants.RELATIONSHIP_REMOVED:
      removeLike(payload.relationship);
      break;
  }
  this.__emitChange();
};

module.exports = UserStore;
