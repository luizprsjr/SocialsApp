import {NativeStackScreenProps} from '@react-navigation/native-stack';

import {AppStackParamList} from './app-stack';
import {RootStackParamList} from './routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

export type AppScreenProps<RouteName extends keyof AppStackParamList> =
  NativeStackScreenProps<AppStackParamList, RouteName>;
