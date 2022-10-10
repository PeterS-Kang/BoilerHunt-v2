import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, Settings } from 'react-native';
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import Objectives from './screens/Objectives';
import Places from './screens/Places';
import Achievements from './screens/Achievements';
import Setting from './screens/Settings';


const Stack = createNativeStackNavigator();


export default function App() {
  
  return (
    <NavigationContainer>
      <TailwindProvider>
         <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Objectives" component={Objectives} />
          <Stack.Screen name="Places" component={Places} />
          <Stack.Screen name="Achievements" component={Achievements} />
          <Stack.Screen name="Setting" component={Setting} />

        </Stack.Navigator>
      </TailwindProvider>
    </NavigationContainer>

  );
}
