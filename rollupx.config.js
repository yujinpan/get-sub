module.exports = {
  banner:
    '/*!\n' +
    ` * get-sub ${require('./package.json').version}\n` +
    ` * (c) 2024-${new Date().getFullYear()}\n` +
    ' */\n',

  aliasConfig: {
    '@': 'src',
  },

  format: 'cjs',
  outputDir: 'dist/src',
  outputs: ['js'],

  node: true,
};
