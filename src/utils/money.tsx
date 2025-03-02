import {createNumberMask} from 'react-native-mask-input';

export const formatMoney = (amount: number) => {
  // format number to vnđ currency
  return new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(amount);
};

export const formatNumber = (amount: number) => {
  return new Intl.NumberFormat('en', {
    notation: 'compact',
    compactDisplay: 'short',
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount);
};

export const vndMask = createNumberMask({
  delimiter: '.',
  separator: ',',
  precision: 0,
});
