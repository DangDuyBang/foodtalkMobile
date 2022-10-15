import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../styles';
import AuthStore from '../stores/Auth';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TAuthStackParamsList} from '../types';

const AULogInScreen = () => {
  const navigation = useNavigation<NavigationProp<TAuthStackParamsList>>();
  const {setIsLogined} = AuthStore;

  const navigateMainTab = () => {
    setIsLogined(true);
  };

  const navigateSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={navigateMainTab}>
        <Text>AULogInScreen (Click me to come to App)</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={navigateSignUp}>
        <Text>AUSignUp (Click me to move to Sign up)</Text>
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
});
