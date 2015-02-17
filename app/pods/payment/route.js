import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {
        return Ember.Object.create({
            firstName: 'John',
            lastName: 'Smith',
            address1: '7852 Foo St',
            city: 'Vancouver',
            country: 'Canada',
            province: 'BC',
            postalCode: 'V9J 9J9',
            number: '4111111111111111',
            month: '08',
            year: '16',
            cvv: '123'
        });
    },

    actions: {
        submit: function() {

            // obviously using $ here is bad :-)
            // this needs to be in a component
            this.recurly.lib().token(Ember.$('#payment')[0], function(err, token) {
                if (err) {
                    console.log('error', err);
                } else {
                    console.log('token', token);
                }
            });

        }
    }

});
