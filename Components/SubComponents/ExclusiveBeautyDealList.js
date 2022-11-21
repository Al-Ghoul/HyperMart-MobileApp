import React from 'react';
import { View } from 'react-native';
import ExclusiveBeautyDealItem from '../Items/ExclusiveBeautyDeal';
import exclusiveBeautyDataList from '../utils/BeautyDeals-DummyData';

export default function () {
    let viewList = [];

    for (let index = 0; index < exclusiveBeautyDataList.length; ++index) {
        if (index % 3 === 0) {
            viewList.push(
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', }} key={index}>
                    <ExclusiveBeautyDealItem key={exclusiveBeautyDataList[index].id} item={exclusiveBeautyDataList[index]} />
                    <ExclusiveBeautyDealItem key={exclusiveBeautyDataList[index + 1].id} item={exclusiveBeautyDataList[index + 1]} />
                    <ExclusiveBeautyDealItem key={exclusiveBeautyDataList[index + 2].id} item={exclusiveBeautyDataList[index + 2]} />
                </View>
            );
        }
    };
    return (
        <View style={{ paddingHorizontal: 30 }}>
            {
                viewList.map((item) => item)
            }
        </View>
    );
}