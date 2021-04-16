const { override, addBabelPlugins } = require('customize-cra');
module.exports = override(
  ...addBabelPlugins(
    [
      'babel-plugin-root-import',
      {
        'rootPathPrefix': '~',
        'rootPathSufix': 'src'
      }
    ]
  )
);