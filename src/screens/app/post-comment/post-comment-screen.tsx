import React from 'react';

import {usePostCommentList} from '@domain';
import {AppScreenProps} from '@routes';
import {Box, Screen, Text} from '@ui';

export function PostCommentScreen({
  route,
}: AppScreenProps<'PostCommentScreen'>) {
  const postId = route.params.postId;
  usePostCommentList(postId);

  return (
    <Screen title="Comentários" canGoBack>
      <Box>
        <Text>Tela de comentários</Text>
      </Box>
    </Screen>
  );
}
