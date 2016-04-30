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


  //THIS COULD BE WRONG.
  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  var changedUser = _users[relationship.followed_id];
  changedUser.followers.push(currentUser);
};

var removeRelationship = function(relationship) {

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
