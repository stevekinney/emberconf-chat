export function initialize(container, application) {
  application.inject('route', 'websocketService', 'service:websocket');
}

export default {
  name: 'websocket-service',
  initialize: initialize
};
