import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Routes from './Routes'
import OnboardingScreen from '../screens/OnboardingScreen'

const NoteApp = () => {
const Stack = createNativeStackNavigator()
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }}>
                <Stack.Screen 
                    name={Routes.onboardingScreen}
                    component={OnboardingScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default NoteApp

