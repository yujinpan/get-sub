module.exports = {
  apps: [
    {
      name: 'get-sub',
      script: './src/app.js',
      env: {
        NODE_ENV: 'production',
      },
    },
  ],
};
