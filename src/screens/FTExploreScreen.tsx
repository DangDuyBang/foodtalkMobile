import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../styles';

const FTExploreScreen = () => {
  return (
    <View style={styles.container}>
      <Text>FTExploreScreen</Text>
    </View>
  );
};

export default FTExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
