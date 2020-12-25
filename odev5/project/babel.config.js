const { join } = require('path');

const src = uri => join(__dirname, 'src', uri);

module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          "@components": src('components'),
          "@app": src('app'),
          "@assets": src('assets')
        }
      }
    ]
  ]
};
