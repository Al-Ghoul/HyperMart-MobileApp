import React from 'react';
import { FlatList, View } from 'react-native';
import CategoryDataList from '../utils/Categories-DummyData';
import CategoryItem from '../Items/Category';

const CategoryList = () => {
    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ flexDirection: 'row', paddingHorizontal: 30, }}
            data={CategoryDataList}
            renderItem={CategoryItem}
            keyExtractor={item => item.id}
            ItemSeparatorComponent={() => (<View style={{ width: 12, }}></View>)}
            horizontal
        />
    );
}

export default CategoryList;