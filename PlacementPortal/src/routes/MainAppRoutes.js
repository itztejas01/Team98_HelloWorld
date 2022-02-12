import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen';
import Login from '../components/Login';
import SplashScreen from '../components/SplashScreen';
import ForgotPasswordScreen from '../components/ForgotPasswordScreen';

const MainStack = createNativeStackNavigator();

function MainAppRoutes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="HomeScreen">
        {/* <MainStack.Screen name='Splash' component={SplashScreen} /> */}
        <MainStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            title: 'Placement Portal',
            headerStyle: {
              backgroundColor: 'green',
            },
            headerTintColor: 'white',
            headerTitleAlign: 'center',
            headerTitleStyle: {
              color: 'white',
              fontWeight: '600',
              fontSize: 25,
            },
          }}
        />
        <MainStack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <MainStack.Screen
          name="ForgotPassword"
          component={ForgotPasswordScreen}
          options={{headerShown: false}}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainAppRoutes;
