var Store = require('flux/utils').Store;
var PostConstants = require('../constants/post_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher.js');

var PostStore = new Store(AppDispatcher);

var _posts = {};

var resetPosts = function (posts) {
  _posts = {};

  posts.forEach(function (post) {
    _posts[post.id] = post;
  });
};

var setPost = function (post) {
  post.comments = [];
  _posts[post.id] = post;
};

var setComment = function (comment) {
  _posts[comment.post_id].comments.push(comment);
};

var removeComment = function (comment) {
  var allComments = _posts[comment.post_id].comments.slice();
  var idx;
  for (var i=0; i<allComments.length ; i++) {
    if (allComments[i].id === comment.id) {
      idx = i;
      allComments.splice(idx,1);
    }
    _posts[comment.post_id].comments = allComments;
  }
};

var setLike = function(like) {

  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  currentUser.likes.push(like);
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
};

var removeLike = function(like) {

  var currentUser = JSON.parse(localStorage.getItem('currentUser'));
  for (var i=0; i<currentUser.likes.length; i++) {
    if (currentUser.likes[i].id === like.id) {
      currentUser.likes.splice(i,1);
    }
  }
  localStorage.setItem('currentUser', JSON.stringify(currentUser));
};

PostStore.all = function () {
  var allPosts = Object.keys(_posts).map(function (postId) {
    return _posts[postId];
  });
  return allPosts.reverse();
};

PostStore.find = function (id) {
  return _posts[id];
};


PostStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case PostConstants.POSTS_RECEIVED:
      resetPosts(payload.posts);
      break;
    case PostConstants.POST_RECEIVED:
      setPost(payload.post);
      break;
    case PostConstants.COMMENT_RECEIVED:
      setComment(payload.comment);
      break;
    case PostConstants.COMMENT_REMOVED:
      removeComment(payload.comment);
      break;
    case PostConstants.LIKE_RECEIVED:
      setLike(payload.like);
      break;
    case PostConstants.LIKE_REMOVED:
      removeLike(payload.like);
      break;
  }
  this.__emitChange();
};

module.exports = PostStore;
