import {Expense, ExpenseType} from '@src/types/expense';

const meoTemplate = [
  {
    name: 'Bình Phú',
    amount: 90_000,
  },
  {
    name: 'Bình Phú',
    amount: 90_000,
  },
];

const foodTemplate = [
  {
    name: 'Cơm tấm',
    amount: 40_000,
  },
  {
    name: 'Cơm tấm',
    amount: 40_000,
  },
  {
    name: 'Cơm tấm',
    amount: 40_000,
  },
  {
    name: 'Nhà Hưng',
    amount: 200_000,
  },
];

const coffeeTemplate = [
  {
    name: 'The Coffee House',
    amount: 85_000,
  },
  {
    name: 'The Coffee House',
    amount: 85_000,
  },
  {
    name: 'The Coffee House',
    amount: 85_000,
  },
  {
    name: 'Ticot',
    amount: 100_000,
  },
  {
    name: 'Ticot',
    amount: 100_000,
  },
  {
    name: 'Ticot',
    amount: 100_000,
  },
  {
    name: 'Ticot',
    amount: 100_000,
  },
  {
    name: 'Ticot',
    amount: 100_000,
  },
  {
    name: 'Ticot',
    amount: 100_000,
  },
  {
    name: 'Ticot',
    amount: 100_000,
  },
  {
    name: 'Ticot',
    amount: 100_000,
  },
  {
    name: 'Ticot',
    amount: 100_000,
  },
];

const petroleumTemplate = [
  {
    name: 'Lần 1',
    amount: 50_000,
  },
  {
    name: 'Lần 2',
    amount: 50_000,
  },
  {
    name: 'Lần 3',
    amount: 50_000,
  },
];

const companyTemplate = [
  {
    name: 'Party',
    amount: 400_000,
  },
];

const otherTemplate: Expense['items'] = [];

export const getTemplate = (type: ExpenseType) => {
  switch (type) {
    case ExpenseType.Meo:
      return meoTemplate;
    case ExpenseType.Food:
      return foodTemplate;
    case ExpenseType.Coffee:
      return coffeeTemplate;
    case ExpenseType.Petroleum:
      return petroleumTemplate;
    case ExpenseType.Company:
      return companyTemplate;
    case ExpenseType.Other:
      return otherTemplate;
  }
};
