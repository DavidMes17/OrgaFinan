{/*
  #674FFF
  #4FA8FF
  #B0A4FF
  #766BBF
  #AAA26D
  #2DED5C
  #FFE84F
  #EDC12D
  #D94A3B
*/}
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Biometria from './src/components/biometria.component';
import Topo from './src/components/topo.conponent';

export default function App() {

  return (
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#674FFF' }, headerTintColor: '#fff' }}>
          <Stack.Screen name='auth' component={Biometria} options={{ headerShown: false }} />
          <Stack.Screen name='index' component={Index} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
);
}

function Index({ navigation }) {
  return (
    <Topo />
  )
}