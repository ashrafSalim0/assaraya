import React, {useState} from 'react';
import { Text, View, StatusBar, Image, TouchableOpacity, TextInput, ScrollView,   } from 'react-native';
import { I18nextProvider, useTranslation } from 'react-i18next';
import i18next, {languageResources} from '../services/i18next.js';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useColorScheme } from 'react-native';
import getStyles from '../style/style.js'
import { useTheme } from '@react-navigation/native';
import icon from '../style/load_icons.js';
import Header from '../component/header.js';
const Stack = createNativeStackNavigator();

function Home() {
 const {t} = useTranslation();
 const { colors } = useTheme(); 
 const styles = getStyles(colors); 


 
  return (
    <I18nextProvider>
      <ScrollView>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <View style={styles.header}>
       <View>
      <Text style={[styles.header_text, {color: colors.offwhite, fontWeight: 'thin',fontSize: 14, marginTop: 10, opacity: 0.7}]}>Welcome Back</Text>
      <Text style={[styles.header_text, {fontSize: 20, top: -7}]}>Marleey</Text>
      </View>
        <TouchableOpacity activeOpacity={0.7}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 10,}}>
      <Image style={[styles.icon, {width: 20, height: 20,}]} source={icon.search} />
      <Image style={[ {width: 34, height: 34, borderRadius: 100}]} source={require('../assets/images/pfp.jpg')} />
      </View>
      </TouchableOpacity>
      </View>
        <View style={styles.container}>
        <View style={styles.search_container}>
          <TouchableOpacity activeOpacity={0.7}>
        <Image style={[styles.icon,{width: 24, height: 24,}]} source={icon.search} />
        </TouchableOpacity>
        <TextInput placeholderTextColor={'#404040'} cursorColor={colors.offwhite}  placeholder={t('searchscreen.search')} style={styles.search_input}></TextInput>
        <TouchableOpacity activeOpacity={0.7}>
        <Image style={[styles.icon,{width: 24, height: 24,}]} source={icon.adjustments_alt} />
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </I18nextProvider>
  );
}




export default Home;