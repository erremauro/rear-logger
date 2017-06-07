// Grab NODE_ENV and REAR_* environment variables and prepare them to be
// injected into the application via DefinePlugin in Webpack configuration.

var REAR_ENV = /^REAR_/i;

function getClientEnvironment () {
  return Object
    .keys(process.env)
    .filter(key => REAR_ENV.test(key))
    .reduce((env, key) => {
      env['process.env.' + key] = JSON.stringify(process.env[key]);
      return env;
    }, {
      // Useful for determining whether we’re running in production mode.
      // Most importantly, it switches Rear into the correct mode.
      'process.env.NODE_ENV': JSON.stringify(
        process.env.NODE_ENV || 'development'
      ),
    });
}

module.exports = getClientEnvironment;
