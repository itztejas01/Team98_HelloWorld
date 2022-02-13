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
import PRNScreen from '../components/studentScreens/PRNScreen';
import {Image, TouchableOpacity} from 'react-native';
import TestScreen from '../components/testScreen/TestScreen';
import AddJob from '../components/superadminScreens/AddJob';
import AddExperienceScreen from '../components/studentScreens/AddExperienceScreen';
import AddCertificationScreen from '../components/studentScreens/AddCertificationScreen';


const MainStack = createNativeStackNavigator();
const TestStack = createNativeStackNavigator();
const HomeStackNav = createDrawerNavigator();
const SuperAdminStackNav = createDrawerNavigator();
const StudentStackNav = createDrawerNavigator();
const Stack = createNativeStackNavigator();

const StudentStack = () => {
  return (
    <StudentStackNav.Navigator initialRouteName='PRNScreen' screenOptions={{headerShown:true}}>

      <StudentStackNav.Screen name="PRNScreen" component={PRNScreen} />
      <StudentStackNav.Screen name="Test Screen" component={TestScreen} />
      <StudentStackNav.Screen
        name="Add Experience Screen"
        component={AddExperienceScreen}
      />
      <StudentStackNav.Screen
        name="Add Certification Screen"
        component={AddCertificationScreen}
      />
    </StudentStackNav.Navigator>
  );
};

const SuperAdminStack = ()=>{
  return (
    <SuperAdminStackNav.Navigator initialRouteName='Dashboard' screenOptions={{headerShown:true}}>
      <SuperAdminStackNav.Screen name="Dashboard" component={SuperAdminDashboard} />
      <SuperAdminStackNav.Screen name="Add User" component={UserType} />
      <SuperAdminStackNav.Screen name="Add Job" component={AddJob} />
      <SuperAdminStackNav.Screen name="Add Company" component={AddCompany} />
    </SuperAdminStackNav.Navigator>
  )
}

const TheRealMainStack = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home Screen"
      screenOptions={{headerShown: false}}>
      <MainStack.Screen name="Home Screen" component={HomeStack} />
      <MainStack.Screen name="Super Admin" component={SuperAdminStack} />
      <MainStack.Screen name="Student" component={StudentStack} />
      <MainStack.Screen name="addCompany" component={AddCompany} />
      
      {/* <MainStack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
      /> */}
      <MainStack.Screen
        name="ForgotPassword"
        component={ForgotPasswordScreen}
        options={{headerShown: true}}
      />
    </MainStack.Navigator>
  );
};

const HomeStack = () => {
  return (
    <HomeStackNav.Navigator
      initialRouteName="Home"
      screenOptions={{headerShown: true,headerTitleAlign:'center'}}>
      <HomeStackNav.Screen name="Home" component={HomeScreen} />
      <HomeStackNav.Screen name="Login" component={Login} />
    </HomeStackNav.Navigator>
  );
};

const DrawerStack = () => {
  return (
    <Stack.Navigator initialRouteName="InitialDrawerRoute" screenOptions={{headerShown:false}}  >
      <Stack.Screen
        name="InitialDrawerRoute"
        component={TheRealMainStack}
        options={{title: 'Placement Portal',headerStyle: {
            backgroundColor: 'green',
          },
        headerTintColor: 'white',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          color: 'white',
          fontWeight: '600',
          fontSize: 20,
        }
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
      />
    </Stack.Navigator>
  );
};

function MainAppRoutes() {
  return (
    <NavigationContainer>
      
      <DrawerStack />
    </NavigationContainer>
  );
}

export default MainAppRoutes;
