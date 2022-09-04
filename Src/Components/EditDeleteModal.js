import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import {
  Entypo,
  Feather,
  AntDesign,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

export default function EditDeleteModal({
  onPress,
  navigation,
  val,
  DeleteTodo,
  EditTodo,
}) {
  return (
    <View style={[styles.container]}>
      <View style={styles.modalView}>
        <Entypo
          name="cross"
          size={24}
          color="black"
          style={styles.crossIcon}
          onPress={() => onPress()}
        />
        <View style={styles.buttons}>
          <TouchableOpacity
            style={[styles.button, { backgroundColor: "green" }]}
            onPress={() => {
              EditTodo(val);
              onPress();
            }}
          >
            <Text style={styles.buttonText}> Edit</Text>
            <Feather name="edit" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.button, { backgroundColor: "red" }]}
            onPress={() => {
              DeleteTodo(val.id, val.Title);
              onPress();
            }}
          >
            <Text style={styles.buttonText}> Delete</Text>
            <MaterialCommunityIcons
              name="delete-forever"
              size={24}
              color="white"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    // alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 30,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    // alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  crossIcon: {
    alignSelf: "flex-end",
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    width: "35%",
    justifyContent: "space-between",
    borderRadius: 5,
    margin: 5,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 18,
  },
});
