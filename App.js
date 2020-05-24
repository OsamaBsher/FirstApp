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

const App = createAppContainer(navigator);

export default () => {
  return (
    <SafeAreaProvider>
      <App />
    </SafeAreaProvider>
  );
}