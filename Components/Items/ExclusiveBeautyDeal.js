import React from 'react';
import { View, Image, Text } from 'react-native';

export default function ({ item }) {
    return (
        <View style={{ width: 96, height: 70, borderRadius: 12, backgroundColor: '#EAEAEA', alignItems: 'center', alignSelf: 'center', marginBottom: 50 }}>
            <Image source={item.image} />
            <View style={{ width: 52, height: 52, borderRadius: 30, backgroundColor: '#4AB7B6', justifyContent: 'center', position: 'absolute', top: 52 * 0.75 }}>
                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 10 }}>Upto</Text>
                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 10 }}>{item.discountPercentage}%</Text>
                <Text style={{ color: '#FFF', textAlign: 'center', fontSize: 10 }}>OFF</Text>
            </View>
        </View>
    );
}