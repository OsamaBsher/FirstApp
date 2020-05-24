import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';

const InboxScreen = () => {
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

InboxScreen.navigationOptions = {
    title: 'البريد',
    tabBarIcon: <Feather name="inbox" size={24} color="black" />,
  };

export default InboxScreen;
