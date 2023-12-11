import React from 'react';
import {Pressable} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import {User} from '@domain';
import {Box, ProfileAvatar, Text} from '@ui';

type ProfileUserProps = {user: Pick<User, 'username' | 'profileUrl' | 'id'>};
export function ProfileUser({user}: ProfileUserProps) {
  const {navigate} = useNavigation();

  function navigateTpProfile() {
    navigate('ProfileScreen', {userId: user.id});
  }

  return (
    <Pressable onPress={navigateTpProfile}>
      <Box flexDirection="row" alignItems="center" mb="s16">
        <ProfileAvatar imageURL={user.profileUrl} />
        <Text ml="s12" semiBold preset="paragraphMedium">
          {user.username}
        </Text>
      </Box>
    </Pressable>
  );
}
