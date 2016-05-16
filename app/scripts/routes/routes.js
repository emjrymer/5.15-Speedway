var _ = require('underscore');
var React = require('react');
var ReactDOM = require('react-dom');
var Backbone = require('backbone');
require('backbone-react-component');

var HomePageComponent = require('./../components/homepage.jsx');

var appContainer = document.getElementById('app');
var Router = Backbone.Router.extend({
  routes:{
    '':'index',
  },
  index: function(){
    ReactDOM.unmountComponentAtNode(appContainer);

    ReactDOM.render(
      React.createElement(HomePageComponent),
      appContainer
    );
  }
});

var router = new Router();
module.exports = router;
