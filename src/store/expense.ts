import moment from 'moment';
import {create} from 'zustand';

interface ExpenseStore {
  viewMonth: string;
  setViewMonth: (month: string) => void;

  forceRefresh: string;
  setForceRefresh: (forceRefresh: string) => void;
}

const useExpenseStore = create<ExpenseStore>(set => ({
  viewMonth: moment().format('YYYY-MM'),
  setViewMonth: month => set({viewMonth: month}),

  forceRefresh: '',
  setForceRefresh: forceRefresh => set({forceRefresh}),
}));

export default useExpenseStore;
