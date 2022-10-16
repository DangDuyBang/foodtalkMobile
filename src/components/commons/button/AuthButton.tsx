import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import React from 'react';
import {colors, texts} from '../../../styles';

export interface IAuthButtonProps {
  style?: ViewStyle;
  label?: string;
  onPress?: any;
}

const AuthButton = (props: IAuthButtonProps) => {
  const {style, label, onPress} = props;
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={[styles.container, style]}>
        <Text style={texts.textButtonWhite}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default AuthButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    paddingVertical: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
