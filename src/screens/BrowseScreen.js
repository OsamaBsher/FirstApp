import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const BrowseScreen = () => {
    return (
        <SafeAreaView>
            <Text style={styles.header}> WELCOME </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    header: {
        fontSize: 20
    }
});

BrowseScreen.navigationOptions = {
    title: 'تصفح',
    tabBarIcon: <Feather name="search" size={24} color="black" />,
  };

export default BrowseScreen;
