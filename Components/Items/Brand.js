import React from 'react';
import { Image } from 'react-native';

export default function ({ item }) {
    return (
        <Image source={item.image} />
    );
}