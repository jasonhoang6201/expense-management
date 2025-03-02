import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function MoneyIcon() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.586 5.586C2 6.172 2 7.114 2 9v6c0 1.886 0 2.828.586 3.414C3.172 19 4.114 19 6 19h12c1.886 0 2.828 0 3.414-.586C22 17.828 22 16.886 22 15V9c0-1.886 0-2.828-.586-3.414C20.828 5 19.886 5 18 5H6c-1.886 0-2.828 0-3.414.586zM5 7a1 1 0 000 2h2a1 1 0 000-2H5zm11 9a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1zm-3-4a1 1 0 11-2 0 1 1 0 012 0zm2 0a3 3 0 11-6 0 3 3 0 016 0z"
        fill="#FF8F8F"
      />
    </Svg>
  );
}

export default MoneyIcon;
