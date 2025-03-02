import {
  backgroundColor,
  ExpenseType,
  faintBackgroundColor,
} from '@src/types/expense';
import React from 'react';
import {useWindowDimensions} from 'react-native';
import {BarChart} from 'react-native-gifted-charts';

type Props = {
  data: {
    type: ExpenseType;
    used: number;
    remaining: number;
  }[];
};

const StackProgressChart = ({data}: Props) => {
  // const stackData = [
  //   {
  //     stacks: [
  //       {value: 10, color: 'orange'},
  //       {value: 20, color: '#4ABFF4', marginBottom: 2},
  //     ],
  //     label: 'Jan',
  //   },
  //   {
  //     stacks: [
  //       {value: 10, color: '#4ABFF4'},
  //       {value: 11, color: 'orange', marginBottom: 2},
  //       {value: 15, color: '#28B2B3', marginBottom: 2},
  //     ],
  //     label: 'Mar',
  //   },
  //   {
  //     stacks: [
  //       {value: 14, color: 'orange'},
  //       {value: 18, color: '#4ABFF4', marginBottom: 2},
  //     ],
  //     label: 'Feb',
  //   },
  //   {
  //     stacks: [
  //       {value: 7, color: '#4ABFF4'},
  //       {value: 11, color: 'orange', marginBottom: 2},
  //       {value: 10, color: '#28B2B3', marginBottom: 2},
  //     ],
  //     label: 'Mar',
  //   },
  // ];
  const stackData = data.map(item => ({
    stacks: [
      {value: item.used, color: backgroundColor[item.type]},
      {value: item.remaining, color: faintBackgroundColor[item.type]},
    ],
    label: item.type,
  }));

  const width = useWindowDimensions().width;

  return (
    <BarChart
      width={width - 50}
      height={180}
      noOfSections={5}
      stackData={stackData}
      xAxisLabelTextStyle={{
        color: 'white',
        textAlign: 'center',
        marginLeft: -4,
      }}
      xAxisLabelTexts={Object.keys(ExpenseType)}
      barWidth={width / 8}
      spacing={10}
      yAxisLabelWidth={0}
      xAxisColor="#CDCDCD"
      yAxisColor="#CDCDCD"
    />
  );
};

export default StackProgressChart;
