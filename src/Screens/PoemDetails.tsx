import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useHeaderHeight} from '@react-navigation/elements';
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';

import poems from '../Data/poems';
import {RootStackParamList} from '../types/navigation';
import {poemType} from '../types/poem';
import adUnitIds from '../../adUnitIds.json';

import AppColor from '../Theme/colors';

type Props = NativeStackScreenProps<RootStackParamList>;
const PoemDetails = ({route, navigation}: Props) => {
  const initialPoemNumber = route.params?.poemNumber as number;

  const aathichoodiLength = poems.aathichoodi.length;
  const maxPoemNumber = poems.aathichoodi[aathichoodiLength - 1].number;
  const minPoemNumber = poems.aathichoodi[0].number;

  const [poemNumber, setPoemNumber] = useState<number>(initialPoemNumber);
  const [poemDetails, setPoemDetails] = useState<poemType>();

  const adUnitId = __DEV__ ? TestIds.BANNER : adUnitIds.banner;

  const windowWidth = useWindowDimensions().width;
  const headerHeight = useHeaderHeight();

  useEffect(() => {
    navigation.setParams({title: `ஆத்திச்சூடி எண்: ${poemNumber}`});
    setPoemDetails(poems.aathichoodi.find(p => p.number === poemNumber));
  }, [poemNumber, navigation]);

  return (
    <View style={styles.main}>
      <ScrollView style={{marginBottom: headerHeight}}>
        <View style={styles.poemView}>
          <Text style={styles.poem}>{poemDetails?.poem}</Text>
        </View>

        <View style={styles.detailsHolder}>
          <View style={styles.titleDetailsHolder}>
            <Text style={styles.titleText}>விளக்கம்</Text>

            <Text style={styles.detailsText}>{poemDetails?.paraphrase}</Text>
          </View>

          <View style={styles.titleDetailsHolder}>
            <Text style={styles.titleText}>Translation</Text>
            <Text style={styles.detailsText}>{poemDetails?.translation}</Text>
          </View>
        </View>
      </ScrollView>

      <BannerAd
        unitId={adUnitId}
        size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
        requestOptions={{
          requestNonPersonalizedAdsOnly: true,
        }}
        onAdLoaded={a => console.log(a)}
        onAdFailedToLoad={a => console.log(a)}
      />
      <View style={{...styles.bottomButtonsHolder, bottom: headerHeight}}>
        <Pressable
          android_ripple={{radius: windowWidth, color: AppColor.accent}}
          pressRetentionOffset={100}
          style={[
            styles.poemNavBtn,
            minPoemNumber === poemNumber ? styles.poemNavBtnDisabled : null,
          ]}
          onPress={() => poemNumber > 0 && setPoemNumber(poemNumber - 1)}
          disabled={minPoemNumber === poemNumber}>
          <Text style={styles.navBtnText}>&nbsp;&nbsp;&lt;&nbsp;&nbsp;</Text>
        </Pressable>
        <Pressable
          android_ripple={{
            radius: windowWidth,
            color: AppColor.accent,
          }}
          pressRetentionOffset={100}
          style={[
            styles.poemNavBtn,
            maxPoemNumber === poemNumber ? styles.poemNavBtnDisabled : null,
          ]}
          onPress={() =>
            poemNumber < maxPoemNumber && setPoemNumber(poemNumber + 1)
          }
          disabled={maxPoemNumber === poemNumber}>
          <Text style={styles.navBtnText}>&nbsp;&nbsp;&gt;&nbsp;&nbsp;</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 8,
    height: '100%',
    backgroundColor: AppColor.accent,
  },
  poemView: {
    marginVertical: 18,
    paddingBottom: 18,
    alignItems: 'center',
    textAlign: 'justify',
    borderBottomWidth: 1,
    borderColor: AppColor.primary,
    borderStyle: 'dotted',
    width: '100%',
  },
  poem: {
    fontWeight: 'bold',
    fontSize: 18,
    color: AppColor.primary,
  },
  detailsHolder: {
    paddingHorizontal: 8,
  },
  titleDetailsHolder: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 8,
    marginBottom: 14,
  },
  titleText: {
    padding: 8,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    textDecorationLine: 'underline',
  },
  detailsText: {
    padding: 8,
    textAlign: 'justify',
    fontSize: 14,
    color: AppColor.primary,
    flexWrap: 'wrap',
  },
  bottomButtonsHolder: {
    position: 'absolute',
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    marginBottom: 16,
    justifyContent: 'space-around',
  },
  poemNavBtn: {
    backgroundColor: AppColor.primary,
    borderRadius: 24,
    alignItems: 'baseline',
    padding: 12,
  },
  poemNavBtnDisabled: {
    opacity: 0.5,
  },
  navBtnText: {
    color: AppColor.accent,
    textAlign: 'center',
  },
});

export default PoemDetails;
