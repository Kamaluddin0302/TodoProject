import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

export default function TaskCard({ show, val, CompteTask, navigation }) {
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: show ? "#e1e1e7" : "white" },
      ]}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("TaskDetail", { val: val })}
      >
        <View style={styles.detailItem}>
          <Text style={styles.title}>Task Name: </Text>
          <Text style={styles.value}>{val.Title}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.subtitle}>Time: </Text>
          <Text style={styles.subvalue}>{val.date}</Text>
        </View>
        <View style={styles.detailItem}>
          <Text style={styles.subtitle}>Description: </Text>
          <Text style={styles.subvalue}>{val.Description}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.mark}>
        {val.status === "completed" ? (
          <Ionicons name="ios-checkmark" size={24} color="green" />
        ) : (
          <TouchableOpacity
            style={styles.mark}
            onPress={() => CompteTask(val.id)}
          ></TouchableOpacity>
        )}
      </TouchableOpacity>
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
