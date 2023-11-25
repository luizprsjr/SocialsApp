import React from 'react';

import {AppScreenProps} from '@routes';
import {Box, Screen, Text} from '@ui';

export function PostCommentScreen({}: AppScreenProps<'PostCommentScreen'>) {
  // route.params.
  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Post Comment Screen</Text>
      </Box>
    </Screen>
  );
}
