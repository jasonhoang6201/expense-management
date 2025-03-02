module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    ['nativewind/babel'],
    [
      'module-resolver',
      {
        alias: {
          '@src': './src',
        },
      },
    ],
    ['react-native-reanimated/plugin'],
  ],
};
