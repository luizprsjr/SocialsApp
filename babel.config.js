module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: '.',
        alias: {
          '@routes': './src/routes',
          '@screens': './src/screens',
          '@ui': './src/ui',
          '@hooks': './src/hooks',
          '@domain': './src/domain',
        },
      },
    ],
  ],
};
