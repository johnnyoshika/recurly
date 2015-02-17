import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {
        return Ember.Object.create();
    },

    actions: {
        submit: function() {

            // obviously using $ here is bad :-)
            // this needs to be in a component
            this.recurly.lib().token($('#payment')[0], function(err, token) {
                if (err) {
                    console.log('error', err);
                } else {
                    console.log('token', token);
                }
            });

        }
    }

});
