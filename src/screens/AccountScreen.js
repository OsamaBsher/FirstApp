import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AccountScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> الاعدادات</Text>
            </View>
            <View style={styles.bottomBox}>
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

AccountScreen.navigationOptions = {
    title: 'الاعدادات',
    tabBarIcon: <MaterialCommunityIcons name="settings-outline" size={30} color="black" />,
  };

export default AccountScreen;
