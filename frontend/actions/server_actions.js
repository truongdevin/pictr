var AppDispatcher = require('../dispatcher/dispatcher');
var PostConstants = require('../constants/post_constants');

module.exports = {
  receiveAll: function (posts) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POSTS_RECEIVED,
      posts: posts
    });
  },

  receivePost: function (post) {
    AppDispatcher.dispatch({
      actionType: PostConstants.POST_RECEIVED,
      post: post
    });
  },

  receiveComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: PostConstants.COMMENT_RECEIVED,
      comment: comment
    });
  },

  removeComment: function (comment) {
    AppDispatcher.dispatch({
      actionType: PostConstants.COMMENT_REMOVED,
      comment: comment
    });
  },

  receiveUsers: function (users) {
    AppDispatcher.dispatch({
      actionType: PostConstants.USERS_RECEIVED,
      users: users
    });
  },

  receiveRelationship: function (relationship) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RELATIONSHIP_RECEIVED,
      relationship: relationship
    });
  },

  removeRelationship: function (relationship) {
    AppDispatcher.dispatch({
      actionType: PostConstants.RELATIONSHIP_REMOVED,
      relationship: relationship
    });
  },

  receiveLike: function (like) {
    AppDispatcher.dispatch({
      actionType: PostConstants.LIKE_RECEIVED,
      like: like
    });
  },

  removeLike: function (like) {
    AppDispatcher.dispatch({
      actionType: PostConstants.LIKE_REMOVED,
      like: like
    });
  },


};
