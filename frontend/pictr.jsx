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

// ApiUtil = require('./util/api_util');
// UserStore = require('./stores/user_store');

// is this the earliest this can run?
// YES. set a conditional to only do this if the cookie is empty
ClientActions.fetchCurrentUser();

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
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  Modal.setAppElement(document.body);
  var root = document.getElementById("root");
  if (root){
    ReactDOM.render(<Router history={hashHistory} routes={routes}/>, root);
  }
});
