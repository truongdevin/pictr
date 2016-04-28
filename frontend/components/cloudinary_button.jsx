var React = require("react");
var ClientActions = require('../actions/client_actions.js');

var UploadButton = React.createClass({
  upload: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY_OPTIONS, function(error, results){
      if(!error){
        // debugger;
        var postData = {
          user_id: JSON.parse(localStorage.getItem('currentUser')).id,
          image_url: results[0].url
        };
        ClientActions.createPost(postData);
      }
    }.bind(this));
  },
  render: function () {
    return (
      <div className="upload-form">
        <button onClick={this.upload}>Upload new image!</button>
      </div>
    );
  }
});

module.exports = UploadButton;
