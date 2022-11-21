import React from 'react';
import { View, Image, Text, Pressable } from 'react-native';
import { Shadow } from 'react-native-shadow-2';

export default function ({ item }) {
    return (
        <View style={{ flex: 1, alignItems: 'center', }}>
            <Shadow distance={.2} startColor={'#000'} >
                <View style={{ width: 150, height: 260, alignSelf: 'center', borderRadius: 12, justifyContent: 'space-around', }}>
                    <Image source={require('../../assets/icons/heart-outline-icon.png')} style={{ left: 10, marginTop: 10 }} />
                    <Image source={item.image} style={{ alignSelf: 'center' }} />
                    <Text style={{ textAlign: 'center', }} adjustsFontSizeToFit allowFontScaling >{item.label}</Text>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                        <Text>₹ {item.price}</Text>
                        <View style={{ flexDirection: 'row', }}>
                            {item?.rating != 0 && <Text style={{ color: '#EA7173', paddingRight: 5 }}>{item.rating}</Text>}
                            <Image source={require('../../assets/icons/star-icon.png')} />
                        </View>
                    </View>

                    {item?.quantityState &&
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', }}>
                            <Pressable style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: '#EA7173', justifyContent: 'center' }}>
                                <Text style={{ color: '#FFF', alignSelf: 'center' }}>-</Text>
                            </Pressable>
                            <Text style={{ alignSelf: 'center', fontSize: 14, color: '#14AB87' }}>2</Text>
                            <Pressable style={{ width: 36, height: 36, borderRadius: 12, backgroundColor: '#4AB7B6', justifyContent: 'center', }}>
                                <Text style={{ color: '#FFF', alignSelf: 'center' }}>+</Text>
                            </Pressable>
                        </View>}

                    {!item?.quantityState &&
                        <Pressable style={{ height: 36, borderRadius: 12, borderWidth: 1, borderColor: '#FDAA5D', marginHorizontal: 10, justifyContent: 'center' }}>
                            <Text style={{ color: '#FDAA5D', textAlign: 'center', }}>Add to cart</Text>
                        </Pressable>}
                </View>
            </Shadow>
        </View>
    );
}