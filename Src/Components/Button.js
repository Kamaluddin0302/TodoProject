import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React from "react";

export default function Button({ title, Onpress, style, spiner }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        style,
        { backgroundColor: spiner ? "#56a2e9" : "#228bee" },
      ]}
      onPress={() => Onpress()}
      disabled={spiner}
    >
      <Text style={[styles.title]}>{title}</Text>
      {spiner && <ActivityIndicator size="small" color="white" />}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#228bee",
    alignSelf: "center",
    padding: 15,
    marginVertical: 20,
    borderRadius: 25,
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: "white",
    fontWeight: "bold",
  },
});
