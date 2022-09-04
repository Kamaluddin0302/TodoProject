import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";

export default function SearchBar({ onChange, navigation }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="arrow-back-outline"
        size={30}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <View style={styles.Maincontainer}>
        <AntDesign name="search1" size={22} color="black" />
        <TextInput
          placeholder="Search Task"
          style={styles.input}
          onChangeText={(text) => onChange(text)}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  Maincontainer: {
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "white",
    width: "80%",
    marginLeft: 20,
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "center",
  },
  input: {
    marginLeft: 10,
  },
});
