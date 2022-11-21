import * as React from 'react';
import { Pressable, View, StyleSheet, Alert, SafeAreaView } from 'react-native';
import {
    useNavigationBuilder,
    createNavigatorFactory,
    TabRouter,
    TabActions,
} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Shadow } from 'react-native-shadow-2';

function TabNavigator({
    initialRouteName,
    children,
    screenOptions,
    tabBarStyle,
    contentStyle,
}) {
    const { state, navigation, descriptors, NavigationContent } =
        useNavigationBuilder(TabRouter, {
            children,
            screenOptions,
            initialRouteName,
        });

    return (
        <NavigationContent>
            <View style={[{ flex: 1 }, contentStyle, { backgroundColor: '#fff' }]}>
                {state.routes.map((route, i) => {
                    return (
                        <SafeAreaView
                            key={route.key}
                            style={[
                                StyleSheet.absoluteFill,
                                { display: i === state.index ? 'flex' : 'none' },
                            ]}
                        >
                            {descriptors[route.key].render()}
                        </SafeAreaView>
                    );
                })}
            </View>
            <View style={[{ flexDirection: 'row' }, tabBarStyle,]}>
                {state.routes.map((route) => {
                    let iconName;
                    switch (route.name) {
                        case 'Home':
                            iconName = 'home';
                            break;
                        case 'Feed':
                            iconName = 'border-all';
                            break;
                        case 'Other':
                            iconName = 'heart';
                            break;
                        case 'Other1':
                            iconName = 'user';
                            break;
                    }
                    return (
                        <Pressable
                            key={route.key}
                            onPress={() => {
                                const event = navigation.emit({
                                    type: 'tabPress',
                                    target: route.key,
                                    canPreventDefault: true,
                                });

                                if (!event.defaultPrevented) {
                                    navigation.dispatch({
                                        ...TabActions.jumpTo(route.name),
                                        target: state.key,
                                    });
                                }
                            }}
                            style={{ flex: 1, alignItems: 'center', marginTop: 5, }}
                        >
                            <Icon name={iconName} size={26} color={(route.key == state.routes[state.index].key) ? '#FDAA5D' : 'gray'} />

                        </Pressable>
                    )
                })}
            </View>

            <View style={{
                position: 'absolute',
                bottom: 15,
                right: 0,
                left: 0,
                alignItems: 'center'
            }}>
                <Shadow distance={2} startColor={'#C5C5C5'} offset={[0, 2]}>
                    <Pressable
                        onPress={() => { Alert.alert('Cart Button', 'Well this button doesn\'t do anything useful.') }}
                        style={{
                            width: 60, height: 60, backgroundColor: '#FDAA5D',
                            alignItems: 'center',
                            justifyContent: 'center', borderRadius: 30, borderColor: '#FFF', borderWidth: 2
                        }}>
                        <Icon name={'shopping-cart'} size={26} color={'white'} />
                        <View style={{
                            width: 10, height: 10,
                            borderRadius: 30, borderWidth: 1, borderColor: '#F3FFF9',
                            backgroundColor: '#EA7173',
                            position: 'absolute',
                            right: 8,
                            top: 15
                        }} />
                    </Pressable>
                </Shadow>
            </View>
        </NavigationContent>
    );
}

// ...

export const createMyNavigator = createNavigatorFactory(TabNavigator);