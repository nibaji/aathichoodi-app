import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppColor from "../Theme/colors";

interface PoemDetails {
  route: any;
}

const PoemDetails: React.FC<PoemDetails> = ({ route }) => {
  const { poem: poemDetails } = route.params;

  return (
    <View style={styles.main}>
      <View style={styles.poemView}>
        <Text style={{ ...styles.detailsText, width: "100%" }}>
          {poemDetails.poem}
        </Text>
      </View>

      <View style={styles.rowView}>
        <Text style={styles.titletext}>விளக்கம் :</Text>

        <Text style={styles.detailsText}>{poemDetails.paraphrase}</Text>
      </View>

      <View style={styles.rowView}>
        <Text style={styles.titletext}>Translation :</Text>
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
    alignItems: "center",
  },
  poemView: {
    margin: 18,
  },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    //flexWrap: "wrap",
    marginTop: 8,
    marginBottom: 14,
  },
  titletext: {
    padding: 5,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 14,
    color: "black",
    width: "30%",
  },
  detailsText: {
    padding: 5,
    textAlign: "justify",
    fontWeight: "bold",
    fontSize: 14,
    color: AppColor.primary,
    flexWrap: "wrap",
    width: "70%",
  },
});

export default PoemDetails;
