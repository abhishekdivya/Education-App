import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './src/Screens/Home';
import About  from './src/Screens/About';
import Contact from './src/Screens/Contact'; 
import Course from './src/Screens/Course';
import UserData from './src/Screens/UserData';
import CourseDetails from './src/Screens/CourseDetails';

import { 
  useFonts,
  JosefinSans_400Regular,
  JosefinSans_500Medium,
  JosefinSans_300Light ,

  
} from '@expo-google-fonts/josefin-sans' ;

import {
  Nunito_600SemiBold,
  Nunito_700Bold,
 
} from '@expo-google-fonts/nunito' ;

import AppLoading from 'expo-app-loading';


export default function App() {

const Stack = createNativeStackNavigator();

let[fontsLoaded] = useFonts({
  JosefinSans_400Regular,
  JosefinSans_500Medium ,
  JosefinSans_300Light ,
  Nunito_600SemiBold ,
  Nunito_700Bold
}) ;

if(!fontsLoaded) {
  <AppLoading /> ; }

  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name='Home' options={{
          headerShown: false ,
        }}>
          {(props) => <Home {... props} channelName= 
          {'Education Portal'} />}
        </Stack.Screen>

        <Stack.Screen name='Course' component={Course}
        options={{
          headerTitleStyle : {
          fontSize : 25,
          fontFamily: "Nunito_600SemiBold" ,
          
        },
        headerTitle : 'Courses' ,
        headerTitleAlign : 'center',
        }}
         />

        <Stack.Screen name='Student' component={UserData}
         options={{
          headerTitleStyle : {
          fontSize : 25,
          fontFamily: "Nunito_600SemiBold" ,
        },
        headerTitle : 'User Data' ,
        headerTitleAlign : 'center'
        }}
         />

        <Stack.Screen name='About' component={About} 
           options={{
          headerTitleStyle : {
          fontSize : 25,
          fontFamily: "Nunito_600SemiBold" ,
        },
        headerTitle : 'About' ,
        headerTitleAlign : 'center'
        }}
        />

        <Stack.Screen name='Contact' component={Contact} 
           options={{
          headerTitleStyle : {
          fontSize : 25,
          fontFamily: "Nunito_600SemiBold" ,
        },
        headerTitle : 'Contact' ,
        headerTitleAlign : 'center'
        }}
        />

        <Stack.Screen name='CourseDetails'
         component={CourseDetails}
         options={{
            headerTitleStyle: {
              fontSize: 25,
              fontFamily: "Nunito_600SemiBold",
            },
            headerTitleAlign: "center",
          }} />

        

      </Stack.Navigator>
    </NavigationContainer>
  );
} ;

