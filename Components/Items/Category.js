import React from 'react';
import { View, Image, Text, } from 'react-native';

const Category = ({ item }) => {
    return (
        <View style={{ width: 90, height: 96, backgroundColor: item?.color, alignItems: 'center', justifyContent: 'center', borderRadius: 12 }}>
            <Image source={item.icon} styles={{ width: 30, height: 30, }} />
            <Text style={{ fontSize: 12, color: 'white', marginTop: 15 }}>{item.name}</Text>
        </View>);
}

export default Category;