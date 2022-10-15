import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../styles';

const FTNotifyScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FTNotifyScreen</Text>
    </View>
  );
};

export default FTNotifyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
