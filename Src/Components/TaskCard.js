import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TaskCard({ show }) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: show ? "#e1e1e7" : "white" },
      ]}
    >
      <View>
        <View style={styles.detailItem}>
          <Text style={styles.title}>Task Name: </Text>
          <Text style={styles.value}>ABC</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.subtitle}>Time: </Text>
          <Text style={styles.subvalue}>4:00 PM</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.subtitle}>Description: </Text>
          <Text style={styles.subvalue}>
            ................................................
          </Text>
        </View>
      </View>
      <View style={styles.mark}>
        <Ionicons name="ios-checkmark" size={24} color="green" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  detailItem: {
    flexDirection: "row",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
    width: "35%",
  },
  value: {
    fontSize: 16,
    width: "50%",
  },
  mark: {
    backgroundColor: "white",
    height: 30,
    width: 30,
    elevation: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 11,
    width: "35%",
    fontWeight: "bold",
  },
  subvalue: {
    width: "50%",
    fontSize: 11,
  },
});
