import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AuthButton, AuthInput} from '../../commons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import AuthStore from '../../../stores/Auth';
import {TAuthStackParamsList} from '../../../types';
import {colors} from '../../../styles';

const LoginForm = () => {
  const navigation = useNavigation<NavigationProp<TAuthStackParamsList>>();
  const {setIsLogined} = AuthStore;

  /**
   * When the user clicks the button, set the state of isLogined to true.
   */
  const handleLogin = () => {
    setIsLogined(true);
  };

  return (
    <View style={styles.container}>
      <AuthInput
        style={{marginBottom: 50}}
        width={350}
        placeholder={'Email'}
        type={'email-address'}
        secureTextEntry={false}
      />
      <AuthInput
        style={{marginBottom: 50}}
        width={350}
        placeholder={'Password'}
        password
        secureTextEntry={true}
      />
      <AuthButton
        onPress={handleLogin}
        style={styles.loginButton}
        label={'LOG IN'}
      />
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 20,
  },
  loginButton: {
    marginLeft: 20,
    width: 350,
    backgroundColor: colors.primary,
  },
});
