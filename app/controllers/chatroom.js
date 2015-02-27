import Ember from 'ember';

export default Ember.Controller.extend({

  author: null,
  body: null,

  submissionIsValid: Ember.computed.and('author', 'body'),
  submissionIsInvalid: Ember.computed.not('submissionIsValid'),

  websocket: Ember.inject.service(),

  messageCount: function () {
    return this.get('model').length;
  }.property('model.[]'),

  receiveMessage: function (message) {
    this.get('model').pushObject(message);
  },

  subscribe: function () {
    this.get('websocket').subscribe( (m) => this.receiveMessage(m) );
  },

  unsubscribe: function () {
    this.get('websocket').unsubscribe( (m) => this.receiveMessage(m) );
  },

  actions: {

    submitMessage: function () {
      let message = this.getProperties('author', 'body');
      this.get('websocket').sendMessage(JSON.stringify(message));
      this.set('body', null);
    }

  }

});
