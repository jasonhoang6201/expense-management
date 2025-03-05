import AngleDownIcon from '@src/assets/icons/angle-down';
import CloseIcon from '@src/assets/icons/close-icon';
import {getAllExpensesByMonth, getAllExpensesMonths} from '@src/mmkv/expense';
import moment from 'moment';
import React, {useEffect, useState} from 'react';
import {Alert, FlatList, TouchableOpacity, View} from 'react-native';
import ReactNativeBlobUtil from 'react-native-blob-util';
import ReactNativeModal from 'react-native-modal';
import Text from './text';

const ExportExpense = () => {
  const [showSheet, setShowSheet] = useState(false);
  const [data, setData] = useState<string[]>([]);

  const handleExport = async () => {
    try {
      // save to csv file
      const header = 'Month,Data\n';
      let csvRows = '';
      data.forEach(item => {
        const expense = getAllExpensesByMonth(item);
        expense.forEach(x => {
          csvRows += `${x.month},${JSON.stringify(x)}\n`;
        });
      });
      const csvString = header + csvRows;

      const path = `${ReactNativeBlobUtil.fs.dirs.DownloadDir}/data.csv`;

      await ReactNativeBlobUtil.fs
        .writeFile(path, csvString, 'utf8')
        .then(() => {
          Alert.alert('CSV file saved to: ', path);
        });
    } catch (error) {
      Alert.alert('Error saving CSV file: ', JSON.stringify(error));
    }
  };

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
        <View className="bg-black-primary rounded-t-[20px] p-[20px] min-h-[50vh] w-[100vw]">
          <View className="flex-row items-center justify-between z-[99]">
            <Text className="text-[16px] font-semibold">Export</Text>
            <TouchableOpacity onPress={() => setShowSheet(false)}>
              <CloseIcon />
            </TouchableOpacity>
          </View>

          <FlatList
            data={data}
            renderItem={({item}) => (
              <Text className="text-[16px] leading-[24px] font-semibold text-white">
                - {moment(item, 'YYYY-MM').format('MM/YY')}
              </Text>
            )}
            keyExtractor={item => item}
          />

          <View className="my-[12px]">
            <TouchableOpacity
              className="bg-pink-primary rounded-[4px] p-[8px]"
              onPress={handleExport}>
              <Text className="text-[16px] leading-[24px] font-semibold text-white text-center">
                Export
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ReactNativeModal>
    </>
  );
};

export default ExportExpense;
