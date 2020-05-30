import React, {useState} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchBar from '../components/SearchBar';
import Nothing from '../components/Nothing';
import AskLogin from '../components/AskLogin';
import { Feather } from '@expo/vector-icons';

const BrowseScreen = ( {navigation} ) => {

    const [choice, setChoice] = useState(true)

    return (
        <SafeAreaView style={styles.container}>
            <SearchBar navigation={navigation}/>
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
                {choice ? <Nothing /> : <AskLogin value="لاستعمال المحفوظات" navigation={navigation}/>}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: 'white'
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
        justifyContent: 'space-evenly',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
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
    headerShown: false,
    title: 'تصفح',
    tabBarIcon: <Feather name="search" size={24} color="black" />,
  };
  

export default BrowseScreen;
