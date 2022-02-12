import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "../components/HomeScreen";
import Login from "../components/Login";
import SplashScreen from "../components/SplashScreen";

const MainStack = createNativeStackNavigator();

function MainAppRoutes (){
    return( <NavigationContainer>
        <MainStack.Navigator initialRouteName="Login">
            {/* <MainStack.Screen name='Splash' component={SplashScreen} /> */}
            <MainStack.Screen name='Login' component={Login} />
            <MainStack.Screen name='Home' component={HomeScreen} />
        </MainStack.Navigator>
    </NavigationContainer>)
   
}

export default MainAppRoutes;