import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../styles';

const FTHomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FTHomeScreen</Text>
    </View>
  );
};

export default FTHomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
