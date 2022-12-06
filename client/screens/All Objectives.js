import {Text, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native'
import React, { Component, useEffect, useState } from 'react'
import axios from 'axios'

const Places = () => {
  const [location, setLocation] = useState([])
  
  useEffect(() => {
    axios.get('http://localhost:4500/locations/')
      .then(response => {
        if (response.data.length > 0) {
          setLocation(response.data.map(locations => locations))
        }
      })
      .catch(err => console.log(err.response.data))
  }, [location.length])

console.log(location)

    return (
      <SafeAreaView>
      <ScrollView className="bg-white px-2 flex-1">
      {location.filter(places => places.completed == false).map((places) => {
            return (
              <TouchableOpacity className="container-sm Button-border p-10 border-2 border-white flex-1 mb-1 px-8 rounded-lg bg-gray-500">
              <Text className="font-bold text-xl text-left text-white">
               {places.name}
              </Text>
             </TouchableOpacity>
            )
          })}
          {location.filter(places => places.completed == true).map((places) => {
            return (
              <TouchableOpacity className="container-sm Button-border p-10 border-2 border-white flex-1 mb-1 px-8 rounded-lg bg-blue-500">
              <Text className="font-bold text-xl text-left text-white">
               {places.name}
              </Text>
             </TouchableOpacity>
            )
          })}
      </ScrollView>
      </SafeAreaView>
    )
  }

export default Places