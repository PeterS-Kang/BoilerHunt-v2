import { View, Text, TouchableOpacity, Button, ScrollView } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'

const Places = () => {
  const [location, setLocation] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:4500/locations/')
      .then(response => {
        if (response.data.length > 0) {
          setLocation(response.data.map(locations => locations.name))
        }
      })
      .catch(err => console.log(err.response.data))
  }, [location.length])

console.log(location)

    return (
      <ScrollView className="bg-white px-2 flex-1">
        {location.map((locations) => {
          return (
            <TouchableOpacity className="container-sm Button-border p-10 border-2 border-white flex-1 mb-1 bg-blue-500 px-8 rounded-lg">
             <Text className="font-bold text-xl text-left text-white">
              {locations}
             </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
    )
  }

export default Places