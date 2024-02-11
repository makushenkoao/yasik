module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        root: ['.'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.ios.jsx',
          '.android.jsx',
          '.js',
          '.jsx',
          '.json',
          '.ts',
          '.tsx',
        ],
        alias: {
          '@entities': './src/entities',
          '@shared': './src/shared',
          '@widgets': './src/widgets',
          '@screens': './src/screens',
          '@app': './src/app',
          '@features': './src/features',
        },
      },
    ],
  ],
};
