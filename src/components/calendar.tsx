import AngleDownIcon from '@src/assets/icons/angle-down';
import useExpenseStore from '@src/store/expense';
import moment from 'moment';
import React, {useState} from 'react';
import {Modal, TouchableOpacity} from 'react-native';
import MonthPicker from 'react-native-month-year-picker';
import Text from './text';

const Calendar = () => {
  const {viewMonth, setViewMonth} = useExpenseStore();
  const [showCalendar, setShowCalendar] = useState(false);

  return (
    <>
      <TouchableOpacity
        className="flex-row items-center"
        onPress={() => setShowCalendar(true)}>
        <Text className="text-[14px] leading-[16px] font-semibold ml-[16px] text-pink-primary">
          {moment(viewMonth).format('MMM, YYYY')}
        </Text>
        <AngleDownIcon />
      </TouchableOpacity>

      {showCalendar && (
        <Modal visible={showCalendar} transparent>
          <MonthPicker
            onChange={(event, date) => {
              if (event === 'dateSetAction') {
                setViewMonth(moment(date).format('YYYY-MM'));
                setShowCalendar(false);
              }
              if (event === 'dismissedAction') {
                setShowCalendar(false);
              }
            }}
            value={moment(viewMonth).toDate()}
            maximumDate={moment().toDate()}
            locale="en"
            mode="short"
          />
        </Modal>
      )}
    </>
  );
};

export default Calendar;
