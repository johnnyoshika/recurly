import Ember from 'ember';

export function initialize(/* container, application */) {

    Ember.TextField.reopen({
        attributeBindings: ['data-recurly']
    });

}

export default {
  name: 'text-field',
  initialize: initialize
};
