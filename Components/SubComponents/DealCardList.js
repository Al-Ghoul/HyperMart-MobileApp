import React from 'react';
import { View } from 'react-native';
import DealCardItem from '../Items/DealCard';
import dealDataList from '../utils/Deals-DummyData';

export default function() {
    let viewList = [];

    for (let index = 0; index < dealDataList.length; ++index) {
        if (index % 2 === 0) {
            viewList.push(
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', paddingTop: index > 0 ? 20 : 0 }} key={index}>
                    <DealCardItem key={dealDataList[index].id} item={dealDataList[index]} />
                    <DealCardItem key={dealDataList[index + 1].id} item={dealDataList[index + 1]} />
                </View>
            );
        }
    };

    return (
        <>
            {
                viewList.map((item) => item)
            }
        </>
    );
}