import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../components/HomeScreen';
import Login from '../components/Login';
import SplashScreen from '../components/SplashScreen';
import ForgotPasswordScreen from '../components/ForgotPasswordScreen';
import SuperAdminDashboard from '../components/superadminScreens/SuperAdminDashboard';
import AddCompany from '../components/superadminScreens/AddCompany';
import UserType from '../components/superadminScreens/UserType';
import PRNScreen from '../components/PRNScreen';
import {Image, TouchableOpacity} from 'react-native';
import TestScreen from '../components/testScreen/TestScreen';
import AddJob from '../components/superadminScreens/AddJob';

const MainStack = createNativeStackNavigator();
const TestStack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

const TestStackNav = () => {
  return (
    <TestStack.Navigator>
      <TestStack.Screen name="TestScreen" component={TestScreen} />

      <TestStack.Screen name="PRNScreen" component={PRNScreen} />
    </TestStack.Navigator>
  );
};

const TheRealMainStack = () => {
  return (
    <MainStack.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="SuperAdminDash" component={SuperAdminDashboard} />
      <MainStack.Screen name="addCompany" component={AddCompany} />
      <MainStack.Screen name="HomeScreen" component={HomeScreen} />
      {/* <MainStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      /> */}
      <MainStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <Drawer.Navigator initialRouteName="HomeScreen">
      <Drawer.Screen
        name="InitialDrawerRoute"
        component={TheRealMainStack}
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
            fontSize: 20,
          },
        }}
      />
      <Drawer.Screen
        name="Login"
        component={Login}
        // options={{headerShown: false}}
      />
      <Drawer.Screen name="TestStack" component={TestStackNav} />
    </Drawer.Navigator>
  );
};

function MainAppRoutes() {
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName="HomeScreen">
        <MainStack.Screen
          name="SuperAdminDash"
          component={SuperAdminDashboard}
        />
        <MainStack.Screen
          name="UserType"
          component={UserType}
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
      <DrawerStack />
    </NavigationContainer>
  );
}

export default MainAppRoutes;
