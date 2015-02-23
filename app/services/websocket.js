import Ember from 'ember';

export default Ember.Object.extend({
  _setup: function () {
    let websocket = this.websocket = new WebSocket('ws://localhost:8080');

    this.subscribers = [];

    websocket.onmessage = function (event) {
      if (!this.subscribers) { return; }
      let message = JSON.parse(event.data);
      this.subscribers.forEach( (callback) => callback(message) );
    }.bind(this);

  }.on('init'),

  sendMessage: function (message) {
    this.websocket.send(message);
  },

  subscribe: function (callback) {
    this.subscribers.pushObject(callback);
  },

  unsubscribe: function (callback) {
    this.subscribers.removeObject(callback);
  }
});
