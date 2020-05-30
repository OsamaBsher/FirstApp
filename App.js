import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import BrowseScreen from './src/screens/BrowseScreen';
import AccountScreen from './src/screens/AccountScreen';
import InboxScreen from './src/screens/InboxScreen';
import SavedScreen from './src/screens/SavedScreen';
import SellScreen from './src/screens/SellScreen';
import SearchScreen from './src/screens/SearchScreen';
import LogScreen from './src/screens/LogScreen';

const navigator = createBottomTabNavigator(
  {
    Account: AccountScreen,
    Saved: SavedScreen,
    Sell: SellScreen,
    Inbox: InboxScreen,
    Browse: BrowseScreen,
  },
  {
    initialRouteName: "Browse"
  }
);

navigator.navigationOptions = {
  headerShown: false,
}

const stack = createStackNavigator({
  navigator,
  Log: LogScreen,
  Search: SearchScreen,
})


const App = createAppContainer(stack);

export default () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}