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


var App = React.createClass({
  componentWillMount: function() {
    // is this the earliest this can run?
    ClientActions.fetchCurrentUser();
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
