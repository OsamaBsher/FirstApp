import React, {useState} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import AskLogin from '../components/AskLogin';


const InboxScreen = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> البريد</Text>
            </View>
            <View style={styles.bottomBox}>
                <AskLogin value="لاستعمال البريد" navigation={navigation}/>
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
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
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

InboxScreen.navigationOptions = {
    title: 'البريد',
    tabBarIcon: <Feather name="inbox" size={24} color="black" />,
  };

export default InboxScreen;
