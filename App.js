import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BrowseScreen from './src/screens/BrowseScreen';
import AccountScreen from './src/screens/AccountScreen';
import InboxScreen from './src/screens/InboxScreen';
import SavedScreen from './src/screens/SavedScreen';
import SellScreen from './src/screens/SellScreen';
import SearchScreen from './src/screens/SearchScreen';

import { Feather } from '@expo/vector-icons';

const SearchFlow = createStackNavigator({
  Browse: BrowseScreen,
  Search: SearchScreen,
})

SearchFlow.navigationOptions = {
  title: 'تصفح',
  tabBarIcon: <Feather name="search" size={24} color="black" />,
};

const navigator = createBottomTabNavigator(
  {
    Account: AccountScreen,
    Saved: SavedScreen,
    Sell: SellScreen,
    Inbox: InboxScreen,
    SearchFlow
  },
  {
    initialRouteName: "SearchFlow"
  }
);

const App = createAppContainer(navigator);

export default () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}