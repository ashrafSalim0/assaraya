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
import { PanGestureHandler } from 'react-native-gesture-handler';
const Stack = createNativeStackNavigator();

function Profile() {
 const {t} = useTranslation();
 const { colors } = useTheme(); 
 const styles = getStyles(colors); 


 
  return (
    <I18nextProvider>
      <ScrollView>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Header title={t('profile.title')}/>
      <View style={styles.container}>
        <Image source={require('../assets/images/pfp.jpg')} style={styles.pfp}></Image>
        <Text style={styles.pfp_name}>Ashraf Salim</Text>
        <Text style={styles.pfp_name_desc}>ashraf.salim.alsayid@gmail.com</Text>
        <View style={styles.profile_main_btns}>
          <TouchableOpacity activeOpacity={0.7} style={styles.profile_main_item}>
            <View style={styles.profile_main_item_icon}>
            <Image style={[styles.icon, {tintColor: colors.primary, width: 26, height: 26}]} source={icon.gamepad} />
            </View>
            <Text style={styles.profile_main_item_title}>{t('profile.mygames')}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.profile_main_item}>
            <View style={styles.profile_main_item_icon}>
            <Image style={[styles.icon, {tintColor: colors.primary, width: 26, height: 26}]} source={icon.apps} />
            </View>
            <Text style={styles.profile_main_item_title}>{t('profile.subscription')}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.profile_main_item}>
            <View style={styles.profile_main_item_icon}>
            <Image style={[styles.icon, {tintColor: colors.primary, width: 26, height: 26}]} source={icon.wallet} />
            </View>
            <Text style={styles.profile_main_item_title}>{t('profile.payment')}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.profile_main_item}>
            <View style={styles.profile_main_item_icon}>
            <Image style={[styles.icon, {tintColor: colors.primary, width: 26, height: 26}]} source={icon.user_circle} />
            </View>
            <Text style={styles.profile_main_item_title}>{t('profile.profile')}</Text>
          </TouchableOpacity>
         
          
        </View>



        <View style={styles.profile_prefrences_container}>
          <TouchableOpacity activeOpacity={0.7} style={styles.prefrences_btn}>
      <Image style={[styles.icon, {alignSelf: '',}]} source={icon.chevron_left} />
          </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    </I18nextProvider>
  );
}




export default Profile;