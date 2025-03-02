import AngleDownIcon from '@src/assets/icons/angle-down';
import React, {useEffect, useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import ReactNativeModal from 'react-native-modal';
import Text from './text';
import {getAllExpensesMonths} from '@src/mmkv/expense';
import moment from 'moment';

const ExportExpense = () => {
  const [showSheet, setShowSheet] = useState(false);
  const [data, setData] = useState<string[]>([]);

  useEffect(() => {
    setData(getAllExpensesMonths());
  }, []);

  return (
    <>
      <TouchableOpacity
        className="flex-row items-center"
        onPress={() => setShowSheet(true)}>
        <Text className="text-[14px] leading-[16px] font-semibold ml-[16px] text-pink-primary">
          Export
        </Text>
        <AngleDownIcon />
      </TouchableOpacity>

      <ReactNativeModal
        isVisible={showSheet}
        onBackdropPress={() => setShowSheet(false)}
        onBackButtonPress={() => setShowSheet(false)}
        // bottom half of the screen
        className="justify-end m-0">
        <View className="bg-black-primary pb-10">
          <Text>Export</Text>

          <FlatList
            data={data}
            renderItem={({item}) => (
              <Text>{moment(item, 'YYYY-MM').format('MM/YY')}</Text>
            )}
            keyExtractor={item => item}
          />
        </View>
      </ReactNativeModal>
    </>
  );
};

export default ExportExpense;
