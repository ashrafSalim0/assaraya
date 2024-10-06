import React, {useState} from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18next, {languageResources} from '../services/i18next.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import getStyles from '../style/style.js'
import { useTheme } from '@react-navigation/native';
import icon from '../style/load_icons.js';

const Stack = createNativeStackNavigator();

function Header({title}) {
 const {t} = useTranslation();
 const { colors } = useTheme(); 
 const styles = getStyles(colors); 
  return (
    <I18nextProvider>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.header}>
        <TouchableOpacity  activeOpacity={0.7}>
      <Image style={styles.icon} source={icon.chevron_left} />
      </TouchableOpacity>
      <Text style={styles.header_text}>{title}</Text>
        <TouchableOpacity activeOpacity={0.7}>
      <Image style={styles.icon} source={icon.menu} />
      </TouchableOpacity>
      </View>
    </I18nextProvider>
  );
}




export default Header;