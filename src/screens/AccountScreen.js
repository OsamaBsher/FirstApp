import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const AccountScreen = () => {
    return (
        <SafeAreaView>
            <Text style={styles.header}> السلام عليكم </Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    // container: { style={styles.container}
    //     backgroundColor: '#F8F8F8',
    //     flex: 1,
    // },
    header: {
        fontSize: 20,
    }
});

AccountScreen.navigationOptions = {
    title: 'حسابي',
    tabBarIcon: <MaterialCommunityIcons name="account-outline" size={30} color="black" />,
  };

export default AccountScreen;
