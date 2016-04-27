var ServerActions = require("../actions/server_actions");
// var ReactRouter = require('react-router');
// var hashHistory = ReactRouter.hashHistory;

module.exports = {
  fetchPosts: function(){
    $.ajax({
      url: '/api/posts',
      method: 'GET',
      success: function(posts) {
        ServerActions.receiveAll(posts);
        console.log(posts);
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
  },

  signOut: function(){
    $.ajax({
      url: '/session/',
      method: 'DELETE',
      success: function() {
        localStorage.clear();
        window.location = "session/new";
      }
    });
  },

  fetchCurrentUser: function(){
    $.ajax({
      url: '/api/users',
      method: 'GET',
      success: function(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    });
  }
};
