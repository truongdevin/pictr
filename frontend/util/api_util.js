var ServerActions = require("../actions/server_actions");

module.exports = {
  fetchPosts: function(){
    $.ajax({
      url: '/api/posts',
      method: 'GET',
      success: function(posts) {
        ServerActions.receiveAll(posts);
      },
      error: function() {
        localStorage.clear();
        window.location = "session/new";
      }
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
      url: '/api/sessions',
      method: 'GET',
      success: function(user) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
    });
  },

  createComment: function(data){
    $.ajax({
      url: 'api/comments',
      method: 'POST',
      data: {comment: data},
      dataType: 'json',
      success: function(comment) {
        ServerActions.receiveComment(comment);
      }
    });
  },

  removeComment: function (id) {
    $.ajax({
      url: "api/comments/" + id,
      type: "DELETE",
      success: function (comment) {
        ServerActions.removeComment(comment);
      }
    });
  },

  fetchUsers: function(){
    $.ajax({
      url: '/api/users',
      method: 'GET',
      success: function(users) {
        ServerActions.receiveUsers(users);
      },
      dataType: 'json'
    });
  },

  fetchUser: function(id){
    $.ajax({
      url: 'api/users/'+id,
      method: 'GET',
      success: function(user) {
        ServerActions.receiveUser(user);
      }
    });
  },

  createRelationship: function(data){
    $.ajax({
      url: 'api/relationships',
      method: 'POST',
      data: {relationship: data},
      dataType: 'json',
      success: function(relationship) {
        ServerActions.receiveRelationship(relationship);
      }
    });
  },

  removeRelationship: function (id) {
    $.ajax({
      url: "api/relationships/" + id,
      type: "DELETE",
      success: function (relationship) {
        ServerActions.removeRelationship(relationship);
      }
    });
  },

  createLike: function(data){
    $.ajax({
      url: 'api/likes',
      method: 'POST',
      data: {like: data},
      dataType: 'json',
      success: function(like) {
        ServerActions.receiveLike(like);
      }
    });
  },

  removeLike: function (id) {
    $.ajax({
      url: "api/likes/" + id,
      type: "DELETE",
      success: function (like) {
        ServerActions.removeLike(like);
      }
    });
  }
};
