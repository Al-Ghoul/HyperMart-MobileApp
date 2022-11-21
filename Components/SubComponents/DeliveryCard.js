import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';
import { Shadow } from 'react-native-shadow-2';


const DeliveryCard = (props) => {
    return (
        <View style={{ alignItems: 'center' }}>
            <Shadow distance={.2} startColor={'#000'} containerViewStyle={{ alignSelf: 'center' }}>
                <View style={{ width: 318, height: 168, backgroundColor: '#fff', borderRadius: 16, alignSelf: 'center', }}>
                    <View style={{ paddingHorizontal: 14, paddingTop: 14, paddingBottom: 8 }}>
                        <Text style={{ color: '#14AB87', fontSize: 10, }}>Delivered</Text>
                        <Text style={{ color: '#303733', fontSize: 10, }}>On Wed, 27 Jul 2022</Text>
                    </View>
                    <View style={{ position: 'absolute', right: 0, backgroundColor: 'black' }}>
                        <View style={{
                            position: 'absolute',
                            right: 0,
                            backgroundColor: '#EA7173',
                            width: 30, height: 168,
                            borderTopEndRadius: 16, borderBottomEndRadius: 16,
                        }} />
                        <Text style={{
                            position: 'absolute',
                            right: -61,
                            top: 77,
                            fontSize: 8.7, color: '#FFF',
                            // backgroundColor: 'green',
                            transform: [{ rotate: '270deg' }],
                        }}>Order Again & Get Flat 10% OFF</Text>
                    </View>


                    <View style={{
                        flexDirection: 'row',
                        width: 261, height: 63,
                        backgroundColor: '#F7F7F7',
                        borderRadius: 12, marginHorizontal: 14, justifyContent: 'space-around',
                        alignItems: 'center'

                    }}>
                        <Image source={require('../../assets/icons/avocado-icon.png')} />
                        <Image source={require('../../assets/icons/foodDish-icon.png')} />
                        <Image source={require('../../assets/icons/sauces-icon.png',)} />
                        <View>
                            <Text style={{ alignSelf: 'center' }}>+5</Text>
                            <Text style={{}}>More</Text>
                        </View>
                    </View>

                    <View style={{
                        flex: 1,
                        flexDirection: 'row', width: 261,
                        justifyContent: 'space-between',
                        paddingTop: 8,
                        paddingBottom: 3,
                        marginHorizontal: 14,
                    }}>
                        <View style={{ justifyContent: 'space-between', }}>
                            <View style={{ flexDirection: 'row', }}>
                                <Text style={{ fontSize: 9 }}>Order ID : </Text>
                                <Text style={{ fontSize: 9 }}>#28292999</Text>
                            </View>

                            <View flexDirection={'row'}>
                                <Text style={{ fontSize: 16, paddingBottom: 3 }}>Final Total: </Text>
                                <Text>₹ 123</Text>
                            </View>
                        </View>

                        <Pressable style={{
                            width: 97, height: 36, backgroundColor: '#4AB7B6',
                            borderRadius: 12,
                            justifyContent: 'center',
                        }}>
                            <Text style={{ color: '#FFF', fontSize: 12, alignSelf: 'center' }}>Order Again</Text>
                        </Pressable>
                    </View>

                </View>
            </Shadow>
        </View>
    );
}

export default DeliveryCard;