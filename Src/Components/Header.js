import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useState } from "react";
import { AntDesign, Entypo, Ionicons } from "@expo/vector-icons";

export default function Header({ navigation, back, Title, path }) {
  let [search, setSearch] = useState(true);
  return (
    <View style={styles.container}>
      {back && (
        <Ionicons
          name="arrow-back-outline"
          size={24}
          color="black"
          onPress={() => navigation.goBack()}
        />
      )}

      <Text style={styles.lefttext}>{Title}</Text>
      <View style={styles.rightView}>
        <AntDesign
          name="search1"
          size={22}
          color="black"
          style={styles.icon}
          onPress={() => navigation.navigate(path, { route: Title })}
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
    marginBottom: 2,
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
