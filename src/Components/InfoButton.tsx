import React from 'react';
import {Pressable} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';

import {changeAppInfoVisibility} from '../Redux/appInfo';

Entypo.loadFont();
export default function InfoButton() {
  const dispatch = useDispatch();

  const onPressInfoHandle = () => {
    dispatch(changeAppInfoVisibility());
  };

  return (
    <Pressable android_ripple={{radius: 10}} onPress={onPressInfoHandle}>
      <Entypo name="info-with-circle" size={24} color="white" />
    </Pressable>
  );
}
