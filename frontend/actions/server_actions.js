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
  }
};
