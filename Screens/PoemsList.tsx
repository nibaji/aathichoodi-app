import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import poems from "../Data/poems";
import AppColor from "../Theme/colors";

export default function PoemsList() {
  const navigation = useNavigation();
  return (
    <View style={styles.main}>
      <StatusBar backgroundColor={AppColor.primary} />
      <FlatList
        data={poems.aathichoodi}
        keyExtractor={(item) => item.poem}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Poem", {
                poem: item,
                title: `ஆத்திச்சூடி எண்: ${item.number}`,
              });
            }}
          >
            <View style={styles.kuralView}>
              <Text style={styles.kuralText}>{item.poem}</Text>
            </View>
          </TouchableOpacity>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  main: { flex: 1, padding: 5, backgroundColor: AppColor.primary },
  kuralView: {
    padding: 5,
    margin: 5,
    borderColor: "grey",
    borderBottomWidth: 1,
  },
  kuralText: {
    padding: 5,
    color: AppColor.accent,
  },
});
