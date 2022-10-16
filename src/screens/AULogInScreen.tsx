import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, texts} from '../styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TAuthStackParamsList} from '../types';
import LoginForm from '../components/molecules/forms/LoginForm';

const AULogInScreen = () => {
  const navigation = useNavigation<NavigationProp<TAuthStackParamsList>>();

  navigation.setOptions({
    headerShown: false,
    headerShadowVisible: false,
  });

  /**
   * NavigateSignUp() is a function that navigates to the SignUpScreen
   */
  const navigateSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <LoginForm />
      <TouchableOpacity onPress={navigateSignUp}>
        <Text style={[texts.textBlue, styles.signUpText]}>New Account?</Text>
      </TouchableOpacity>
    </View>
  );
};

export default AULogInScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
  signUpText: {
    marginTop: 15,
  },
});
