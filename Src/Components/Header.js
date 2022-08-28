import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { AntDesign, Entypo } from "@expo/vector-icons";

export default function Header({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.lefttext}>Todos</Text>
      <View style={styles.rightView}>
        <AntDesign
          name="search1"
          size={22}
          color="black"
          style={styles.icon}
          onPress={() => navigation.navigate("Search")}
        />
        <Entypo name="dots-three-vertical" size={20} color="black" />
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
