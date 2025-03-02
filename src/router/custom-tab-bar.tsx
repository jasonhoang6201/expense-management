import React, {useRef} from 'react';
import {View, TouchableOpacity, Animated} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import StarOutlineIcon from '@src/assets/icons/star-outline';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Text from '@src/components/text';
import classNames from 'classnames';
import MoneyOutlineIcon from '@src/assets/icons/money-outline';
import MoneyIcon from '@src/assets/icons/money';
import StarIcon from '@src/assets/icons/star';

const CustomTabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  const {navigate} = useNavigation();
  const linePosition = useRef(new Animated.Value(0)).current;

  const totalTabs = state.routes.length;
  const tabWidth = 100; // Adjust as needed

  const translateX = linePosition.interpolate({
    inputRange: [0, totalTabs - 1],
    outputRange: [0, (totalTabs - 1) * tabWidth],
  });

  const getIcon = (routeName: string, isFocused: boolean) => {
    switch (routeName) {
      case 'Tracking':
        if (isFocused) {
          return <MoneyIcon />;
        }
        return <MoneyOutlineIcon />;
      case 'Bucket':
        if (isFocused) {
          return <StarIcon />;
        }
        return <StarOutlineIcon />;
      default:
        return null;
    }
  };

  const onPress = (route: {name: string; key: string}, isFocused: boolean) => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigate(route.name as never);
    }
  };

  return (
    <View className="h-[70px] flex-row items-center bg-white">
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={() => onPress(route, isFocused)}
            className="flex-1 items-center justify-center"
            key={route.name}>
            {getIcon(route.name, isFocused)}
            <Text
              className={classNames('text-[16px]', {
                'text-pink-primary': isFocused,
              })}>
              {label as string}
            </Text>
          </TouchableOpacity>
        );
      })}
      <Animated.View
        style={{
          position: 'absolute',
          height: 2,
          width: tabWidth,
          backgroundColor: '#007AFF', // Color of the line
          bottom: 0,
          transform: [{translateX}],
        }}
      />
    </View>
  );
};

export default CustomTabBar;
