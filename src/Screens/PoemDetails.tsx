import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AppColor from '../Theme/colors';

interface PoemDetailsType {
  route: any;
}

const PoemDetails: React.FC<PoemDetailsType> = ({route}) => {
  const {poem: poemDetails} = route.params;

  return (
    <View style={styles.main}>
      <View style={styles.poemView}>
        <Text style={styles.poem}>{poemDetails.poem}</Text>
      </View>

      <View style={styles.titleDetailsHolder}>
        <Text style={styles.titleText}>விளக்கம்</Text>

        <Text style={styles.detailsText}>{poemDetails.paraphrase}</Text>
      </View>

      <View style={styles.titleDetailsHolder}>
        <Text style={styles.titleText}>Translation</Text>
        <Text style={styles.detailsText}>{poemDetails.translation}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 5,
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
  titleDetailsHolder: {
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    marginTop: 8,
    marginBottom: 14,
  },
  titleText: {
    padding: 5,
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    textDecorationLine: 'underline',
  },
  detailsText: {
    padding: 5,
    textAlign: 'justify',
    fontSize: 14,
    color: AppColor.primary,
    flexWrap: 'wrap',
  },
});

export default PoemDetails;
