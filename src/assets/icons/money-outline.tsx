import * as React from 'react';
import Svg, {Rect, Path, Circle} from 'react-native-svg';

function MoneyOutlineIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Rect
        x={3}
        y={6}
        width={18}
        height={12}
        rx={2}
        stroke="#1E1E1E"
        strokeWidth={2}
      />
      <Path
        d="M6 9h2M16 15h2"
        stroke="#1E1E1E"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle cx={12} cy={12} r={2} stroke="#1E1E1E" strokeWidth={2} />
    </Svg>
  );
}

export default MoneyOutlineIcon;
