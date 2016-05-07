var React = require('react');
var Comments = require('./comments');
var hashHistory = require('react-router').hashHistory;

module.exports = React.createClass({
  redirectUser: function(e) {
    var userId = this.props.post.user.id;
    var url = "/users/"+userId;
    hashHistory.push(url);
    if (this.props.callback) {
      this.props.callback();
    }
  },

  render: function(){
    var post = this.props.post;
    var age = post.age.replace("about ", "");

    if (age.indexOf("less than a minute") !== -1){
      age = "<1m";
    } else if (age.indexOf(" hours") !== -1){
      age = age.replace(" hours", "h");
    } else if (age.indexOf(" hour") !== -1){
      age = age.replace(" hour", "h");
    } else if (age.indexOf(" day") !== -1){
      age = age.replace(" day", "d");
    } else if (age.indexOf(" minutes") !== -1){
      age = age.replace(" minutes", "m");
    } else if (age.indexOf(" minute") !== -1){
      age = age.replace(" minute", "m");
    } else if (age.indexOf(" weeks") !== -1){
      age = age.replace(" weeks", "w");
    } else if (age.indexOf(" week") !== -1){
      age = age.replace(" week", "w");
    }

    var idx = post.image_url.indexOf('upload')+6;
    var url = post.image_url.slice(0,idx)+"/w_600"+post.image_url.slice(idx);
    url = url.slice(0,4) + 's' + url.slice(4);
    var comments;
    if (this.props.callback) {
      comments = <Comments post={post} callback={this.props.callback}/>;
    } else {
      comments = <Comments post={post}/>;
    }

    return(
      <div className="individual-post">
        <div className="post-author">
          <span className="user-link" onClick={this.redirectUser}>{post.user.username}</span>
          <span className="age">{age}</span>
        </div>
        <img className="index-photos" src={url}/>
        {comments}
      </div>
    );
  }
});
