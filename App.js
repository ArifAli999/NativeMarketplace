import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LaunchPage from './screens/launchScreen/LaunchPage';
import LoginScreen from './screens/launchScreen/LoginScreen';
import RegisterScreen from './screens/launchScreen/RegisterScreen';
import SecondStep from './screens/launchScreen/SecondStep';
import useAuthStore from './authStore';
import HomeScreen from './screens/HomeScreen';
import NewListPage from './screens/NewListPage';
import { useEffect } from 'react';
import { auth, db, app } from './firebase';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { getUserDetails } from './util/getUserDetails';




export default function App() {

  const { userDetails, userProfile, addUserDets } = useAuthStore()

  const Stack = createNativeStackNavigator();



  return (
    <TailwindProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {userProfile ? (
            <>
              <Stack.Screen name="HomeScreen" component={HomeScreen} />
              <Stack.Screen name="New" component={NewListPage} />
            </>
          ) : (<><Stack.Screen name="LaunchPage" component={LaunchPage} /><Stack.Screen name="RegisterScreen" component={RegisterScreen} /><Stack.Group screenOptions={{ presentation: 'modal' }}>
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
          </Stack.Group><Stack.Screen name="SecondStep" component={SecondStep} /></>)}

        </Stack.Navigator>
      </NavigationContainer>
    </TailwindProvider>



  );
}


