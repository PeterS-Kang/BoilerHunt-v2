import { View, Text, SectionList, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'

const Objectives = () => {
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
      <ScrollView className="flex-1 bg-white px-2">
        {LocationListArray.map((places) => {
          return (
            <TouchableOpacity 
            className="container-sm box-border p-10 border-2 border-white flex-1 mb-1 bg-blue-500 px-8 rounded-lg"
            >
              <Text className="px-1 font-bold text-white">Go to</Text> 
              <Text className="font-bold text-xl text-left text-white">
                {places.name}
              </Text>
            </TouchableOpacity>


          )
        })}
      </ScrollView>
   )
  }


export default Objectives