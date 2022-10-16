import {
  StyleSheet,
  View,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React, {useState} from 'react';
import {colors} from '../../../styles';
import Icon from '../icon/Icon';

export interface IAuthInputProps {
  style?: ViewStyle;
  width?: any;
  type?: any;
  password?: boolean;
  placeholder?: string;
  secureTextEntry?: boolean;
}

const AuthInput = (props: IAuthInputProps) => {
  const {style, width, type, password, placeholder, secureTextEntry} = props;

  const [isShow, setIsShow] = useState(secureTextEntry);

  /**
   * If the isShow state is false, then set the isShow state to true. If the isShow state is true, then
   * set the isShow state to false
   */
  const handleShowPassword = () => {
    if (isShow === false) {
      setIsShow(true);
    } else {
      setIsShow(false);
    }
  };

  return (
    <View style={styles.container && style}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        keyboardVerticalOffset={20}
        style={[styles.keyboardContainer, {paddingLeft: width - 50}]}>
        <TextInput
          style={[styles.input, {width: width}]}
          placeholder={placeholder}
          keyboardType={type}
          secureTextEntry={isShow}
        />
        {password ? (
          <TouchableOpacity onPress={handleShowPassword}>
            <Icon
              color={colors.actionIconColor}
              name="tab-account"
              style={styles.icon}
            />
          </TouchableOpacity>
        ) : (
          <Icon color={colors.white} name="tab-account" style={styles.icon} />
        )}
      </KeyboardAvoidingView>
    </View>
  );
};

export default AuthInput;

const styles = StyleSheet.create({
  container: {},
  keyboardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'baseline',
  },
  input: {
    backgroundColor: colors.white,
    borderColor: colors.white,
    shadowColor: colors.actionIconColor,
    borderWidth: 1,
    borderRadius: 25,
    paddingHorizontal: 25,
    paddingVertical: 15,
    fontSize: 18,
    position: 'absolute',
  },
  icon: {
    width: 28,
    height: 28,
  },
});
