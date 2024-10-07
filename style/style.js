import { StyleSheet } from 'react-native';
import React, {useState} from 'react';

const getStyles = (colors) => StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },

  text: {
    color: colors.text,
  },

  header: {
    width: "90%",
    height: 40, 
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  header_text: {
    color: colors.text,
    fontWeight: 'bold',
    opacity: 0.9
  },

  header_pfp: {
    width: 30,
    height: 30,
    borderRadius: 5,
    backgroundColor: colors.primary,
  },

  icon: {
    width: 30,
    height: 30,
    tintColor: colors.offwhite,
  },

  slider: {
    width: "90%",
    height: 120,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    borderRadius: 10,
    marginTop: 15,
  },

  slider_indicator: {
    width: '90%',
    height: 40,
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 10
  },

  slider_indicator_item: {
    width: 12,
    height: 12,
    backgroundColor: colors.primary,
    borderRadius: 20
  },

  slider_indicator_item_active: {
    width: 40,
    backgroundColor: colors.secondary,
  },

  search_container: {
    width: '90%',
    height: 50,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 30,
    marginBottom: 10,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    gap: 10
  },

  search_input: {
    width: '70%',
    height: 35,
    flex: 1,
    color: colors.text,
    fontSize: 16,
  },

  category_container: {
    width: '90%',
    height: 40,
    alignSelf: 'center', 
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },

  categories_container: {
    width: '100%',
    height: 50,
    alignSelf: 'center',
    gap: 15,
    paddingLeft: 10,
    flexDirection: 'row',
  },

  categories_button: {
    minWidth: 20,
    height: 40,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
    fontSize: 12,
    borderRadius: 10,
    color: colors.text,
    marginRight: 10,
  },

  category_title: {
    color: colors.offwhite,
    fontSize: 13,
  },

  topgamesfu: {
    width: '90%',
    height: 140,
    alignSelf:'center',
    flexDirection: 'row',

  },

  topgamecontainer: {
    width: '50%',
    height: '100%',
    gap: 10,
  },

  topgameitem: {
    height: '47%',
    width: '87%',
    flexDirection:'row',
    gap: 5,

  },

  topgamepfp: {
    width: '25%',
    height: '90%',
    borderRadius: 5,
    backgroundColor: colors.primary,
    objectFit: 'cover'
  },

  topgameinfos: {
    height: '100%',
    flex: 1,
  },

  topgametitle: {
    fontSize: 12,
    color: colors.text,
    fontWeight: 'bold'
  },

  topgamedesc: {
    fontSize: 10,
    color: colors.offwhite
  },



  pfp: {
    width: 130,
    height: 130,
    borderRadius: 100,
    backgroundColor: 'green',
    alignSelf: 'center',
    marginTop: 50,
  },

  pfp_name: {
    alignSelf:'center',
    marginTop: 15,
    color: colors.text,
    fontSize: 18,
    fontWeight: 'bold'
  },

  pfp_name_desc: {
    alignSelf: 'center',
    marginTop: 2.5,
    color: colors.offwhite,
  },

  profile_main_btns: {
    width: '90%',
    height: 85,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  profile_main_item: {
    width: '20%',
    height: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 5
  },

  profile_main_item_icon: {
    width: 40,
    height: 40,
    backgroundColor: colors.secondary,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },

  profile_main_item_title: {
    color: colors.text,
    fontSize: 12
  },

  profile_prefrences_container: {
    width: '90%',
    height: 160,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    marginTop: 30,
    borderRadius: 10,
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    gap: 5,
  },

  prefrences_btn: {
    width: '90%',
    height: '30%',
    position: 'relative',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent:'space-between'
  },

  prefrences_btn_icon: {
    width: 37,
    height: 37,
    backgroundColor: colors.secondary,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center'
  },  


  prefrences_btn_title: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 12,
  },


  logout_button: {
    width: 110,
    height: 35,
    backgroundColor:'#dc2626',
    borderRadius: 5,
    position: 'absolute',
    bottom: 30,
    left: 20,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 5,
    gap: 8,
    justifyContent: 'center'
  },

  logout_title: {
    color: "white",
    fontWeight: 'bold'
  },

  userinfo_title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.text,
    marginTop: 30,
    width: '90%',
    alignSelf: 'center',
    marginBottom: 10,
  },

  userinfo_container: {
    alignItems:'center',
    justifyContent: 'space-between',
    width: '90%',
    alignSelf: 'center',
    flexDirection: 'row',
    marginBottom: 5
  },

  userinfo_header: {
    color: colors.text,
    fontWeight: "bold",
    opacity: 0.8
  },

  userinfo_desc: {
    color: colors.text,
    opacity: 0.8
  },

  cards_container: {
    width: '90%',
    height: 100,
    alignSelf: 'center',
    marginTop: 30,
    flexDirection: 'row',
    gap: 15
  },

  payment_card: {
    width: '50%',
    flex: 1,
    backgroundColor: colors.primary,
    borderRadius: 10,
    paddingTop: 10,
  },

  icons_titles: {
    width: '90%',
    height: 25,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },

  payment_card_number: {
    color: colors.text,
    width: '90%',
    alignSelf: 'center',
    marginTop: 10,
    fontSize: 12
  },

  payment_card_info: {
    width: '90%',
    height: 25,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 5,
  },

  payment_card_info_text: {
    fontSize: 12,
    color: colors.text,
    opacity: 0.8,
  },

  selected_payment_card: { 
      borderColor: `rgba(145, 39, 227, 0.7)`, 
      borderWidth: 2, 
      borderStyle: 'solid' 
    },
  
  dotted: {
    width: '100%',
    height: 1,
    borderBottomWidth: 2,
    borderStyle: 'dotted',
    borderColor: colors.text,
    marginTop: 50,
    alignSelf: 'center',
    marginBottom: 10,
  },

  prices_container: {
    width: '90%',
    alignSelf: 'center', 
    flexDirection: 'column',
    position:'absolute',
    bottom: 0
  },

  prices_item_info: {
    width: '100%',

    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 5
  },

  prices_item_text: {
    fontSize: 14,
    color: colors.text,
    opacity: 1,
  },


  paynow: {
    width: '100%',
    height: 45,
    backgroundColor: colors.secondary,
    borderRadius: 10,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    justifyContent: 'center'
  },

  paynow_text: {
    fontSize: 16,
    color: "white",
    fontWeight: 'bold',
  }
  
  
});

export default getStyles;
