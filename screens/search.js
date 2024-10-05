import React, {useState} from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18next, {languageResources} from '../services/i18next.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import getStyles from '../style/style.js'
import { useTheme } from '@react-navigation/native';
import icon from '../style/load_icons.js';
import Header from '../component/header.js';

const Stack = createNativeStackNavigator();

function Search() {
 const {t} = useTranslation();
 const { colors } = useTheme(); 
 const styles = getStyles(colors); 
  return (
    <I18nextProvider>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Header/>
      <View style={styles.container}>
        <View style={styles.slider}></View>
        <View style={styles.slider_indicator}>
            <View style={[styles.slider_indicator_item, styles.slider_indicator_item_first]}></View>
            <View style={[styles.slider_indicator_item, styles.slider_indicator_item_second]}></View>
            <View style={[styles.slider_indicator_item, styles.slider_indicator_item_third]}></View>
            <View style={[styles.slider_indicator_item, styles.slider_indicator_item_forth]}></View>
        </View>
        <View style={styles.search_container}>
        <Image style={styles.icon} source={icon.menu} />
        <TextInput placeholder='Search...' style={styles.search_input}></TextInput>
        <Image style={styles.icon} source={icon.menu} />
        </View>
      </View>
    </I18nextProvider>
  );
}




export default Search;