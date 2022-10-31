import { Text, View, StyleSheet, Dimensions } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import MapView, { Marker } from 'react-native-maps'
import Locations from './Locations'
import * as Location from 'expo-location'
import * as TaskManager from 'expo-task-manager'
import { LocationAccuracy } from 'expo-location'
import { PROVIDER_GOOGLE } from 'react-native-maps'

const LOCATION_TASK_NAME = "LOCATION_TASK_NAME"

var LocationListArray = [{
  name: 'Stewart Center', 
  latitude: 40.4250, 
  longitude: -86.9126
}, 
{
  name: 'Windsor Dining Court',
  latitude: 40.4270,
  longitude: -86.9209
},
{
  name: 'Neil Armstrong Hall of Engineering',
  latitude:40.4310,
  longitude:-86.9148
},
{
  name: "Harrison Hall",
  latitude: 40.42490544985265, 
  longitude: -86.92642550317369
},
{
  name: "Discovery Learning Research Center",
  latitude: 40.42118918194457, 
  longitude: -86.92275087681448
},
{
  name: "Krannert School of Management",
  latitude: 40.423744457373104, 
  longitude: -86.91078299038391
}
]

let foregroundSubsription = null

TaskManager.defineTask(LOCATION_TASK_NAME, async ({ data, error }) => {
  if (error) {
    console.error(error)
    return
  }
  if (data) {
    // Extract location coordinates from data
    const { locations } = data
    let lat = locations[0].coords.latitude;
    let long = locations[0].coords.longitude;
    if (Math.pow((lat - 40.4270), 2) + Math.pow((long - -86.9209), 2) == 0.0000004) {
      //prompt photo
      //remove location from objectives and move to completed
    }
  }
})



const Map = () => {
  


  const [currentRegion, setCurrentRegion] = useState({
    latitude: 40.460,
    longitude: -86.9209,
    latitudeDelta: 0.005122,
    longitudeDelta: 0.005421
  })
  console.log(currentRegion)


  const [mapRegion, setMapRegion] = useState({
    latitude: 40.4260,
    longitude: -86.9209,
    latitudeDelta: 0.005122,
    longitudeDelta: 0.005421
  })


  {/** Location Tracker */}
  useEffect(() => {
    //check permissions
    const requestPermission = async() => {
      const foreground = await Location.requestForegroundPermissionsAsync()
      if (foreground.granted) await Location.requestBackgroundPermissionsAsync()
    }
    requestPermission()

    //start foreground tracking
    const startForegroundTracking = async() => {
      const { granted } = await Location.getForegroundPermissionsAsync()
      if (!granted) {
        console.log("Tracking Denied")
        return
      }
    
  
      foregroundSubsription?.remove()
  
      foregroundSubsription = await Location.watchPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation
      },

      )

    }
    startForegroundTracking()
    
    //start background tracking
    const startBackgroundTracking = async() => {
      const { granted } = await Location.requestBackgroundPermissionsAsync()
      if (!granted) {
        console.log("Tracking Denied")
        return
      }
  
      await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
        Accuracy: Location.Accuracy.BestForNavigation,
        foregroundService: {
          notificationTitle: "Location",
          notificationBody: "Location tracking in Background",
          notificationColor: "#fff"
        }})
      
      location = await Location.watchPositionAsync(
        {
          Accuracy:Location.Accuracy.BestForNavigation
        },
        newLocation => {
          let { coords } = newLocation

          setCurrentRegion({
            latitude: coords.latitude,
            longitude: coords.longitude,
            latitudeDelta: 0.005122,
            longitudeDelta: 0.005421
          })
        }
      )
      
    }
    startBackgroundTracking()
  },
   [])

    return (
      
    <View className="mx-1">


      <MapView 
        region={currentRegion}
        style={styles.map}
        showsUserLocation={true}
        >
          <View className="absolute center-align">
            
          </View>
          <Locations coordinates={currentRegion}/>
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