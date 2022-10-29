import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, Dashboard, RegistrationScreen } from './src/screens'
import { decode, encode } from 'base-64'
if (!global.btoa) { global.btoa = encode }
if (!global.atob) { global.atob = decode }

import { LogBox } from 'react-native';
LogBox.ignoreAllLogs();

const Stack = createStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Registration" component={RegistrationScreen} />
        <Stack.Screen name="Dashboard" component={Dashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
