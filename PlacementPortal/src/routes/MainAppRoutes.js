import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen';
import Login from '../components/Login';
import SplashScreen from '../components/SplashScreen';
import ForgotPasswordScreen from '../components/ForgotPasswordScreen';
import SuperAdminDashboard from '../components/superadminScreens/SuperAdminDashboard';
import AddCompany from '../components/superadminScreens/AddCompany';

const MainStack = createNativeStackNavigator();
// const drawer = createDrawerNavigator();

function MainAppRoutes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="addCompany">
        <MainStack.Screen
          name="SuperAdminDash"
          component={SuperAdminDashboard}
        />
        <MainStack.Screen name="addCompany" component={AddCompany} />
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
