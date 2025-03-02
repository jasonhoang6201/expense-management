import {ExpenseType} from '@src/types/expense';
import React from 'react';
import {View} from 'react-native';
import {NestableScrollContainer} from 'react-native-draggable-flatlist';
import ExpenseItem from './expense-item';

const ExpenseList = () => {
  return (
    <View className="px-[8px] mt-[16px] flex-1">
      <NestableScrollContainer>
        {Object.keys(ExpenseType).map(type => (
          <ExpenseItem key={type} type={type as ExpenseType} />
        ))}
      </NestableScrollContainer>
    </View>
  );
};

export default ExpenseList;
