import Ember from 'ember';

export default Ember.Route.extend({

    model: function() {
        return Ember.Object.create({
            first_name: 'John',
            last_name: 'Smith',
            address1: '7852 Foo St',
            city: 'Vancouver',
            country: 'Canada',
            state: 'BC',
            postal_code: 'V9J 9J9',
            number: '4111111111111111',
            month: '08',
            year: '16',
            cvv: '123'
        });
    },

    actions: {
        submit: function() {

            this.recurly.lib().token(
                this.modelFor(this.routeName).getProperties(
                    'first_name', 'last_name', 'address1', 'city', 'country', 'state', 'postal_code', 'number', 'month', 'year', 'cvv'
                ), 
                function(err, token) {
                    if (err) {
                        console.log('error', err);
                    } else {
                        console.log('token', token);
                    }
                }
            );

        }
    }

});
