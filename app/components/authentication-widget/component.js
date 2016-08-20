import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['authentication'],
  session: Ember.inject.service(),

  actions: {
    signIn() {
      this.get('session')
        .authenticate('authenticator:torii', 'doorkeeper')
        .catch(function(error) {
          throw new Error('authentication failed: '.concat(error));
        });
    },

    signOut() {
      this.get('session').invalidate();
    }
  }
});
