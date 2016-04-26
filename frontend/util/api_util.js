
module.exports = {
  fetchPosts: function(){
    $.ajax({
      url: '/api/posts',
      method: 'GET',
      success: function(posts) {
        console.log(posts);
      },
      dataType: 'json'
    });
  },

  createPosts: function(data){
    $.ajax({
      url: 'api/posts',
      method: 'POST',
      data: {post: data},
      success: function(bench) {
        console.log(bench);
      }
    });
  }
};
