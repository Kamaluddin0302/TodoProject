import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <AntDesign name="search1" size={22} color="black" />
      <TextInput placeholder="Search Task" style={styles.input} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    elevation:10,
    borderRadius:5
  },
  input: {
    marginLeft: 10,
  },
});
