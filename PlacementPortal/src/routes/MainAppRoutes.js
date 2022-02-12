import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen';
import Login from '../components/Login';
import SplashScreen from '../components/SplashScreen';

const MainStack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function MainAppRoutes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="HomeScreen">
        {/* <MainStack.Screen name='Splash' component={SplashScreen} /> */}
        <MainStack.Screen name="HomeScreen" component={HomeScreen} />
        <MainStack.Screen name="Login" component={Login} />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}

export default MainAppRoutes;
