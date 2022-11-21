import React from 'react';
import { FlatList, View } from 'react-native';
import brandDataList from '../utils/Brand-DummyData';
import BrandItem from '../Items/Brand';

export default function () {
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: 'row', paddingHorizontal: 30, }}
            data={brandDataList}
            renderItem={BrandItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (<View style={{ width: 12, }}></View>)}
            horizontal
        />
    );
}