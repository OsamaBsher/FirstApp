import React, {useState} from 'react';
import {View, StyleSheet, TextInput, Text, TouchableOpacity} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = () => {
    
    const [search, setSearch] = useState('');
    const [choice, setChoice] = useState(1)

    return (
        <View style={styles.container}>
            <TouchableOpacity 
                style={styles.selector}
                title="lol"
                onPress={() => {
                    if(choice) setChoice(0)
                    else setChoice(1)
                }}
            >
            {choice ? <Text style={styles.text} >للبيع</Text> : <Text style={styles.text}>للايجار</Text>}
            </TouchableOpacity>
            <Feather name="search" style={styles.icon}/>
            <TextInput 
                style={styles.search}
                placeholder="ابحث"
                onChangeText={(search) => setSearch(search)}
                value={search}
            />
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        borderColor: '#F0EEEE',
        borderRadius: 40,
        margin: 15,
        borderWidth: 2,
        flexDirection: 'row',
        height: 50,
        paddingHorizontal: 15
    },
    search: {
        flex: 1,
        fontSize: 18,
        margin: 5,
        fontWeight: '600'
    },
    icon: {
        fontSize: 30,
        alignSelf: 'center',
        marginLeft: 6,
    },
    selector: {
        borderRightColor: '#C0C0C0',
        borderRightWidth: 1,
        marginLeft: 5,
        width: 80,
        height: 30,
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    text: {
        fontSize: 18,
        flex: 1,
        paddingRight: 25,
        fontWeight: '600'
    }
});

export default SearchBar;
