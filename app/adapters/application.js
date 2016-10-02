import JSONAPIAdapter from 'ember-data/adapters/json-api';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

export default JSONAPIAdapter.extend(DataAdapterMixin, {
  namespace:  'api/v1',
  host: 'http://localhost:3000',
  authorizer: 'authorizer:google'
});
