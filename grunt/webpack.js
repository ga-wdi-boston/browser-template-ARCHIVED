module.exports = {
  dev: {
    entry: './index.js',
    output: {
      path: './',
      filename: 'bundle.js'
    },

    module: {
      loaders: [
        { test: /\.css$/, loader: 'style-loader!css-loader' }
      ]
    },

    stats: {
      colors: true,
      modules: true,
      reasons: true
    },

    failOnError: false,
    watch: true,
    keepalive: true
  }
};
