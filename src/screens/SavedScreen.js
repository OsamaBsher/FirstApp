import React from 'react';
import {StyleSheet, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialIcons } from '@expo/vector-icons';

const SavedScreen = () => {
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

SavedScreen.navigationOptions = {
    title: 'مفضلات',
    tabBarIcon: <MaterialIcons name="favorite-border" size={24} color="black" />,
  };

export default SavedScreen;
