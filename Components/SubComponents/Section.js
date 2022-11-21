import React from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Section = (props) => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 30, marginVertical: 30 }}>
            <View style={{ flexDirection: 'row', }}>
                <Text style={{ fontSize: 16 }}>{props.title}</Text>
            </View>
            {!props?.hide && <Icon style={{ alignSelf: 'center' }} name={'chevron-right'} size={20} color='gray' />}
        </View>
    );
}

export default Section;