import Ember from 'ember';

export default Ember.Object.extend({

    init: function() {
        window.recurly.configure('sjc-pbY9xt7cS85JrtcinjZato');
    },

    lib: function() {
        return window.recurly;
    }

});
