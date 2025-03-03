import CircularProgress from '@src/components/circular-progress';
import ExpenseList from '@src/components/expense/expense-list';
import StackProgressChart from '@src/components/stack-progress-chart';
import Text from '@src/components/text';
import {getAllExpensesByMonth} from '@src/mmkv/expense';
import useExpenseStore from '@src/store/expense';
import {Expense} from '@src/types/expense';
import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';
import FlipCard from 'react-native-flip-card';

const FinancialManagement = () => {
  const {viewMonth, forceRefresh} = useExpenseStore();
  const [expenses, setExpenses] = useState<Expense[]>([]);

  useEffect(() => {
    const currentExpenses = getAllExpensesByMonth(viewMonth);
    setExpenses(currentExpenses);
  }, [viewMonth, forceRefresh]);

  const totalAmount = useMemo(() => {
    let total = 0;
    expenses.forEach(expense => {
      total += expense.items?.reduce((acc, item) => acc + item.amount, 0) ?? 0;
    });
    return total;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expenses, forceRefresh]);

  const totalCheckedAmount = useMemo(() => {
    let total = 0;
    expenses.forEach(expense => {
      total +=
        expense.items?.reduce((acc, item) => {
          if (item.isChecked) {
            return acc + item.amount;
          }
          return acc;
        }, 0) ?? 0;
    });
    return total;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expenses, forceRefresh]);

  const data = useMemo(() => {
    return expenses.map(expense => {
      const total =
        expense.items?.reduce((acc, item) => acc + item.amount, 0) ?? 0;
      const used =
        expense.items?.reduce((acc, item) => {
          if (item.isChecked) {
            return acc + item.amount;
          }
          return acc;
        }, 0) ?? 0;
      return {
        type: expense.type,
        used,
        remaining: total - used,
      };
    });
  }, [expenses]);

  return (
    <View className="p-[8px] bg-black-primary flex-1 pt-[16px]">
      <View className="h-[230px]">
        <FlipCard flipHorizontal={true} flipVertical={false} clickable={true}>
          <StackProgressChart data={data} />
          <CircularProgress
            current={totalAmount - totalCheckedAmount}
            total={totalAmount}
          />
        </FlipCard>
      </View>

      <View className="h-[8px]" />
      <ExpenseList />
    </View>
  );
};

export default FinancialManagement;
