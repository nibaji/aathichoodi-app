import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../types/navigation';
import {poemType} from '../types/poem';
import AppColor from '../Theme/colors';

type Props = NativeStackScreenProps<RootStackParamList>;
const PoemDetails = ({route}: Props) => {
  const {poem: poemDetails} = route.params as {poem: poemType};

  return (
    <ScrollView style={styles.main}>
      <View style={styles.poemView}>
        <Text style={styles.poem}>{poemDetails.poem}</Text>
      </View>

      <View style={styles.detailsHolder}>
        <View style={styles.titleDetailsHolder}>
          <Text style={styles.titleText}>விளக்கம்</Text>

          <Text style={styles.detailsText}>{poemDetails.paraphrase}</Text>
        </View>

        <View style={styles.titleDetailsHolder}>
          <Text style={styles.titleText}>Translation</Text>
          <Text style={styles.detailsText}>{poemDetails.translation}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 8,
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
});

export default PoemDetails;
