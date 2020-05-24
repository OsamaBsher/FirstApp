import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';

const AskLogin = ({value}) => {

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.text} >قم بتسجيل الدخول {value}</Text>
                <TouchableOpacity
                style={styles.btn}

                >
                    <Text style={styles.text2}>تسجيل الدخول</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container2: {
        alignItems: 'center',
        justifyContent: 'center',
        bottom: 20
    },
    text: {
        fontSize: 22
    },
    text2: {
        fontSize: 20,
        color: 'white',
        fontWeight: '400'
    },
    btn: {
        marginTop: 20,
        backgroundColor: '#4CAF50',
        width: 300,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40,
    }
});

export default AskLogin;
