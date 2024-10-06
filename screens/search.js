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

function Search() {
 const {t} = useTranslation();
 const { colors } = useTheme(); 
 const styles = getStyles(colors); 


 
  return (
    <I18nextProvider>
      <ScrollView>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Header title={t('searchscreen.title')}/>
      <View style={styles.container}>
        <View style={styles.slider}></View>
        <View style={styles.slider_indicator}>
            <View style={[styles.slider_indicator_item, styles.slider_indicator_item_first]}></View>
            <View style={[styles.slider_indicator_item, styles.slider_indicator_item_second, styles.slider_indicator_item_active]}></View>
            <View style={[styles.slider_indicator_item, styles.slider_indicator_item_third]}></View>
            <View style={[styles.slider_indicator_item, styles.slider_indicator_item_forth]}></View>
        </View>
        <View style={styles.search_container}>
          <TouchableOpacity activeOpacity={0.7}>
        <Image style={[styles.icon,{width: 24, height: 24,}]} source={icon.search} />
        </TouchableOpacity>
        <TextInput placeholderTextColor={'#404040'} cursorColor={colors.offwhite}  placeholder={t('searchscreen.search')} style={styles.search_input}></TextInput>
        <TouchableOpacity activeOpacity={0.7}>
        <Image style={[styles.icon,{width: 24, height: 24,}]} source={icon.adjustments_alt} />
        </TouchableOpacity>
        </View>
        <View style={styles.category_container}>
          <Text style={{color: colors.text, fontSize: 16, fontWeight: 'bold'}}>{t('searchscreen.categories')}</Text>
          <TouchableOpacity activeOpacity={0.7}>
          <Text style={{color: colors.secondary, fontSize: 12, fontWeight: 'thin'}}>{t('searchscreen.showall')}</Text>
          </TouchableOpacity>
        </View>
          <ScrollView style={styles.categories_container} horizontal={true} showsHorizontalScrollIndicator={false}>
          <TouchableOpacity activeOpacity={0.7} style={styles.categories_button}>
          <Text style={styles.category_title}>{t('searchscreen.showall')}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.categories_button}>
          <Text style={styles.category_title}>{t('searchscreen.entertainment')}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={styles.categories_button}>
          <Text style={styles.category_title}>{t('searchscreen.gaming')}</Text>
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.7} style={[styles.categories_button, {marginRight: 20}]}>
          <Text style={styles.category_title}>{t('searchscreen.subs')}</Text>
          </TouchableOpacity>
          </ScrollView>
          <View style={{    marginTop: 10,}}/>
          <View style={styles.category_container}>
          <Text style={{color: colors.text, fontSize: 16, fontWeight: 'bold'}}>{t('searchscreen.topgames')}</Text>
          <TouchableOpacity activeOpacity={0.7}>
          <Text style={{color: colors.secondary, fontSize: 12, fontWeight: 'thin'}}>{t('searchscreen.showall')}</Text>
          </TouchableOpacity>
          </View>
          <View style={styles.topgamesfu}>
            <View style={styles.topgamecontainer}>
            <TouchableOpacity activeOpacity={0.7} style={styles.topgameitem}>
            <Image style={styles.topgamepfp} source={require('../assets/images/poster.png')} />
            <View style={styles.topgameinfos}>
              <Text style={styles.topgametitle}>Spider Man</Text>
              <Text style={styles.topgamedesc}>Action, RPG, Drama</Text>
              <View style={{flexDirection:'row', gap: 2.5, alignItems:'center', justifyContent:"flex-start"}}>
              <Image style={[{width: 10, height: 10, tintColor: 'gold'}]} source={icon.star} />
              <Text style={{fontSize: 10, color: colors.offwhite, marginTop: 2}}>3.9</Text>
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.topgameitem}>
            <Image style={styles.topgamepfp} source={require('../assets/images/poster.png')} />
            <View style={styles.topgameinfos}>
              <Text style={styles.topgametitle}>Spider Man</Text>
              <Text style={styles.topgamedesc}>Action, RPG, Drama</Text>
              <View style={{flexDirection:'row', gap: 2.5, alignItems:'center', justifyContent:"flex-start"}}>
              <Image style={[{width: 10, height: 10, tintColor: 'gold'}]} source={icon.star} />
              <Text style={{fontSize: 10, color: colors.offwhite, marginTop: 2}}>3.9</Text>
              </View>
            </View>
            </TouchableOpacity>
            </View>
            <View style={styles.topgamecontainer}>
            <TouchableOpacity activeOpacity={0.7} style={styles.topgameitem}>
            <Image style={styles.topgamepfp} source={require('../assets/images/poster.png')} />
            <View style={styles.topgameinfos}>
              <Text style={styles.topgametitle}>Spider Man</Text>
              <Text style={styles.topgamedesc}>Action, RPG, Drama</Text>
              <View style={{flexDirection:'row', gap: 2.5, alignItems:'center', justifyContent:"flex-start"}}>
              <Image style={[{width: 10, height: 10, tintColor: 'gold'}]} source={icon.star} />
              <Text style={{fontSize: 10, color: colors.offwhite, marginTop: 2}}>3.9</Text>
              </View>
            </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7} style={styles.topgameitem}>
            <Image style={styles.topgamepfp} source={require('../assets/images/poster.png')} />
            <View style={styles.topgameinfos}>
              <Text style={styles.topgametitle}>Spider Man</Text>
              <Text style={styles.topgamedesc}>Action, RPG, Drama</Text>
              <View style={{flexDirection:'row', gap: 2.5, alignItems:'center', justifyContent:"flex-start"}}>
              <Image style={[{width: 10, height: 10, tintColor: 'gold'}]} source={icon.star} />
              <Text style={{fontSize: 10, color: colors.offwhite, marginTop: 2}}>3.9</Text>
              </View>
            </View>
            </TouchableOpacity>
            </View>
          </View>
      </View>
      </ScrollView>
    </I18nextProvider>
  );
}




export default Search;