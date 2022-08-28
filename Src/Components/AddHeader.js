import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

export default function AddHeader({ title, navigation, AddFunction }) {
  return (
    <View style={styles.container}>
      <Ionicons
        name="ios-arrow-back-sharp"
        size={24}
        color="black"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.lefttext}>{title}</Text>
      <View style={styles.rightView}>
        <Ionicons
          name="checkmark"
          size={24}
          color="black"
          onPress={() => AddFunction()}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    elevation: 5,
    paddingTop: 40,
    padding: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  rightView: {
    flexDirection: "row",
    alignItems: "center",
  },
  lefttext: {
    fontSize: 20,
    fontWeight: "bold",
  },
  icon: {
    marginRight: 10,
  },
});
