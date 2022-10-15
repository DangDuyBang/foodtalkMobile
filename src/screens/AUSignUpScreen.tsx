import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TAuthStackParamsList} from '../types';

const AUSignUpScreen = () => {
  const navigation = useNavigation<NavigationProp<TAuthStackParamsList>>;

  return (
    <View style={styles.container}>
      <Text>AUSignUpScreen</Text>
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
