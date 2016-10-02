/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'lolyglot-client',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
    torii: {
      providers: {
        'doorkeeper-oauth2': {
          apiKey:      'bf64b3c0a4db9869fdc6acbe1151597b10ad95395591646c957f04b73e36e806',
          redirectUri: 'http://localhost:4200/login',
        },
        'google-oauth2-bearer': {
          apiKey:      '780242730420-itbpjd7busad7ajaqpamkte9bjvkjrti.apps.googleusercontent.com',
          redirectUri: 'http://localhost:4200/auth/login',
      },
      }
    },
  };

  ENV.contentSecurityPolicy = {
    // Deny everything by default
    'default-src': "'none'",

    'script-src': ["'self'", "https://cdn.mxpnl.com"],
    'font-src': ["'self'", "http://fonts.gstatic.com", "data: fonts.gstatic.com"],
    'connect-src': ["'self'", "ws://*.localhost:49152", "localhost:*"],
    'img-src': "'self'",
    'style-src': ["'self'", "'unsafe-inline'", "http://fonts.googleapis.com"],

    // `media-src` will be omitted from policy
    'media-src': null
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
