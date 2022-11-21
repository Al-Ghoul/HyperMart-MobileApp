import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createMyNavigator } from './Components/navigation/navigator';
import {
  NavigationContainer,
} from '@react-navigation/native';
import { Header, Location, SearchBar, SlideShow, Section, DeliveryCard, CategoryList, DealCardList, BrandList, ExclusiveBeautyDealList } from './Components/SubComponents';

const My = createMyNavigator();

const HomeScreen = () => {
  return (
    <>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ backgroundColor: '#fff' }}>

        <Location />

        <SearchBar />

        <SlideShow />

        <Section title={'Categories'} />

        <CategoryList />

        <Section title={'Previous Order'} hide />

        <DeliveryCard />

        <Section title={'Popular Deals'} />

        <DealCardList />

        <Section title={'Top Brands'} />

        <BrandList />

        <Section title={'Exclusive Beauty Deals'} />

        <ExclusiveBeautyDealList />

      </ScrollView>
    </>
  );
}

const FeedScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Something</Text>
    </View>
  );
}
export default function App() {
  return (

    <NavigationContainer>
      <StatusBar style="dark" />
      <My.Navigator tabBarStyle={{ backgroundColor: '#ff', borderTopWidth: .3, borderTopColor: 'gray', height: 45 }}>
        <My.Screen name="Home" component={HomeScreen} />
        <My.Screen name="Feed" component={FeedScreen} />
        <My.Screen name="Other" component={FeedScreen} />
        <My.Screen name="Other1" component={FeedScreen} />
      </My.Navigator>
    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
