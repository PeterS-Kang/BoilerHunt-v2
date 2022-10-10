import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect } from 'react';
import { useNavigation } from '@react-navigation/native';

import Map from '../components/Map';
import Categories from '../components/Categories';
const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);


return (
    <SafeAreaView className="bg-white pt-5 flex-1">
        {/* Header */}
        <View className="flex-row pb-3 items-center mx-4 space-x-3">
            <Image
                source={{
                    uri: "https://cdn-icons-png.flaticon.com/512/3176/3176396.png",
                }}
                className="h-7 w-7 bg-gray-300, , rounded-full"
            />
        <View>
            <Text className="font-bold text-xl">
                BoilerHunt
            </Text>
            <Text className="font-bold text-l">
                Purdue University
            </Text>
        </View>
        </View>

        {/*Search*/}
        <View className="flex-row items-center space-x-2 pb-2 mx-3 px-4">
            <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
                <TextInput
                 placeholder="Search"
                 keyboardType='default'
                />
            </View>


        </View>

        {/* Body */}
        <ScrollView 
        alwaysBounceVertical={true}
        className="bg-gray-100">

            {/* Map */}
            <Map/>

            {/* Categories */}
            <Categories/>




        </ScrollView>
    </SafeAreaView>

  );
};

export default HomeScreen