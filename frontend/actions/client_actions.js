var ApiUtil = require('../util/api_util');

module.exports = {
  fetchPosts: function(count) {
    ApiUtil.fetchPosts(count);
  },

  createPost: function(data) {
    ApiUtil.createPost(data);
  },

  fetchPost: function(id) {
    ApiUtil.fetchPost(id);
  },

  signOut: function() {
    ApiUtil.signOut();
  },

  fetchCurrentUser: function() {
    ApiUtil.fetchCurrentUser();
  },

  createComment: function(data) {
    ApiUtil.createComment(data);
  },

  deleteComment: function(id) {
    ApiUtil.removeComment(id);
  },

  fetchUsers: function() {
    ApiUtil.fetchUsers();
  },

  fetchUser: function(id) {
    ApiUtil.fetchUser(id);
  },

  createRelationship: function(data) {
    ApiUtil.createRelationship(data);
  },

  deleteRelationship: function(id) {
    ApiUtil.removeRelationship(id);
  },

  createLike: function(data) {
    ApiUtil.createLike(data);
  },

  deleteLike: function(id) {
    ApiUtil.removeLike(id);
  }
};
