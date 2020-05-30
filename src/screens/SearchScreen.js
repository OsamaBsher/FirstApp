import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

const SearchScreen = ({navigation}) => {
    const [search, setSearch] = useState('');
    const [focus, setFocus] = useState(null);

    // const  choice  = choice;
    const {choice} = navigation.state.params;

    useEffect(() => {
        if (focus) focus.focus();
    }, [focus])

    const cities = [
        {
            city: "طرابلس"
        },
        {
            city: "بنغازي"
        },
        {
            city: "مصراتة"
        },
        {
            city: "زليتن"
        },
        {
            city: "الزاوية"
        },
        {
            city: "البيضاء"
        },
        {
            city: "غريان"
        },
        {
            city: "طبرق"
        },
        {
            city: "صبراتة"
        },
        {
            city: "سبها"
        },
        {
            city: "الخمس"
        },
        {
            city: "درنة"
        },
        {
            city: "سرت"
        },
        {
            city: "الجميل"
        },
        {
            city: "الكفرة"
        },
        {
            city: "المرج"
        },
        {
            city: "يفرن"
        },
    ]

    const [cityList, setCityList] = useState([]);

    const setCities = (s) => {
        if(s === ""){return setCityList([]);}
        const list = cities.filter(city => {return city.city.search(new RegExp('^'+s)) >= 0});
        return setCityList(list);
    }

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity 
                    style={styles.top}
                    onPress={() => {navigation.navigate('Browse')}}
                >
                    <Entypo style={styles.chevron2} name="chevron-thin-left" size={28} color="black" />
                </TouchableOpacity>
                <Text style={styles.text}>{choice ? "عقار للبيع" : "عقار للايجار"}</Text>
                <View style={styles.searchBar}>
                <Feather name="search" style={styles.icon}/>
                <TextInput 
                    style={styles.search}
                    placeholder="ابحث"
                    autoFocus={false}
                    ref={(input) => {setFocus(input)}}
                    onChangeText={(search) => {
                        setSearch(search)
                        setCities(search)
                        }
                    }
                    value={search}
                />
                </View>
            </View>

            <View style={styles.bottomContainer}>
                <FlatList
                data={cityList}
                keyExtractor={item => item.city}
                renderItem={({item}) => {
                    return <TouchableOpacity style={styles.buttons}>
                        <Text style={styles.text2}>{item.city}</Text>
                        <Entypo style={styles.chevron} name="chevron-thin-left" size={24} color="black" />
                    </TouchableOpacity>
                }}
                />
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
        height: 155,
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: 'lightgrey'
    },  
    top: {
        height: 50,
        width: 50,
        flexDirection: 'row',
    },  
    bottomContainer: {
        flex: 1,
        backgroundColor: '#F0EEEE'
    },
    text: {
        fontSize: 30,
        fontWeight: '700',
        marginHorizontal: 30,
        marginBottom: 10
    },
    searchBar: {
        borderColor: '#F0F0F0',
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
        textAlign: 'right'
    },
    icon: {
        fontSize: 30,
        alignSelf: 'center',
    },
    buttons: {
        height: 50,
        backgroundColor: 'white',
        flexDirection: 'row-reverse',
        borderBottomWidth: 1,
        borderBottomColor: '#DCDCDC',
        justifyContent: 'space-between'
    },  
    text2: {
        fontSize: 18,
        fontWeight: '600',
        alignSelf: 'center',
        paddingRight: 20,
    },
    chevron: {
        alignSelf: 'center',
        paddingLeft: 10
    },
    chevron2: {
        alignSelf: 'center',
        paddingLeft: 15
    }
});

SearchScreen.navigationOptions = {
    headerShown: false,
};

export default SearchScreen;
