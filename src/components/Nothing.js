import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

const Nothing = ({value}) => {

    return (
        <View style={styles.container}>
            <View style={styles.container2}>
                <Text style={styles.text} >لا يوجد شيء يمكن عرضه حاليا</Text>
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
});

export default Nothing;
