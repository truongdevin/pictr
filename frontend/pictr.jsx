var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

ApiUtil = require('./util/api_util');

var App = React.createClass({
  render: function(){
    return (
        <div>
          <header><h1>Pictr</h1></header>
          {this.props.children}
        </div>
    );
  }
});

var Routes = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
    </Route>
  </Router>
);

document.addEventListener("DOMContentLoaded", function() {
  var root = document.getElementById("root");
  ReactDOM.render(Routes, root);
});
