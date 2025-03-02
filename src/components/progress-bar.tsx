import React from 'react';
import {View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

type Props = {
  progress: number;
};

const ProgressBar = ({progress}: Props) => {
  return (
    <View className="rounded-[16px] overflow-hidden h-[20px] border border-green-primary">
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['red', 'yellow', 'green']}
        className="h-full rounded-[16px]"
        style={{width: `${progress}%`}}
      />
    </View>
  );
};

export default ProgressBar;
