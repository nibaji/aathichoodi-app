import React from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import poems from '../Data/poems';
import AppColor from '../Theme/colors';
import AppBar from '../Components/AppBar';

export default function PoemsList() {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={AppColor.primary} />
      <AppBar />
      <View style={styles.poemsView}>
        <FlatList
          data={poems.aathichoodi}
          keyExtractor={item => item.poem}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Poem', {
                  poem: item,
                  title: `ஆத்திச்சூடி எண்: ${item.number}`,
                });
              }}>
              <View style={styles.poemView}>
                <Text style={styles.poemText}>{item.poem}</Text>
              </View>
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 5,
    backgroundColor: AppColor.primary,
  },
  poemsView: {
    flex: 1,
    padding: 5,
    backgroundColor: AppColor.primary,
    borderColor: AppColor.accent,
    borderRadius: 14,
    borderWidth: 5,
  },

  poemView: {
    padding: 5,
    margin: 5,
    borderColor: 'grey',
    borderBottomWidth: 1,
  },
  poemText: {
    padding: 5,
    color: AppColor.accent,
  },
});
