var ServerActions = require("../actions/server_actions");

module.exports = {
  fetchPosts: function(){
    $.ajax({
      url: '/api/posts',
      method: 'GET',
      success: function(posts) {
        ServerActions.receiveAll(posts);
      },
      dataType: 'json'
    });
  },

  createPost: function(data){
    $.ajax({
      url: 'api/posts',
      method: 'POST',
      data: {post: data},
      success: function(post) {
        ServerActions.receivePost(post);
      }
    });
  },

  fetchPost: function(id){
    $.ajax({
      url: 'api/posts/'+id,
      method: 'GET',
      success: function(post) {
        ServerActions.receivePost(post);
      }
    });
  }
};
