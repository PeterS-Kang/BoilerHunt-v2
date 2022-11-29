import { View, Text, SectionList, ScrollView, TouchableOpacity, SafeAreaView } from 'react-native'
import { useState, useEffect } from 'react'
import React from 'react'
import axios from 'axios'
import Places from './All Objectives'

const Objectives = () => {
  
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
      <ScrollView className="flex-1 bg-grey-200 px-2 top-2">
        {location.filter(places => places.completed == false).map(({name}) => {
          return (
            <TouchableOpacity className="container-sm Button-border p-10 border-2 border-white flex-1 mb-1 bg-blue-500 px-8 rounded-lg">
             <Text className="font-bold text-xl text-left text-white">
              {name}
             </Text>
            </TouchableOpacity>
          )
        })}
      </ScrollView>
      </SafeAreaView>
   )
  }


export default Objectives
