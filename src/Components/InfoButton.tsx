import React from 'react';
import {TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {useDispatch} from 'react-redux';

import {changeAppInfoVisibility} from '../Redux/appInfo';
import InfoModal from './InfoModal';

Entypo.loadFont();
export default function InfoButton() {
  const dispatch = useDispatch();

  const onPressInfoHandle = () => {
    dispatch(changeAppInfoVisibility());
  };

  return (
    <>
      <TouchableOpacity onPress={onPressInfoHandle}>
        <Entypo name="info-with-circle" size={24} color="white" />
      </TouchableOpacity>
      <InfoModal />
    </>
  );
}
