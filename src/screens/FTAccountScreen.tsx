import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../styles';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {TRootParamsList} from '../types/navigation';
import AuthStore from '../stores/Auth';

const FTAccountScreen = () => {
  const navigation = useNavigation<NavigationProp<TRootParamsList>>();
  const {setIsLogined} = AuthStore;

  const logout = () => {
    setIsLogined(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={logout}>
        <Text>FTAccountScreen (Click me to log out)</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FTAccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
