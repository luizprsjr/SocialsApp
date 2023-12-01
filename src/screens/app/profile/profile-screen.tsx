import React from 'react';

import {useUserGetById} from '@domain';
import {AppScreenProps} from '@routes';
import {ActivityIndicator, Box, ProfileAvatar, Screen, Text} from '@ui';

export function ProfileScreen({route}: AppScreenProps<'ProfileScreen'>) {
  const userId = route.params.userId;

  const {loading, error, user} = useUserGetById(userId);

  return (
    <Screen canGoBack>
      {loading && <ActivityIndicator />}
      {error && <Text> error ao carregar perfil do usuário</Text>}
      {user && (
        <Box alignItems="center">
          <ProfileAvatar
            imageURL={user.profileUrl}
            size={64}
            borderRadius={24}
          />
          <Text preset="headingMedium" bold>
            {user.fullName}
          </Text>
          <Text>@{user.username}</Text>
        </Box>
      )}
    </Screen>
  );
}
