import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AskLogin from '../components/AskLogin';
import Nothing from '../components/Nothing';


const SavedScreen = () => {

    const [choice, setChoice] = useState(true)
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}> العقارات</Text>
            </View>
            <View style={styles.mainbox}>
                <TouchableOpacity 
                    style={choice ? styles.boxes : styles.boxes2}
                    disabled={!choice}
                    onPress={() => {setChoice(false)}}
                >
                    <Text style={choice ? styles.text : styles.text2}>المحفوظة</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={!choice ? styles.boxes : styles.boxes2}
                    disabled={choice}
                    onPress={() => {setChoice(true)}}
                >
                    <Text style={!choice ? styles.text : styles.text2}>السابقة</Text>  
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

SavedScreen.navigationOptions = {
    title: 'العقارات',
    tabBarIcon: <MaterialCommunityIcons name="home-outline" size={30} color="black" />,
  };

export default SavedScreen;
