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
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import Biometria from './src/components/biometria.component';
import Topo from './src/components/topo.conponent';
import Botoes from './src/components/botoes.component';
import Renda from './src/components/renda.component';
import Urgencia from './src/components/urgencia.component';
import Cobranca from './src/screens/cobrança.screen';
import Imprevisto from './src/screens/imprevisto.screen';
import Salario from './src/screens/salário.screen';
import Outro from './src/screens/outro.screen';

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerStyle: { backgroundColor: '#674FFF' }, headerTintColor: '#fff' }}>
        <Stack.Screen name='auth' component={Biometria} options={{ headerShown: false }} />
        <Stack.Screen name='index' component={Index} options={{ headerShown: false }} />
        <Stack.Screen name='COBRANÇA' component={Cobranca} />
        <Stack.Screen name='IMPREVISTO' component={Imprevisto} />
        <Stack.Screen name='SALÁRIO' component={Salario} />
        <Stack.Screen name='OUTRO' component={Outro} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Index({ navigation }) {
  return (
    <>
      <Topo />
      <Botoes navigation={navigation} />
      <ScrollView>
      <Renda />
      <Urgencia />
      </ScrollView>
    </>)
}