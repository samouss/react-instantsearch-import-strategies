/* eslint-disable import/no-commonjs */

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['last 2 versions', 'ie >= 9'],
        },
      },
    ],
    '@babel/preset-react',
  ],
};
