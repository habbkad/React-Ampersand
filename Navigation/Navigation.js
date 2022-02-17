import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen1 from '../components/WelcomeScreen1.js'
import StarterPage from '../components/StarterPage.js'
import LoginPage from '../components/LoginPage.js'
import SignUp from '../components/SignUp.js'


const Stack = createNativeStackNavigator()
const Navigation =()=>{
    return <NavigationContainer>
        <Stack.Navigator initialRouteName='welcomeScreen1' >
            <Stack.Screen name="welcomeScreen1" component={WelcomeScreen1}/>
            <Stack.Screen name="Starter" component={StarterPage}/>
            <Stack.Screen name="LogIn" component={LoginPage}/>
            <Stack.Screen name="SignUp" component={SignUp}/>

           
        </Stack.Navigator>

    </NavigationContainer>
}




export default Navigation