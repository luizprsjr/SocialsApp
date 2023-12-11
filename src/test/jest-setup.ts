// @ts-ignore
import mockSafeAreaContext from 'react-native-safe-area-context/jest/mock';

import {initializeStorage} from '../services/storage';
import {inMemoryStorage} from '../services/storage/implementation/jest/in-memory-storage';

jest.mock('react-native-safe-area-context', () => ({
  ...mockSafeAreaContext,
  useSafeAreaInsets: jest.fn(mockSafeAreaContext.useSafeAreaInsets),
}));

const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const originalModule = jest.requireActual('@react-navigation/native');
  return {
    ...originalModule,
    useNavigation: () => ({
      navigate: mockedNavigate,
    }),
  };
});

initializeStorage(inMemoryStorage);

export {mockedNavigate};
