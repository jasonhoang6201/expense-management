import {Expense, ExpenseType} from '@src/types/expense';
import {MMKV} from 'react-native-mmkv';

export const storage = new MMKV({
  id: 'expense-storage',
});

export const saveExpense = (expense: Expense) => {
  storage.set(
    `expense-${expense.month}-${expense.type}`,
    JSON.stringify(expense),
  );
};

export const getExpense = (month: string, type: ExpenseType): Expense => {
  return JSON.parse(storage.getString(`expense-${month}-${type}`) || '{}');
};

export const deleteExpense = (month: string, type: ExpenseType) => {
  storage.delete(`expense-${month}-${type}`);
};

export const getAllExpensesByMonth = (month: string): Expense[] => {
  return Object.keys(ExpenseType).map(type =>
    getExpense(month, type as ExpenseType),
  );
};

export const deleteAllExpenses = () => {
  storage.clearAll();
};

export const deleteAllExpensesByMonth = (month: string) => {
  Object.keys(ExpenseType).forEach(type => {
    storage.delete(`expense-${month}-${type}`);
  });
};

export const getAllExpensesMonths = (): string[] => {
  const data = new Set<string>();
  storage.getAllKeys().forEach(key => {
    // expense-2025-01-food
    const month = key.split('-')[2];
    const year = key.split('-')[1];
    data.add(`${year}-${month}`);
  });
  return Array.from(data);
};
