import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Location = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30 }}>
            <View style={{ flexDirection: 'row', }}>
                <View style={{ backgroundColor: '#4AB7B6', borderRadius: 30, width: 45, height: 45, alignItems: 'center', justifyContent: 'center', }}>
                    <Icon name={'map-marker-alt'} size={26} color={'white'} />
                </View>
                <View style={{ marginLeft: 15 }}>
                    <Text>Egypt</Text>
                    <Text>North sinai, AlArish</Text>
                </View>
            </View>
            <Icon style={{ alignSelf: 'center' }} name={'chevron-right'} size={20} color='gray' />
        </View>
    );
}

export default Location;