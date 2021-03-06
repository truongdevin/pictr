var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;
var ClientActions = require('./actions/client_actions');

var NavBar = require('./components/nav_bar');
var Index = require('./components/index');
var Modal = require("react-modal");
var UserShow = require('./components/user_show');

// ApiUtil = require('./util/api_util');
// UserStore = require('./stores/user_store');
// PostStore = require('./stores/post_store');


var App = React.createClass({
  componentWillMount: function() {
  },

  render: function(){
    return (
        <div>
          <NavBar/>
          {this.props.children}
        </div>
    );
  }
});

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="posts" component={Index} />
    <Route path="users/:userId" component={UserShow} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  // is this the earliest this can run?
  Modal.setAppElement(document.body);
  var root = document.getElementById("root");
  if (root){
    ClientActions.fetchCurrentUser();
    ReactDOM.render(<Router history={hashHistory} routes={routes}/>, root);
  }
});
