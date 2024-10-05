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


  
});

export default getStyles;
