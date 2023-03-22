import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';
import {changeAppInfoVisibility} from '../Redux/appInfo';
import AppColor from '../Theme/colors';
import AppInfo from './Info';

Entypo.loadFont();
export default function AppBar() {
  const dispatch = useDispatch();

  const onPressInfoHandle = () => {
    dispatch(changeAppInfoVisibility());
  };

  return (
    <View style={styles.main}>
      <Text style={styles.titleText}>ஆத்திச்சூடி</Text>
      <TouchableOpacity onPress={onPressInfoHandle}>
        <Entypo name="info-with-circle" size={24} color="white" />
      </TouchableOpacity>
      <AppInfo />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    backgroundColor: AppColor.primary,
    padding: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    padding: 8,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 24,
    color: AppColor.accent,
  },
});
