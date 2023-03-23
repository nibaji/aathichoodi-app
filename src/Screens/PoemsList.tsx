import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  StatusBar,
  Pressable,
} from 'react-native';
import type {NativeStackScreenProps} from '@react-navigation/native-stack';

import {RootStackParamList} from '../types/navigation';
import poems from '../Data/poems';
import AppColor from '../Theme/colors';
import {POEM} from '../types/screens';

type Props = NativeStackScreenProps<RootStackParamList>;
export default function PoemsList({navigation}: Props) {
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={AppColor.primary} />
      <View style={styles.poemsView}>
        <FlatList
          data={poems.aathichoodi}
          keyExtractor={item => item.poem}
          renderItem={({item}) => (
            <Pressable
              android_ripple={{radius: 500, color: AppColor.primary}}
              onPress={() => {
                navigation.navigate(POEM, {
                  poem: item,
                  title: `ஆத்திச்சூடி எண்: ${item.number}`,
                });
              }}>
              <View style={styles.poemView}>
                <Text style={styles.poemText}>{item.poem}</Text>
              </View>
            </Pressable>
          )}
          ItemSeparatorComponent={() => <View style={styles.separator} />}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: AppColor.primary,
  },
  poemsView: {
    flex: 1,
    marginBottom: '16%',
    margin: 4,
    backgroundColor: AppColor.accent,
    borderColor: AppColor.accent,
    borderRadius: 8,
    borderWidth: 4,
  },

  poemView: {
    padding: 4,
    margin: 4,
    borderRadius: 8,
  },
  separator: {
    borderColor: AppColor.primary,
    borderBottomWidth: 0.5,
  },
  poemText: {
    padding: 8,
    color: AppColor.primary,
  },
});
