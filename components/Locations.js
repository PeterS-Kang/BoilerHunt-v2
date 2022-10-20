import { View, Text } from 'react-native'
import React from 'react'
import Markers from './Markers'

const Locations = () => {
  return (
    <View>
        <Markers 
          name='Stewart Center'
          coordinates={{
            latitude: 40.4250,
            longitude: -86.9209
        }}/>
        <Markers
          name='Windsor Dining Court'
          coordinates={{
            latitude:40.4270,
            longitude:-86.9206
          }}
          />
        <Markers
            name='Neil Armstrong Hall of Engineering'
            coordinates={{
                latitude:40.4310,
                longitude:-86.9148
            }}
        />

    </View>
  )
}

export default Locations