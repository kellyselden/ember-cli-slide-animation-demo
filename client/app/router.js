import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('route1', function() {
    this.resource('route2');
  });
  this.resource('route3');
  this.resource('route4');
});

export default Router;
