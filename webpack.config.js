const path = require("path");

// Good resource:
// https://www.valentinog.com/blog/webpack/
// https://survivejs.com/webpack/loading/images/

module.exports = {
  mode: 'development',
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{ loader: "swc-loader" }],
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};
