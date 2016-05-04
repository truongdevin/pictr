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

var setUser = function (user) {
  _users[user.id] = user;
};

var addLike = function(relationship) {
  var user = UserStore.find(relationship.follower_id);
  user.followed_users.push(relationship);
};

var removeLike = function(relationship) {
  var user = UserStore.find(relationship.follower_id);
  var dupedFollowedUsers = user.followed_users.slice();
  for (var i=0; i<dupedFollowedUsers.length; i++) {
    if (dupedFollowedUsers[i].id === relationship.id) {
      dupedFollowedUsers.splice(i,1);
    }
  }
  user.followed_users = dupedFollowedUsers;
};


var setPost = function(post) {
  if (location.hash.includes("/users/")) {
    var user = UserStore.find(post.user_id);
    user.posts.push(post);
  }
}

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
    case PostConstants.USER_RECEIVED:
      setUser(payload.user);
      break;
    case PostConstants.RELATIONSHIP_RECEIVED:
      addLike(payload.relationship);
      break;
    case PostConstants.RELATIONSHIP_REMOVED:
      removeLike(payload.relationship);
      break;
    case PostConstants.POST_RECEIVED:
      setPost(payload.post);
      break;
  }
  this.__emitChange();
};

module.exports = UserStore;
