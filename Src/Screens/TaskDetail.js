import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CompleteTaskFunc } from "../Config/Functions/updateFunctions";

export default function TaskDetail({ route, navigation }) {
  let { val } = route.params;

  let CompteTask = async (id) => {
    try {
      await CompleteTaskFunc(id);
      navigation.goBack(-1);
    } catch (error) {
      alert(error);
    }
  };

  console.log(val);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color="black"
          onPress={() => navigation.goBack(-1)}
        />
      </View>
      <View style={styles.Detail}>
        <View style={styles.mainView}>
          <Text style={styles.name}>{val.Title}</Text>
          <View style={styles.item}>
            <Text style={styles.title}>Description:</Text>
            <Text style={styles.value}> {val.Description}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>Location:</Text>
            <Text style={styles.value}> {val.Location}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>Pirority:</Text>
            <Text style={styles.value}> {val.Pirority}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>Date:</Text>
            <Text style={styles.value}> {val.date}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>Status:</Text>
            <Text style={styles.value}> {val.status}</Text>
          </View>
          <View style={styles.item}>
            <Text style={styles.title}>Category:</Text>
            <Text style={styles.value}> {val.Categories}</Text>
          </View>
          <TouchableOpacity
            style={styles.complete}
            disabled={val.status === "pending" ? false : true}
            onPress={() => CompteTask(val.id)}
          >
            <Text style={styles.completeText}>
              {val.status === "pending" ? "Complete" : "Completed"}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 20,
    flex: 1,
    backgroundColor: "white",
  },
  name: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 50,
  },
  Detail: {
    backgroundColor: "white",
    justifyContent: "center",
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    width: "50%",
  },
  value: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
    width: "50%",
  },
  item: {
    flexDirection: "row",
    justifyContent: "center",
    elevation: 5,
    backgroundColor: "white",
    padding: 10,
    marginVertical: 5,
  },
  mainView: {
    backgroundColor: "white",
    elevation: 15,
    padding: 20,
  },
  complete: {
    backgroundColor: "white",
    elevation: 15,
    alignSelf: "center",
    padding: 10,
    backgroundColor: "lightgreen",
    borderRadius: 5,
    marginVertical: 10,
  },
  completeText: {
    color: "black",
    fontWeight: "bold",
  },
});
