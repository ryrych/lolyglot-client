import Oauth2 from 'torii/providers/oauth2-bearer';
import { configurable } from 'torii/configuration';

export default Oauth2.extend({
  name: 'doorkeeper-oauth2',
  baseUrl: configurable('baseUrl', 'http://localhost:3000/oauth/authorize'),
  responseParams: ['token'],
  approvalPrompt: configurable('approvalPrompt', 'auto'),
  redirectUri: configurable('redirectUri', 'http://localhost:4200'),

  fetch(data) {
    return data;
  }
});
