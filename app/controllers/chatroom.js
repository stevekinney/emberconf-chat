import Ember from 'ember';

export default Ember.Controller.extend({

  author: null,
  body: null,

  submissionIsValid: Ember.computed.and('author', 'body'),
  submissionIsInvalid: Ember.computed.not('submissionIsValid'),

  messageCount: function () {
    return this.get('content').length;
  }.property('content.[]'),

  actions: {

    submitMessage: function () {
      let message = this.getProperties('author', 'body');
      this.get('content').pushObject(message);
      this.set('body', null);
    }

  }

});
