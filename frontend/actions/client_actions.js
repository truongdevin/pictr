var ApiUtil = require('../util/api_util');

module.exports = {
  fetchPosts: function() {
    ApiUtil.fetchPosts();
  },

  createPosts: function(data) {
    ApiUtil.createPost(data);
  },

  fetchPost: function(id) {
    ApiUtil.fetchPost(id);
  }
};
