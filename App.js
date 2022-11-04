import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

// Telas Principais
import { LoginScreen, Dashboard, RegistrationScreen, Agendamentos, Avaliações, Mapa } from './src/screens'

// Veiculos
import { Carros, Motos, Caminhões, Bicicletas } from './src/screens'

// Serviços
import {
  Revisão_Motor, Revisão_Sistema_De_Transmissão, Alinhamento_e_Balanceamento, Troca_de_Oleo_e_Filtros,
  Troca_De_Amortecedor, Troca_De_Escapamento, Troca_De_Pneus, Troca_Disco_De_Freio,
  Leitura_Modulo_ECU, Lubrificação_Quinta_Roda, Polimentos_Rodas_e_Tanque, Troca_Lona_de_Freios,
  BikeFit, Desempenar_Aros, Lubrificação_Completa, Troca_de_Corrente
} from './src/screens'

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
        {/* <Stack.Screen name="Agendamentos" component={Agendamentos} /> */}
        {/* <Stack.Screen name="Avaliações" component={Avaliações} /> */}
        {/* <Stack.Screen name="Mapa" component={Mapa} /> */}

        <Stack.Screen name="Carros" component={Carros} />
        <Stack.Screen name="Revisão_Motor" component={Revisão_Motor} />
        <Stack.Screen name="Revisão_Sistema_De_Transmissão" component={Revisão_Sistema_De_Transmissão} />
        <Stack.Screen name="Alinhamento_e_Balanceamento" component={Alinhamento_e_Balanceamento} />
        <Stack.Screen name="Troca_de_Oleo_e_Filtros" component={Troca_de_Oleo_e_Filtros} />

        <Stack.Screen name="Motos" component={Motos} />
        <Stack.Screen name="Troca_De_Amortecedor" component={Troca_De_Amortecedor} />
        <Stack.Screen name="Troca_De_Escapamento" component={Troca_De_Escapamento} />
        <Stack.Screen name="Troca_De_Pneus" component={Troca_De_Pneus} />
        <Stack.Screen name="Troca_Disco_De_Freio" component={Troca_Disco_De_Freio} />

        <Stack.Screen name="Caminhões" component={Caminhões} />
        <Stack.Screen name="Leitura_Modulo_ECU" component={Leitura_Modulo_ECU} />
        <Stack.Screen name="Lubrificação_Quinta_Roda" component={Lubrificação_Quinta_Roda} />
        <Stack.Screen name="Polimentos_Rodas_e_Tanque" component={Polimentos_Rodas_e_Tanque} />
        <Stack.Screen name="Troca_Lona_de_Freios" component={Troca_Lona_de_Freios} />

        <Stack.Screen name="Bicicletas" component={Bicicletas} />
        <Stack.Screen name="BikeFit" component={BikeFit} />
        <Stack.Screen name="Desempenar_Aros" component={Desempenar_Aros} />
        <Stack.Screen name="Lubrificação_Completa" component={Lubrificação_Completa} />
        <Stack.Screen name="Troca_de_Corrente" component={Troca_de_Corrente} />

      </Stack.Navigator>
    </NavigationContainer>
  )
}