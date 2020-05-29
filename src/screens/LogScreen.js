import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';
import { Input } from 'react-native-elements';

const LogScreen = ({navigation}) => {

    const [choice, setChoice] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.top}
                    onPress={() => {navigation.goBack()}}
                >
                    <Entypo style={styles.chevron} name="chevron-thin-left" size={28} color="black" />
                    <Text style={styles.text3}> مرحبا </Text>
                    
                </TouchableOpacity>
                <View style={styles.mainbox}>
                <TouchableOpacity 
                    style={choice ? styles.boxes : styles.boxes2}
                    disabled={!choice}
                    onPress={() => {setChoice(false)}}
                >
                    <Text style={choice ? styles.text : styles.text2}>تسجيل حساب</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={!choice ? styles.boxes : styles.boxes2}
                    disabled={choice}
                    onPress={() => {setChoice(true)}}
                >
                    <Text style={!choice ? styles.text : styles.text2}>تسجيل الدخول</Text>  
                </TouchableOpacity>
                </View>
            </View>

            <View style={styles.bottomContainer}>

                <Input label="Email" autoCapitalize="none" autoCorrect={false} value={email} onChangeText={(value) => setEmail(value)}/>

                <Input label="Password" secureTextEntry={true} autoCapitalize="none" autoCorrect={false} value={password} onChangeText={(value) => setPassword(value)}/>

                <TouchableOpacity
                style={styles.btn}
                onPress={() => {navigation.navigate('Log')}}
                >
                    <Text style={styles.text4}>تسجيل الدخول</Text>
                </TouchableOpacity>
            </View>


        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        backgroundColor: 'white'
    },  
    top: {
        flexDirection: 'row',
        marginTop: 5
    },  
    bottomContainer: {
        alignItems: 'center',
        paddingTop: 100,
        flex: 1,
        backgroundColor: '#F0EEEE'
    },
    text3: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 30,
        top: 3,
        right: 25,
        fontWeight: "700"
    },  
    chevron: {
        paddingTop: 10,
        alignSelf: 'center',
        paddingLeft: 15
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
        marginTop: 20,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    boxes: {
        // borderBottomWidth: 2,
        width: 200,
        alignItems: 'center',
        flexDirection: 'row'
    },
    btn: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    },
    text4: {
        fontSize: 20,
        color: 'white',
        fontWeight: '400'
    },
});

LogScreen.navigationOptions = {
    headerShown: false
  };

export default LogScreen;
