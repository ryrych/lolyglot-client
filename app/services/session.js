import Ember from 'ember';
import DS from 'ember-data';
import ESASession from "ember-simple-auth/services/session";

export default ESASession.extend({
  store: Ember.inject.service(),

  currentUser: Ember.computed('isAuthenticated', function() {
    let currentUserPromise = this.get('store').findRecord('user', 'current')
      .catch((error) => this.invalidateSessionWhenTokenIsNoMoreValid(error));

    return DS.PromiseObject.create({ promise: currentUserPromise });
  }),

  invalidateSessionWhenTokenIsNoMoreValid(error) {
    let accessForbidden = error.errors.map((e) => e.status).includes("401");
    return accessForbidden ? this.invalidate() : null;
  }
});
