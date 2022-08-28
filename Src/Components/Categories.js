import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";

export default function Categories({ title, show }) {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: show ? "#e1e1e7" : "white" },
      ]}
      disabled={show}
    >
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "45%",
    backgroundColor: "white",
    elevation: 10,
    margin: 5,
    height: 150,
    width: "46%",
    justifyContent: "center",
    // padding: 20,
    alignContent: "center",
    alignItems: "center",
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
