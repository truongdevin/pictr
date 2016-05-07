var React = require('react');
var PostStore = require('../stores/post_store.js');
var ClientActions = require('../actions/client_actions.js');
var Post = require('../components/post');
var hashHistory = require('react-router').hashHistory;


module.exports = React.createClass({
  getInitialState: function () {
    return {
      posts: [] ,
      intro: <div/>,
      scrollCount: 1,
      time: Date.now()
    };
  },

  componentDidMount: function () {
    this.postListener = PostStore.addListener(this.getPosts);
    this.infiniteListener = window.addEventListener("scroll",this.addPosts);
    ClientActions.fetchPosts();
  },

  componentWillUnmount: function () {
    this.postListener.remove();
    window.removeEventListener('scroll',this.addPosts,false);
  },

  getPosts: function () {
    this.setState({posts: PostStore.all(), intro: <div/>});
    if (this.state.posts.length < 1) {
      this.setState({
        intro: (
          <div className="welcome">
            <h2>Welcome to Pictr!</h2><br/>
            <div>- Use the Search button to find users to follow</div>
            <br/>
            <div>- Or start uploading your own photos</div>
          </div>
        )
      });
    }
  },

  addPosts: function () {
    if (location.hash.includes('r=true')) {
      this.state.scrollCount = 1;
      hashHistory.push('/');
    }

    if (window.innerHeight + window.scrollY >= document.body.offsetHeight
    && Date.now() > this.state.time + 1000) {
      this.state.time = Date.now();
      this.state.scrollCount += 1;
      ClientActions.fetchPosts(this.state.scrollCount);
   }
 },

  render: function () {
    var posts = this.state.posts.map(function (post) {
      return (<Post key={post.id} post={post}/>);
    });

    return (
      <div>
        {this.state.intro}
        <div>{posts}</div>
      </div>
    );
  }
});
