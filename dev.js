module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [

    // First application
    {
      name      : "api",
      script    : "api/src/server.js",
      watch: true,
      interpreter: "babel-node",
      env: {
        NODE_ENV: "dev"
      }
    },
  ],

  /**
   * Deployment section
   * http://pm2.keymetrics.io/docs/usage/deployment/
   */
}
