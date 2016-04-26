var React = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var hashHistory = ReactRouter.hashHistory;

var Index = require('./components/index');
// ApiUtil = require('./util/api_util');

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

var routes = (
  <Route path="/" component={App}>
    <IndexRoute component={Index} />
    <Route path="posts" component={Index} />
  </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  var root = document.getElementById("root");
  ReactDOM.render(<Router history={hashHistory} routes={routes}/>, root);
});
