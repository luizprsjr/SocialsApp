import React from 'react';
import {Pressable} from 'react-native';

import {useAppTheme} from '../../hooks/use-app-theme';
import * as I from '../icons';
import {ThemeColors} from '../theme';

export interface IconBase {
  size?: number;
  color?: string;
}

interface Props {
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
}: Props) {
  const {colors} = useAppTheme();
  const SVGIcon = iconRegistry[name];

  return (
    <Pressable hitSlop={10} onPress={onPress}>
      <SVGIcon color={colors[color]} size={size} />
    </Pressable>
  );
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
  newPost: I.NewPostIcon,
  profile: I.ProfileIcon,
  profileFill: I.ProfileFillIcon,
  search: I.SearchIcon,
  settings: I.SettingsIcon,
  trash: I.TrashIcon,
};

type IconType = typeof iconRegistry;

type IconName = keyof IconType;
