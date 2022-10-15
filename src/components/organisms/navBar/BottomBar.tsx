import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextStyle,
  Text,
} from 'react-native';
import {colors} from '../../../styles';
import {TMainTabParamsList} from '../../../types';
import {IconTypes} from '../../commons/icon/iconList';
import {Icon} from '../../commons';
import {translate} from '../../../i18n';

export interface BottomBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const BottomBar = (props: BottomBarProps) => {
  const {state, descriptors, navigation} = props;
  const _getIconName = (routeName: keyof TMainTabParamsList): IconTypes => {
    switch (routeName) {
      case 'HomeScreen':
        return 'tab-home';
      case 'ExploreScreen':
        return 'tab-explore';
      case 'NotifyScreen':
        return 'tab-notify';
      case 'AccountScreen':
        return 'tab-account';
      default:
        return 'tab-home';
    }
  };

  const _getLabel = (routeName: keyof TMainTabParamsList): string | null => {
    switch (routeName) {
      case 'HomeScreen':
        return translate('home.tab.home');
      case 'ExploreScreen':
        return translate('home.tab.explore');
      case 'NotifyScreen':
        return translate('home.tab.notify');
      case 'AccountScreen':
        return translate('home.tab.account');
      default:
        return translate('home.tab.home');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const labelStyle: TextStyle = {
          color: isFocused
            ? colors.actionBottomBarColor
            : colors.noneBottomBarColor,
          marginTop: 5,
          fontSize: 11,
        };

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={route.key}
            activeOpacity={1}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.btnTab}>
            <Icon
              style={styles.tabIcon}
              name={_getIconName(route.name)}
              color={isFocused ? colors.actionIconColor : colors.noneIconColor}
            />
            <Text style={labelStyle}>{_getLabel(route.name)}</Text>
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: colors.white,
  },
  btnTab: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  tabIcon: {
    width: 32,
    height: 32,
  },
});

export default BottomBar;
