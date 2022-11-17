import { View, Text } from 'react-native'
import React from 'react'
import Markers from './Markers'

const Locations = () => {
  
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

  return (
    <View>
      {LocationListArray.map((places) => {
        return (
          <Markers name={places.name}
          coordinates={{
            latitude: places.latitude,
            longitude: places.longitude
          }} />
        )
      })}

    </View>
  )
}

export default Locations