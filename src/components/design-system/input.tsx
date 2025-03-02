import classNames from 'classnames';
import React from 'react';
import {TextInput, TextInputProps} from 'react-native';

type Props = {
  inputStyle?: string;
} & TextInputProps;

const AppInput = ({inputStyle, ...props}: Props) => {
  return (
    <TextInput
      className={classNames(
        'border border-gray-300 rounded-md p-2',
        inputStyle,
      )}
      {...props}
    />
  );
};

export default AppInput;
