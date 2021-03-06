import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.findRecord('rental', params.rental_id);
  },
  actions: {
   update(rental, params) {
     Object.keys(params).forEach(function(key) {
       alert("The key for " + params.type + " is now " + params.key);
       if(params[key]!==undefined) {
         rental.set(key,params[key]);
       }
     });
     rental.save();
     this.transitionTo('index');
   },
   destroyRental(rental) {
     console.log("helooooooooo");
     console.log(rental);
     rental.destroyRecord();
     this.transitionTo('index');
   },
   saveReview3(params) {
     console.log("level3");
     console.log("this is " + this.store.createRecord);
     var newReview = this.store.createRecord('review', params);
     newReview.save();
     this.transitionTo('index');
   }
 }
});
