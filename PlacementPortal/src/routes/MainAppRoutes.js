import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../components/HomeScreen";
import Login from "../components/Login";
import SplashScreen from "../components/SplashScreen";
import SuperAdminDashboard from "../components/superadminScreens/SuperAdminDashboard";

const MainStack = createNativeStackNavigator();

function MainAppRoutes (){
    return( <NavigationContainer>
        <MainStack.Navigator initialRouteName="SuperAdminDash">
            <MainStack.Screen name='SuperAdminDash' component={SuperAdminDashboard} />
            <MainStack.Screen name='Login' component={Login} />
            <MainStack.Screen name='HomeScreen' component={HomeScreen} />
        </MainStack.Navigator>
    </NavigationContainer>)
   
}

export default MainAppRoutes;