import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import SearchBar from '../components/SearchBar';
import Nothing from '../components/Nothing';
import AskLogin from '../components/AskLogin';

const BrowseScreen = () => {

    const [choice, setChoice] = useState(true)

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar />
            <View style={styles.mainbox}>
                <TouchableOpacity 
                    style={choice ? styles.boxes : styles.boxes2}
                    disabled={!choice}
                    onPress={() => {setChoice(false)}}
                >
                    <Text style={choice ? styles.text : styles.text2}>البحوث المحفوظة</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={!choice ? styles.boxes : styles.boxes2}
                    disabled={choice}
                    onPress={() => {setChoice(true)}}
                >
                    <Text style={!choice ? styles.text : styles.text2}>البحوث السابقة</Text>  
                </TouchableOpacity>            
            </View>
            <View style={styles.bottomBox}>
                {choice ? <Nothing /> : <AskLogin value="لاستعمال المحفوظات" />}
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
        fontWeight: '600',
    },
    text2: {
        flex: 1,
        textAlign: 'center',
        fontSize: 22,
        fontWeight: '700',
    },
    boxes2: {
        borderBottomWidth: 2,
        width: 200,
        alignItems: 'center',
        flexDirection: 'row'
    },
    mainbox:{
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    bottomBox: {
        flex: 1,
        backgroundColor: '#F0EEEE'
    },
    boxes: {
        // borderBottomWidth: 2,
        width: 200,
        alignItems: 'center',
        flexDirection: 'row'
    }
});

BrowseScreen.navigationOptions = {
    title: 'تصفح',
    tabBarIcon: <Feather name="search" size={24} color="black" />,
  };

export default BrowseScreen;
