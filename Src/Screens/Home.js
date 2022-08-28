import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { BlurView } from "expo-blur";

import React, { useState } from "react";
import Header from "../Components/Header";
import AddButton from "../Components/AddButton";
import TaskCard from "../Components/TaskCard";
import Categories from "../Components/Categories";
import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Home({ navigation }) {
  let [show, setShow] = useState(false);

  let addNavigate = (path) => {
    setShow(!show);
    navigation.navigate(path);
  };

  return (
    <View style={styles.container}>
      <Header navigation ={navigation}/>
      <ScrollView scrollEnabled={!show}>
        <TouchableOpacity
          style={[
            styles.detail,
            { backgroundColor: show ? "#e1e1e7" : "white" },
          ]}
          activeOpacity={1}
          disabled={true}
        >
          <Text style={styles.subtitle}>Now</Text>
          <TaskCard show={show} />
          <Text style={styles.subtitle}>Categories</Text>
          <View style={styles.categories}>
            <Categories title="Upcoming Tasks (All Tasks)" show={show} />
            <Categories title="Pending Tasks" show={show} />
            <Categories title="Weather Alert" show={show} />
            <Categories title="Location Alerts" show={show} />
            <Categories title="Upcoming Tasks (All Tasks)" show={show} />
            <Categories title="Pending Tasks" show={show} />
            <Categories title="Weather Alert" show={show} />
            <Categories title="Location Alerts" show={show} />
          </View>
        </TouchableOpacity>
      </ScrollView>
      <View>
        {show && (
          <View style={styles.popup}>
            <TouchableOpacity
              style={styles.naviButton}
              onPress={() => addNavigate("AddTask")}
            >
              <Text style={styles.addCat}>Task</Text>
              <MaterialCommunityIcons
                name="greater-than"
                size={20}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => addNavigate("Addweather")}
              style={styles.naviButton}
            >
              <Text style={styles.addCat}>Weather Alert</Text>
              <MaterialCommunityIcons
                name="greater-than"
                size={20}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => addNavigate("AddLocation")}
              style={styles.naviButton}
            >
              <Text style={styles.addCat}>Location Alert</Text>
              <MaterialCommunityIcons
                name="greater-than"
                size={20}
                color="white"
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => addNavigate("AddNewCategory")}
              style={styles.naviButton}
            >
              <Text style={styles.addCat}>Add a New Category</Text>
              <MaterialCommunityIcons
                name="greater-than"
                size={20}
                color="white"
              />
            </TouchableOpacity>
          </View>
        )}
        <AddButton onPress={() => setShow(!show)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  detail: {
    padding: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  categories: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  popup: {
    backgroundColor: "black",
    elevation: 20,
    position: "absolute",
    bottom: 50,
    right: 85,
    borderRadius: 5,
    justifyContent: "center",
    zIndex: 1,
    padding: 15,
  },
  addCat: {
    fontWeight: "bold",
    fontSize: 18,
    color: "white",

    marginVertical: 5,
    textTransform: "uppercase",
  },
  naviButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderBottomColor: "lightgray",
    borderBottomWidth: 1,
  },
});
