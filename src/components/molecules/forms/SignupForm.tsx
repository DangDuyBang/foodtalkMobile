import {StyleSheet, View} from 'react-native';
import React from 'react';
import {AuthButton, AuthInput} from '../../commons';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import AuthStore from '../../../stores/Auth';
import {TAuthStackParamsList} from '../../../types';
import {colors} from '../../../styles';

const SignupForm = () => {
  const navigation = useNavigation<NavigationProp<TAuthStackParamsList>>();
  const {setIsLogined} = AuthStore;

  /**
   * It sets the isLogined state to true.
   */
  const handleSignup = () => {
    setIsLogined(true);
  };

  return (
    <View style={styles.container}>
      <AuthInput
        style={{marginBottom: 50}}
        width={350}
        placeholder={'Username'}
        type={'default'}
        secureTextEntry={false}
      />
      <AuthInput
        style={{marginBottom: 50}}
        width={350}
        placeholder={'Fullname'}
        type={'default'}
        secureTextEntry={false}
      />
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
      <AuthInput
        style={{marginBottom: 50}}
        width={350}
        placeholder={'Confirm Password'}
        password
        secureTextEntry={true}
      />
      <AuthButton
        onPress={handleSignup}
        style={styles.loginButton}
        label={'SIGN UP'}
      />
    </View>
  );
};

export default SignupForm;

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
