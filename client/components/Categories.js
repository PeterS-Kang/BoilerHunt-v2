import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import CategoryCard from './CategoryCard'

const Categories = () => {

    return (
      <View className="flex-1"
      alwaysBounceVertical={true}
      showsVerticalScrollIndicator={true}
      
      >
        {/* CategoryCard */}
        <CategoryCard title="Current Objectives" />
        <CategoryCard title="All Objectives" />
        
      </View>
    )
  }


export default Categories