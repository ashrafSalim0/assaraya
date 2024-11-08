
import React, {useState} from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer, Theme, useTheme, } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18next, {languageResources} from './services/i18next';
import {styles, MyTheme,} from './style/style.js';
import { DarkTheme, LightTheme } from './style/themes.js';
import { useColorScheme } from 'react-native';
import Search from './screens/search.js';
import Profile from './screens/profile.js';
import Payout from './screens/payout.js';
import Home from './screens/home.js';



const Stack = createNativeStackNavigator();
function App() {
  const [theme, setTheme] = useState('');
  const colorScheme = useColorScheme();

  return (
    <NavigationContainer theme={colorScheme === "dark" ?  LightTheme : DarkTheme}>
      <I18nextProvider>
      <Stack.Navigator 
      initialRouteName='Home'
      screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="Payout" component={Payout} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
      </I18nextProvider>
    </NavigationContainer>
  );
}

export default App;