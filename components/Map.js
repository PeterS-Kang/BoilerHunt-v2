import { Text, View, StyleSheet, Dimensions, useState } from 'react-native'
import React, { Component, useEffect } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Locations from './Locations'
import * as Location from 'expo-location'

const Map = () => {


  
    return (
    <View className="mx-1">
      <MapView region={{
        latitude: 40.4260,
        longitude: -86.9209,
        latitudeDelta: 0.00122,
        longitudeDelta: 0.0421,}} 
        style={styles.map}>
          <Locations/>
      </MapView>
    </View>
    )
}
const styles = StyleSheet.create({
    map: {
      width: Dimensions.get("window").width - 6,
      height: (Dimensions.get("window").height - (Dimensions.get("window").height * 0.4))
    },
  });

export default Map