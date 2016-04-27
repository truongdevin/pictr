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
// ApiUtil = require('./util/api_util');

var App = React.createClass({
  componentDidMount: function() {
    console.log("APP MOUNTED");
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
  var root = document.getElementById("root");
  if (root){
    ReactDOM.render(<Router history={hashHistory} routes={routes}/>, root);
  }
});
