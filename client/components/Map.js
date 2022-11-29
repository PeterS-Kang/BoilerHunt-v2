import { Text, View, StyleSheet, Dimensions, Alert } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import MapView from 'react-native-maps'
import * as Location from 'expo-location'
import * as TaskManager from 'expo-task-manager'
import axios from 'axios'
import { Marker } from 'react-native-maps'


const LOCATION_TASK_NAME = "LOCATION_TASK_NAME"


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
  
}

})

const Map = () => {
  
  const [locations, setLocations] = useState([])

  const [currentRegion, setCurrentRegion] = useState({
    latitude: 40.460,
    longitude: -86.9209,
    latitudeDelta: 0.005122,
    longitudeDelta: 0.005421
  })

  useEffect(() => {
    axios.get('http://localhost:4500/locations/')
    .then(response => {
      if (response.data.length > 0) {
        setLocations(response.data.map(locations => locations))
      }
    })
    .catch(err => console.log(err.response.data))
  }, [])


  const updateLocation = (place) => {
    const location = {
      _id: place._id,
      name: place.name,
      completed: true,
      latitude: place.latitude,
      longitude: place.longitude,
      __v: place.__v,
    }
    axios.post('http://localhost:4500/locations/update/' + place._id, location)
      .then(res => console.log(res.data))
  }

  useEffect(() => {
    let data = locations.filter(places => places.completed == false)
    for (var i = 0; i < data.length; i++) {

      if (Math.sqrt(Math.pow((currentRegion.latitude - data[i].latitude), 2) + Math.pow((currentRegion.longitude - data[i].longitude), 2)) <= 0.0002) {
        console.log(true)
        console.log(currentRegion.latitude)
        console.log(currentRegion.longitude)
        console.log(locations[i].name)
        console.log(locations[i].latitude)
        console.log(locations[i].longitude)
        updateLocation(locations[i])
        Alert.alert(
          "You reached " + locations[i].name, 
          "", 
          [
            {
              text: "Ok"
            }
          ]
        )

      } else {
        console.log(false)
      }
    }
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
          {locations.filter(places => places.completed == false).map((places) => {
            return (
              <Marker 
                title={places.name}
                coordinate = {{
                  latitude: places.latitude,
                  longitude: places.longitude
                }}
              />
            )
          })}
      </MapView>
    </View>
    )
}
const styles = StyleSheet.create({
    map: {
      width: Dimensions.get("window").width - 6,
      height: (Dimensions.get("window").height - (Dimensions.get("window").height * 0.336))
    },
  });

export default Map