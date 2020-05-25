import React, {useState} from 'react';
import {View, StyleSheet, Text, TextInput, FlatList, TouchableOpacity} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather } from '@expo/vector-icons';
import {ListItem} from 'react-native-elements';

const SearchScreen = () => {
    const [search, setSearch] = useState('');

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
                <Text style={styles.text}>عقار للبيع</Text>
                <View style={styles.searchBar}>
                    <Feather name="search" style={styles.icon}/>
                    <TextInput 
                        style={styles.search}
                        placeholder="ابحث"
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
                    return <TouchableOpacity >
                        <ListItem chevron title={item.city} />
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
