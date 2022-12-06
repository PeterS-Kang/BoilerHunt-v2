import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const CategoryCard = ({title}) => {
  const navigation = useNavigation();
  
  return (
    <TouchableOpacity
     onPress={() =>{
      navigation.navigate(title)
     }}
     >
      <View 
      className=
      "box-border h-150 w-200 p-5 border-2 border-white bg-gray-200 flex-2 mx-1 rounded-md">
        <Text className="font-bold align-middle text-xl">
            {title}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CategoryCard