import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { changeAppInfoVisibility } from "../Redux/appInfo";
import AppColor from "../Theme/colors";

export default function AppBar() {
  const dispatch = useDispatch();

  const onPressInfoHandle = () => {
    dispatch(changeAppInfoVisibility());
    //console.log(showInfo + "appbar");
  };

  return (
    <View style={styles.main}>
      <Text style={styles.titleText}>ஆத்திச்சூடி</Text>
      <TouchableOpacity onPress={onPressInfoHandle}>
        <Entypo name="info-with-circle" size={27} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flexDirection: "row",
    backgroundColor: AppColor.primary,
    padding: 5,
    justifyContent: "space-between",
    alignItems: "center",
  },
  titleText: {
    padding: 5,
    textAlign: "left",
    fontWeight: "bold",
    fontSize: 23,
    color: AppColor.accent,
  },
});
