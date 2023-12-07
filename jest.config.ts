import type {Config} from 'jest';

const config: Config = {
  preset: 'react-native',
  setupFiles: ['<rootDir>/src/test/jest-setup.ts'],
  setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
  moduleDirectories: ['node_modules', './src/test'],
  modulePathIgnorePatterns: ['.*/mocked-data/.*'],
  collectCoverageFrom: [
    'src/{ui/core,ui/components,utils,hooks,domain,screens}/**/*.{js,jsx,ts,tsx}',
  ],
  coveragePathIgnorePatterns: ['/node_modules/', 'index'],
  transformIgnorePatterns: [
    'node_modules/(?!((jest-)?react-native|@react-native(-community)?|react-native-safe-area-context)/)',
  ],
};

export default config;
