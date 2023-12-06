import {renderHook} from '@testing-library/react-native';
import {EdgeInsets, useSafeAreaInsets} from 'react-native-safe-area-context';
import {AllTheProviders} from 'test-utils';

import {theme} from '@ui';

import {useAppSafeArea} from '../use-safe-area';

jest.mock('react-native-safe-area-context');
const mockedUseSafeAreaInsets = jest.mocked(useSafeAreaInsets);

describe('useAppSafeArea', () => {
  it('should return the minimum requirement if safe area is less than', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 4, bottom: 2} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea(), {
      wrapper: AllTheProviders,
    });

    expect(result.current.top).toEqual(theme.spacing.s20);
    expect(result.current.bottom).toEqual(theme.spacing.s20);
  });

  it('should return safe area value if is greater than minimum requirement', () => {
    mockedUseSafeAreaInsets.mockImplementationOnce(
      () => ({top: 40, bottom: 40} as EdgeInsets),
    );
    const {result} = renderHook(() => useAppSafeArea(), {
      wrapper: AllTheProviders,
    });
    expect(result.current.top).toEqual(40);
    expect(result.current.bottom).toEqual(40);
  });
});
