import * as React from 'react';
import {View, ImageStyle, ViewStyle} from 'react-native';
import {SvgProps} from 'react-native-svg';

import {iconList, IconTypes} from './iconList';

export interface IconProps extends SvgProps {
  style: ImageStyle;
  containerStyle?: ViewStyle;
  name: IconTypes;
}

const Icon = (props: IconProps) => {
  const {name, style, ...others} = props;
  const IconComponent = iconList[name] ?? <View />;

  return (
    <IconComponent {...others} width={style.width} height={style.height} />
  );
};

export default Icon;
