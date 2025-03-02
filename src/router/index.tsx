import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Calendar from '@src/components/calendar';
import ExportExpense from '@src/components/export-expense';
import BucketList from '@src/screens/bucket-list';
import FinancialManagement from '@src/screens/financial-management';
import * as React from 'react';
import {useWindowDimensions} from 'react-native';

const Drawer = createDrawerNavigator();

function Router() {
  const width = useWindowDimensions().width;

  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerActiveTintColor: '#FF8F8F',
          swipeEnabled: true,
          swipeEdgeWidth: width,
          drawerActiveBackgroundColor: '#FF8F8F',
          headerStyle: {
            backgroundColor: '#1E1E1E',
          },
          drawerLabelStyle: {
            color: '#fff',
          },
          drawerContentStyle: {
            backgroundColor: '#1E1E1E',
          },
          headerTintColor: '#fff',
          headerLeft: () => null,
        }}>
        <Drawer.Screen
          options={{
            headerLeft: ({}) => <Calendar />,
            headerRight: ({}) => <ExportExpense />,
          }}
          name="Expense"
          component={FinancialManagement}
        />
        <Drawer.Screen name="Bucket" component={BucketList} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default Router;
