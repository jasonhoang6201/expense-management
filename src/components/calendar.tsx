import AngleDownIcon from '@src/assets/icons/angle-down';
import useExpenseStore from '@src/store/expense';
import moment from 'moment';
import React, {useState} from 'react';
import {TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
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

      <ReactNativeModal
        isVisible={showCalendar}
        onBackdropPress={() => setShowCalendar(false)}
        onBackButtonPress={() => setShowCalendar(false)}
        // bottom half of the screen
        className="justify-end m-0">
        <View className="bg-black-primary pb-10">
          <MonthPicker
            onChange={(event, date) => {
              if (event === 'dateSetAction') {
                setViewMonth(moment(date).format('YYYY-MM'));
                setShowCalendar(false);
              }
            }}
            value={moment(viewMonth).toDate()}
            maximumDate={moment().toDate()}
            locale="en"
            mode="short"
            autoTheme
          />
        </View>
      </ReactNativeModal>
    </>
  );
};

export default Calendar;
