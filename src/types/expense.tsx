export enum ExpenseType {
  Meo = 'Meo',
  Food = 'Food',
  Coffee = 'Coffee',
  Petroleum = 'Petroleum',
  Company = 'Company',
  Other = 'Other',
}

export interface Expense {
  type: ExpenseType;
  month: string; // YYYY-MM
  items: {
    name: string;
    amount: number;
    isChecked: string;
  }[];
}

export const borderColor = {
  [ExpenseType.Food]: '#FFAD60', // Warm orange
  [ExpenseType.Coffee]: '#A485E0', // Muted purple
  [ExpenseType.Meo]: '#5EC2A6', // Teal green
  [ExpenseType.Petroleum]: '#D32F2F', // Vibrant orange
  [ExpenseType.Company]: '#4A90E2', // Medium blue
  [ExpenseType.Other]: '#BDBDBD', // Neutral gray
};

export const backgroundColor = {
  [ExpenseType.Food]: '#FFE5B4', // Soft orange
  [ExpenseType.Coffee]: '#D9C6F2', // Light purple
  [ExpenseType.Meo]: '#C5F2E0', // Light teal
  [ExpenseType.Petroleum]: '#FFCDD2', // Light orange
  [ExpenseType.Company]: '#B0D4FF', // Soft blue
  [ExpenseType.Other]: '#E0E0E0', // Soft gray
};

export const faintBackgroundColor = {
  [ExpenseType.Food]: '#FFE5B480', // Soft orange (transparent)
  [ExpenseType.Coffee]: '#D9C6F280', // Light purple (transparent)
  [ExpenseType.Meo]: '#C5F2E080', // Light teal (transparent)
  [ExpenseType.Petroleum]: '#FFCDD280', // Light orange (transparent)
  [ExpenseType.Company]: '#B0D4FF80', // Soft blue (transparent)
  [ExpenseType.Other]: '#E0E0E080', // Soft gray (transparent)
};
