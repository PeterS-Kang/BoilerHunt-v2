import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Settings } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Objectives from './screens/Current Objectives';
import Places from './screens/All Objectives';
import Achievements from './screens/Achievements';



const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <TailwindProvider>
         <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Current Objectives" component={Objectives} />
          <Stack.Screen name="All Objectives" component={Places} />
          <Stack.Screen name="Achievements" component={Achievements} />
        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>

  );
}
