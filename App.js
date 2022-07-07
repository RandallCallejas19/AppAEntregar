import 'react-native-gesture-handler';
 
// Import React and Component
import React from 'react';
 
// Import Navigators from React Navigation
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
 
// Import Screens
import LoginScreen from './Screen/LoginScreen';
import HomePage from './Screen/HomePage';
import Factura from './Screen/Factura/Factura';
const Stack = createStackNavigator();
 
const Auth = () => {
  // Stack Navigator for Login and Sign up Screen
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      
    </Stack.Navigator>
  );
};
 
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        {/* SplashScreen which will come once for 5 Seconds */}
        <Stack.Screen
          name="HomePage"
          component={HomePage}
          // Hiding header for Navigation Drawer
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{headerShown: false}}
        />
        {/* Navigation Drawer as a landing page */}
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};
 
export default App;