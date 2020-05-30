import React, {useState} from 'react';
import {View, StyleSheet, Text, TouchableOpacity, TextInput} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

const LogScreen = ({navigation}) => {

    const [choice, setChoice] = useState(true)
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.back}
                    onPress={() => {navigation.goBack()}}
                >
                    <Entypo style={styles.chevron} name="chevron-thin-left" size={28} color="black" />
                </TouchableOpacity>
                <View style={styles.toprow}>
                    <Text style={styles.text3}>{choice ? "مرحبا بعودتك" : "مرحبا"}</Text>
                </View>
                <View style={styles.mainbox}>
                <TouchableOpacity 
                    style={choice ? styles.boxes : styles.boxes2}
                    disabled={!choice}
                    onPress={() => {setChoice(false)}}
                >
                    <Text style={choice ? styles.text : styles.text2}>تسجيل حساب جديد</Text>
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


                <Text style={styles.text5}>الايميل</Text>
                <View style={styles.inputbox}>

                    <TextInput 
                        style={styles.input}
                        placeholder='الايميل'
                        value={email}
                        onChangeText={(value) => setEmail(value)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        keyboardType="email-address"
                    />
                </View>

                <Text style={styles.text5}>كلمة السر</Text>
                <View style={styles.inputbox}>

                    <TextInput 
                        style={styles.input}
                        placeholder='كلمة السر'
                        value={password}
                        onChangeText={(value) => setPassword(value)}
                        autoCapitalize="none"
                        autoCorrect={false}
                        secureTextEntry={true}
                    />
                </View>

                <TouchableOpacity
                style={styles.btn}
                onPress={() => {navigation.navigate('Log')}}
                >
                    <Text style={styles.text4}>{choice ? "تسجيل الدخول" : "تسجيل حساب جديد"}</Text>
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
    back: {
        alignSelf: 'flex-start',
    },  
    header: {
        backgroundColor: 'white',
    },  
    bottomContainer: {
        paddingTop: 80,
        flex: 1,
        backgroundColor: 'white'
    },
    text3: {
        flex: 1,
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 30,
        top: 3,
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
        marginTop: 15,
        height: 45,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
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
        height: 45,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginHorizontal: 10
    },
    text4: {
        fontSize: 20,
        color: 'white',
        fontWeight: '600'
    },
    inputbox: {
        borderColor: 'grey',
        borderRadius: 10,
        marginHorizontal: 10,
        borderWidth: 2,
        flexDirection: 'row',
        height: 50,
        paddingHorizontal: 15,
        marginBottom: 15
    },
    text5: {
        fontSize: 22,
        fontWeight: '700',
        marginHorizontal: 20,
        marginVertical: 7
    },
    input: {
        flex: 1,
        fontSize: 18,
        textAlign: 'right'
    },
    toprow: {
        flexDirection: 'row',
        // bottom: 35
    }
});

LogScreen.navigationOptions = {
    headerShown: false
  };

export default LogScreen;
