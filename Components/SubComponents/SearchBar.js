import React from 'react';
import { View, TextInput, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const SearchBar = () => {
    return (
        <View style={{ flexDirection: 'row', backgroundColor: '#EFF1F3', height: 54, borderRadius: 10, margin: 30, }}>
            <Icon style={{ alignSelf: 'center', padding: 15 }} name={'search'} size={20} color='#7D8FAB' />
            <TextInput style={{ width: '65%' }} placeholder='Search anything...' placeholderTextColor={'#7D8FAB'} />

            <View style={{ flexDirection: 'row', position: 'absolute', right: 20 }}>
                <Image source={require('../../assets/icons/pipe-icon.png')} style={{ height: 20, alignSelf: 'center' }} />
                <Icon style={{ alignSelf: 'center', padding: 15 }} name={'microphone'} size={20} color='#4AB7B6' />
            </View>
        </View>
    );
}

export default SearchBar;