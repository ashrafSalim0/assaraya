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
    tintColor: colors.text,
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

  slider_indicator_item_second: {
    width: 40,
    backgroundColor: colors.secondary,
  },

  search_container: {
    width: '90%',
    height: 60,
    backgroundColor: colors.primary,
    alignSelf: 'center',
    borderRadius: 15,
    marginTop: 30,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    gap: 5
  },

  search_input: {
    width: '70%',
    height: 35,
    flex: 1,
  }
});

export default getStyles;
