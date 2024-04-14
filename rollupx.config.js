module.exports = {
  banner:
    '/*!\n' +
    ` * get-sub ${require('./package.json').version}\n` +
    ` * (c) 2024-${new Date().getFullYear()}\n` +
    ' */\n',

  aliasConfig: {
    '@': 'src',
  },

  formats: [
    {
      format: 'cjs',
      inputFiles: ['**/*'],
      outputDir: 'scf',
      outputFile: '[name][ext]',
    },
  ],

  node: true,
};