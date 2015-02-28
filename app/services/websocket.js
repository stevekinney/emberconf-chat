/* global io */

import Ember from 'ember';

export default Ember.Object.extend({
  _setup: function () {
    let socket = this.socket = io(`${window.location.hostname}:8080`);

    this.subscribers = [];

    socket.on('message', function (data) {
      if (!this.subscribers) { return; }
      let message = JSON.parse(data);
      this.subscribers.forEach( (callback) => callback(message) );
    }.bind(this));

  }.on('init'),

  sendMessage: function (message) {
    this.socket.emit('message', message);
  },

  subscribe: function (callback) {
    this.subscribers.pushObject(callback);
  },

  unsubscribe: function (callback) {
    this.subscribers.removeObject(callback);
  }
});
