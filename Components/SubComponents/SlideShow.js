import React from 'react';
import { View, Image } from 'react-native';

const SlideShow = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', paddingHorizontal: 15 }}>
            <View style={{ backgroundColor: '#BFDAC8', width: 14, height: 140, position: 'absolute', left: 0, borderTopEndRadius: 12, borderBottomEndRadius: 12, }}></View>
            <Image source={require('../../assets/images/vegs.png')} />
            <View style={{ backgroundColor: '#6ECB9E', width: 14, height: 140, position: 'absolute', right: 0, borderTopStartRadius: 12, borderBottomStartRadius: 12 }}></View>
        </View>
    );
}

export default SlideShow;