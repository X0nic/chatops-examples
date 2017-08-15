module.exports = {
  webpack: function(config) {
    const webpack = require('webpack')

    config.plugins = config.plugins || []
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        'window.jQuery': 'jquery',
        Popper: ['popper.js', 'default'],
      })
    )

    return config
  },
}
