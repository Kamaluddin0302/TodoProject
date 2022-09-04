import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { CompleteTaskFunc } from "../Config/Functions/updateFunctions";

export default function AlertDetail({ route, navigation }) {
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
          {val.image && (
            <Image source={{ uri: val.image }} style={styles.image} />
          )}
          <View style={styles.item}>
            <Text style={styles.title}>Description:</Text>
            <Text style={styles.value}> {val.Description}</Text>
          </View>
          {val.Weather && (
            <View style={styles.item}>
              <Text style={styles.title}>Weather:</Text>
              <Text style={styles.value}> {val.Weather}</Text>
            </View>
          )}
          {val.Location && (
            <View style={styles.item}>
              <Text style={styles.title}>Location:</Text>
              <Text style={styles.value}> {val.Location}</Text>
            </View>
          )}
          {val.Pirority && (
            <View style={styles.item}>
              <Text style={styles.title}>Pirority:</Text>
              <Text style={styles.value}> {val.Pirority}</Text>
            </View>
          )}
          {val.date && (
            <View style={styles.item}>
              <Text style={styles.title}>Date:</Text>
              <Text style={styles.value}> {val.date.tolocaledatestring()}</Text>
            </View>
          )}
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
  image: {
    width: "100%",
    height: 200,
  },
});
