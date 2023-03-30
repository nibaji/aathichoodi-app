import React, {useEffect} from 'react';
import {View} from 'react-native';
import {Provider} from 'react-redux';
import mobileAds, {MaxAdContentRating} from 'react-native-google-mobile-ads';

import StackedNavigation from './src/Navigation/stackedNavigation';
import InfoModal from './src/Components/InfoModal';

import store from './src/Redux/store';

import AppColor from './src/Theme/colors';

export default function App() {
  useEffect(() => {
    mobileAds()
      .setRequestConfiguration({
        maxAdContentRating: MaxAdContentRating.PG,
        tagForChildDirectedTreatment: true,
        tagForUnderAgeOfConsent: true,
      })
      .then(() => mobileAds().initialize());
  }, []);

  return (
    <Provider store={store}>
      <View style={{flex: 1, backgroundColor: AppColor.accent}}>
        <StackedNavigation />
        <InfoModal />
      </View>
    </Provider>
  );
}
