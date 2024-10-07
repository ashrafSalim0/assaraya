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

function Payout() {
 const {t} = useTranslation();
 const { colors } = useTheme(); 
 const styles = getStyles(colors); 


 
  return (
    <I18nextProvider>
      <StatusBar barStyle="light-content" backgroundColor="#121212" />
      <Header title={t('payout.title')}/>
      <View style={styles.container}>
        <Text style={styles.userinfo_title}>{t('payout.userinfo')}</Text>
        <View style={styles.userinfo_container}>
        <Text style={styles.userinfo_header}>{t('payout.userinfoname')}</Text>
        <Text style={styles.userinfo_desc}>Ashraf Salim</Text>
        </View>
        <View style={styles.userinfo_container}>
        <Text style={styles.userinfo_header}>{t('payout.userinfoemail')}</Text>
        <Text style={styles.userinfo_desc}>ashasff0@gmail.com</Text>
        </View>
        <View style={styles.userinfo_container}>
        <Text style={styles.userinfo_header}>{t('payout.userinfoemail')}</Text>
        <Text style={styles.userinfo_desc}>{t('payout.userinfo')}</Text>
        </View>

        <View style={styles.cards_container}>
            <View style={[styles.payment_card, styles.selected_payment_card]}>
                <View style={styles.icons_titles}>
                <Image style={[styles.icon, {tintColor: colors.secondary, width: 26, height: 26}]} source={icon.credit_card} />
                <Image style={[styles.icon, {tintColor: colors.secondary, width: 30, height: 30}]} source={icon.brand_visa} />

                </View>

                <Text style={styles.payment_card_number}>5462 **** **** **20</Text>
                <View style={styles.payment_card_info}>
                    <Text style={styles.payment_card_info_text}>Ashraf Salim</Text>
                    <Text style={styles.payment_card_info_text}>03/26</Text>
                </View>
            </View>
            <View style={styles.payment_card}>
                <View style={styles.icons_titles}>
                <Image style={[styles.icon, {tintColor: colors.secondary, width: 26, height: 26}]} source={icon.credit_card} />
                <Image style={[styles.icon, {tintColor: colors.secondary, width: 30, height: 30}]} source={icon.brand_mastercard} />

                </View>

                <Text style={styles.payment_card_number}>5462 **** **** **20</Text>
                <View style={styles.payment_card_info}>
                    <Text style={styles.payment_card_info_text}>Ashraf Salim</Text>
                    <Text style={styles.payment_card_info_text}>03/26</Text>
                </View>
            </View>
        </View>
        <View style={styles.prices_container}>
        <View style={styles.dotted}></View>

            <View style={styles.prices_item_info}>
            <Text style={[styles.prices_item_text, { fontSize: 20, fontWeight: 'bold'}]}>{t('payout.total')}</Text>
            <Text style={[styles.prices_item_text, {color: colors.secondary, fontSize: 20, fontWeight: 'bold'}]}>$11.00</Text>
            </View>
            <View style={styles.prices_item_info}>
            <Text style={styles.prices_item_text}>Ashraf Salim</Text>
            <Text style={styles.prices_item_text}>03/26</Text>
            </View>
            <View style={styles.prices_item_info}>
            <Text style={styles.prices_item_text}>Ashraf Salim</Text>
            <Text style={styles.prices_item_text}>03/26</Text>
            </View>
            <View style={styles.prices_item_info}>
            <Text style={styles.prices_item_text}>Ashraf Salim</Text>
            <Text style={styles.prices_item_text}>03/26</Text>
            </View>
            <View style={styles.prices_item_info}>
            <Text style={styles.prices_item_text}>Ashraf Salim</Text>
            <Text style={styles.prices_item_text}>03/26</Text>
            </View>
            <TouchableOpacity style={styles.paynow}>
                <Text style={styles.paynow_text}>{t('payout.paynow')}</Text>
            </TouchableOpacity>
        </View>
      </View>
    </I18nextProvider>
  );
}




export default Payout;