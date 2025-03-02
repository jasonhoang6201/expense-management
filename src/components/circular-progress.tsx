import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import Svg, {Circle, G} from 'react-native-svg';
import Text from './text';
import {formatMoney} from '@src/utils/money';

interface Props {
  current: number;
  total: number;
}

const CircularProgress = ({current, total}: Props) => {
  const [show, setShow] = useState(false);

  const radius = 100;
  const strokeWidth = 25;
  const normalizedRadius = radius - strokeWidth / 2;
  const circumference = normalizedRadius * 2 * Math.PI;
  const progress = current / total;
  const strokeDashoffset = circumference - progress * circumference;

  return (
    <View className="items-center justify-center relative">
      <Svg
        height={radius * 2}
        width={radius * 2}
        viewBox={`0 0 ${radius * 2} ${radius * 2}`}>
        <G rotation="-90" origin={`${radius}, ${radius}`}>
          <Circle
            stroke="#D8D8D8"
            fill="none"
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            strokeWidth={strokeWidth}
          />
          <Circle
            stroke="#FF8F8F"
            fill="none"
            cx={radius}
            cy={radius}
            r={normalizedRadius}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
          />
        </G>
      </Svg>
      <TouchableOpacity onLongPress={() => setShow(!show)} className="absolute">
        <Text className="text-[20px] font-bold text-center text-[#FF8F8F]">
          {show ? `${Math.round(progress * 100)}%` : formatMoney(current)}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CircularProgress;
