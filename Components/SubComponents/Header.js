import React from 'react';
import { View, Text, Image } from 'react-native';

const Header = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, marginVertical: 30, }}>
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ color: '#4AB7B6', fontSize: 18 }}>Hyper</Text>
                <Text style={{ color: '#FDAA5D', fontSize: 18 }}>Mart</Text>
            </View>
            <Image source={require('../../assets/icons/notifications-icon.png')} />
        </View>
    );
}


export default Header;