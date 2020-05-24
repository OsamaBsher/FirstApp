import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar'

const BrowseScreen = () => {

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar />
            <View style={styles.mainbox}>
                <View style={styles.boxes}>
                    <Text style={styles.text}>البحوث السابقة</Text>
                </View>
                <View style={styles.boxes}>
                    <Text style={styles.text}>العروض البارزة</Text>              
                </View>
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
    text: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '700',
        marginBottom: 10,
    },
    mainbox:{
        height: 45,
        flexDirection: 'row',
    },
    bottomBox: {
        flex: 1,
        backgroundColor: '#F0EEEE'
    },
    boxes: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
});

BrowseScreen.navigationOptions = {
    title: 'تصفح',
    tabBarIcon: <Feather name="search" size={24} color="black" />,
  };

export default BrowseScreen;
