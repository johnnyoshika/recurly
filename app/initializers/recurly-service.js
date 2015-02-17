export function initialize(container, application) {
    application.inject('route', 'recurly', 'service:recurly');
}

export default {
name: 'recurly-service',
    initialize: initialize
};
