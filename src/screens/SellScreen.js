import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';

const SellScreen = () => {
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

SellScreen.navigationOptions = {
    title: 'ضف اعلان',
    tabBarIcon: <FontAwesome5 name="plus-square" size={24} color="black" />,
  };

export default SellScreen;
