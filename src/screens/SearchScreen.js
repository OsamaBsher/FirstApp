import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useHeaderHeight } from 'react-navigation-stack';
import { Feather } from '@expo/vector-icons';

const SearchScreen = () => {
    const [search, setSearch] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>عقار للبيع</Text>
                <View style={styles.searchBar}>
                    <Feather name="search" style={styles.icon}/>
                    <TextInput 
                        style={styles.search}
                        placeholder="ابحث"
                        onChangeText={(search) => setSearch(search)}
                        value={search}
                    />
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.text}>{search}</Text>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
    },
    header: {
        height: 155,
        top: 40
    },  
    bottomContainer: {
        flex: 1,
        backgroundColor: '#F0EEEE'
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        marginHorizontal: 30,
        marginVertical: 10
    },
    searchBar: {
        borderColor: '#DCDCDC',
        borderRadius: 40,
        marginHorizontal: 10,
        borderWidth: 2,
        flexDirection: 'row',
        height: 50,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    search: {
        flex: 1,
        fontSize: 18,
        marginHorizontal: 10,
        fontWeight: '600',
    },
    icon: {
        fontSize: 30,
        alignSelf: 'center',
    },
});

SearchScreen.navigationOptions = {
    title: '',
    headerTransparent: true
};

export default SearchScreen;
