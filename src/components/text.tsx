import React from 'react';
import {Text as RNText, TextProps} from 'react-native';

const Text = (props: TextProps) => {
  return (
    <RNText
      className="text-white"
      style={[
        props.style,
        {
          fontFamily: 'Nunito-Regular',
        },
      ]}
      {...props}>
      {props.children}
    </RNText>
  );
};

export default Text;
