import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, Dashboard, RegistrationScreen, Carros, Motos, Caminhões, Bicicletas, Agendamentos } from './src/screens'

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        {/* <Stack.Screen name="Registration" component={RegistrationScreen} /> */}
        {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
        <Stack.Screen name="Carros" component={Carros} />
        <Stack.Screen name="Motos" component={Motos} />
        <Stack.Screen name="Caminhões" component={Caminhões} />
        <Stack.Screen name="Bicicletas" component={Bicicletas} />
        <Stack.Screen name="Agendamentos" component={Agendamentos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
