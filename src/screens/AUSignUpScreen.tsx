import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TAuthStackParamsList} from '../types';
import SignupForm from '../components/molecules/forms/SignupForm';

const AUSignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<TAuthStackParamsList>>;

  return (
    <View style={styles.container}>
      <SignupForm />
    </View>
  );
};

export default AUSignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
