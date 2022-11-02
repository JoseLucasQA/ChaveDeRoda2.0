import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Telas Principais
import { LoginScreen, Dashboard, RegistrationScreen, } from './src/screens'

// Veiculos
import { Carros } from './src/screens'

// Serviços Carro
import { Revisão_Motor, Revisão_Sistema_De_Transmissão, Alinhamento_e_Balanceamento, Troca_de_Oleo_e_Filtros } from './src/screens'

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />


        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="Carros" component={Carros} />


        <Stack.Screen name="Revisão_Motor" component={Revisão_Motor} />
        <Stack.Screen name="Revisão_Sistema_De_Transmissão" component={Revisão_Sistema_De_Transmissão} />
        <Stack.Screen name="Alinhamento_e_Balanceamento" component={Alinhamento_e_Balanceamento} />
        <Stack.Screen name="Troca_de_Oleo_e_Filtros" component={Troca_de_Oleo_e_Filtros} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
