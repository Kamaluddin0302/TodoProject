import { View, Text, StyleSheet, ScrollView } from "react-native";
import React from "react";
import SearchBar from "../Components/SearchBar";
import TaskCard from "../Components/TaskCard";

export default function Search() {
  return (
    <View style={styles.container}>
      <SearchBar />
      <ScrollView>
        <Text style={styles.subtitle}>Now</Text>
        <TaskCard />
        <Text style={styles.subtitle}>Later</Text>
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
    padding: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
});
