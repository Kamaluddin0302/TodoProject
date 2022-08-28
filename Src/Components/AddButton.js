import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

import { Ionicons } from "@expo/vector-icons";

export default function AddButton({ onPress }) {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.6}
      onPress={() => onPress()}
    >
      <Ionicons name="add" size={40} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    elevation: 20,
    position: "absolute",
    bottom: 20,
    right: 20,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    height: 70,
    width: 70,
  },
});
