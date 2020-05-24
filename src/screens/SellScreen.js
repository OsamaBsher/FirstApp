import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesome5 } from '@expo/vector-icons';
import AskLogin from '../components/AskLogin';

const SellScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> انشر اعلان</Text>
            </View>
            <View style={styles.bottomBox}>
                <AskLogin value="لنشر اعلان"/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
    header: {
        height: 70,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 35,
        fontWeight: '700',
    },
    bottomBox: {
        flex: 1,
        backgroundColor: '#F0EEEE'
    },
});

SellScreen.navigationOptions = {
    title: 'انشر اعلان',
    tabBarIcon: <FontAwesome5 name="plus-square" size={24} color="black" />,
  };

export default SellScreen;
