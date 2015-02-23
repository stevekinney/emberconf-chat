import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [];
  },
  activate: function () {
    this.controllerFor('chatroom').subscribe();
  },
  deactivate: function () {
    this.controllerFor('chatroom').unsubscribe();
  }
});
