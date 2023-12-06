import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '@hooks';
import {ThemeColors} from '@ui';

import * as I from '../icons';

export interface IconBase {
  size?: number;
  color?: string;
}

export interface IconProps {
  name: IconName;
  color?: ThemeColors;
  size?: number;
  onPress?: () => void;
}

export function Icon({
  name,
  color = 'backgroundContrast',
  size,
  onPress,
}: IconProps) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  if (onPress) {
    return (
      <Pressable testID={name} hitSlop={10} onPress={onPress}>
        <SVGIcon color={colors[color]} size={size} />
      </Pressable>
    );
  }

  return <SVGIcon color={colors[color]} size={size} />;
}

const iconRegistry = {
  arrowLeft: I.ArrowLeftIcon,
  arrowRight: I.ArrowRightIcon,
  bell: I.BellIcon,
  bellOn: I.BellOnIcon,
  bookmark: I.BookmarkIcon,
  bookmarkFill: I.BookmarkFillIcon,
  camera: I.CameraIcon,
  chat: I.ChatIcon,
  chatOn: I.ChatOnIcon,
  check: I.CheckIcon,
  checkRound: I.CheckRoundIcon,
  errorRound: I.ErrorRoundIcon,
  comment: I.CommentIcon,
  chevronRight: I.ChevronRightIcon,
  eyeOn: I.EyeOnIcon,
  eyeOff: I.EyeOffIcon,
  flashOn: I.FlashOnIcon,
  flashOff: I.FlashOffIcon,
  heart: I.HeartIcon,
  heartFill: I.HeartFillIcon,
  home: I.HomeIcon,
  homeFill: I.HomeFillIcon,
  message: I.MessageIcon,
  messageRound: I.MessageRoundIcon,
  newPost: I.NewPostIcon,
  profile: I.ProfileIcon,
  profileFill: I.ProfileFillIcon,
  search: I.SearchIcon,
  settings: I.SettingsIcon,
  trash: I.TrashIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
