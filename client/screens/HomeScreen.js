import { View, Text, SafeAreaView, Image, Button, ScrollView } from 'react-native';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Map from '../components/Map';
import Categories from '../components/Categories';


const HomeScreen = () => {
    const navigation = useNavigation();

    useLayoutEffect(() => {
        navigation.setOptions({
            headerShown: false,
        });
    }, []);

    const [locations, setLocations] = useState([])

    useEffect(() => {
        axios.get('http://localhost:4500/locations/')
          .then(response => {
            if (response.data.length > 0) {
              setLocations(response.data.map(locations => locations.name))
            }
          })
          .catch(err => console.log(err.response.data))
      }, [locations.length])


      const resetLocation = () => {

      }

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

        {/* Body */}
        <View 
        alwaysBounceVertical={true}
        className="border-2 border-gray-300 rounded-lg mx-1">

            {/* Map */}
            <Map/>            



        </View>
        <View>
          {/* Categories */}
            <Categories/>
        </View>
    </SafeAreaView>

  );
};

export default HomeScreen