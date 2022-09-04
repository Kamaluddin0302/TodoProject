import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";

export default function AlertCard({
  show,
  val,
  CompteTask,
  navigation,
  DeleteTodo,
}) {
  console.log(val);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: show ? "#e1e1e7" : "white" },
      ]}
      onPress={() => navigation.navigate("AlertDetail", { val: val })}
    >
      <TouchableOpacity style={styles.mark}>
        <Ionicons name="ios-alert-circle-outline" size={24} color="black" />
      </TouchableOpacity>
      <View style={styles.detailItem}>
        <Text style={styles.title}>{val.Title} </Text>
        <Text style={styles.value}>{val.Description}</Text>
      </View>
      <TouchableOpacity style={styles.down} onPress={() => DeleteTodo(val.id)}>
        <AntDesign name="delete" size={20} color="red" />
      </TouchableOpacity>
    </TouchableOpacity>
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
  detailItem: {},
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
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
  down: {
    padding: 10,
  },
});
