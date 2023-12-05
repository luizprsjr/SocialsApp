module.exports = {
  preset: 'react-native',
  collectCoverageFrom: [
    'src/{ui/core,ui/components,utils}/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
};
