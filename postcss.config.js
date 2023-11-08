module.exports = {
  plugins: {
    '@csstools/postcss-global-data': {
      files: [
        './src/styles/ds/primitives/mediaqueries.css',
        './src/styles/ds/primitives/layers.css',
      ],
    },
    'postcss-custom-media': {},
    'postcss-import': {},
    'postcss-nesting': {},
    autoprefixer: {},
  },
};
