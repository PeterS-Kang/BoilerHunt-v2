import { ScrollView, Text, View } from 'react-native'
import React, { Component } from 'react'
import CategoryCard from './CategoryCard'

export class Categories extends Component {
  render() {
    return (
      <View className="flex-1"
      alwaysBounceVertical={true}
      showsVerticalScrollIndicator={true}
      
      >
        {/* CategoryCard */}
        <CategoryCard title="Objectives" />
        <CategoryCard title="Places" />
        <CategoryCard title="Achievements" />
        <CategoryCard title="Setting" />
        
      </View>
    )
  }
}

export default Categories