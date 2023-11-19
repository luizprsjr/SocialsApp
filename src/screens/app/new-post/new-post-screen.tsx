import React from 'react';

import {AppTabScreenProps} from '@routes';
import {Screen, Text} from '@ui';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function NewPostScreen(props: AppTabScreenProps<'NewPostScreen'>) {
  return (
    <Screen>
      <Text preset="headingSmall">New Post Screen</Text>
    </Screen>
  );
}
