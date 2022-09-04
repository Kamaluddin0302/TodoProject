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
import {
  MaterialCommunityIcons,
  Octicons,
  MaterialIcons,
  Entypo,
} from "@expo/vector-icons";
import firebase from "firebase";
import { GetAllTasks } from "../Config/Functions/GetFunctions";
import { CompleteTaskFunc } from "../Config/Functions/updateFunctions";

export default function Home({ navigation }) {
  let [show, setShow] = useState(false);
  let [Now, setNow] = useState([]);

  let addNavigate = (path) => {
    setShow(!show);
    navigation.navigate(path);
  };

  let GelNowTask = async () => {
    let getAllTask = await GetAllTasks("");
    let todaydate = new Date().toLocaleString().split(" ");
    let filterTask = getAllTask.filter(
      (val, ind) =>
        todaydate[1] === val.date.split(" ")[1] &&
        todaydate[2] <= val.date.split(" ")[2] &&
        val.date.split(" ")[2] <= +todaydate[2] + 1
    );
    // let data = getAllTask[0].date.split(" ")[2];
    console.log(new Date().toLocaleString());
    setNow(filterTask);
  };

  useState(async () => {
    navigation.addListener("focus", () => {
      GelNowTask();
    });
  }, [navigation]);

  let CompteTask = async (id) => {
    try {
      await CompleteTaskFunc(id);
      GelNowTask();
    } catch (error) {
      alert(error);
    }
  };

  return (
    <View style={styles.container}>
      <Header navigation={navigation} path="TodoSearch" Title="All Todos" />
      <ScrollView scrollEnabled={!show}>
        <TouchableOpacity
          style={[
            styles.detail,
            { backgroundColor: show ? "#e1e1e7" : "white" },
          ]}
          activeOpacity={1}
          disabled={true}
        >
          {Now.length > 0 && <Text style={styles.subtitle}>Now</Text>}
          {Now.length > 0 &&
            Now.map((val, ind) => (
              <TaskCard
                show={show}
                val={val}
                key={ind}
                CompteTask={CompteTask}
                navigation={navigation}
              />
            ))}
          <Text style={styles.subtitle}>Categories</Text>
          <View style={styles.categories}>
            <Categories
              title="Upcoming Tasks (All Tasks)"
              show={show}
              Onpress={() =>
                navigation.navigate("AllTasks", { route: "Upcoming Tasks" })
              }
              icon={<Octicons name="tasklist" size={24} color="black" />}
            />
            <Categories
              title="Pending Tasks"
              show={show}
              Onpress={() =>
                navigation.navigate("AllTasks", { route: "Pending" })
              }
              icon={<MaterialIcons name="pending" size={30} color="red" />}
            />
            <Categories
              title="Completed Tasks"
              show={show}
              Onpress={() =>
                navigation.navigate("AllTasks", { route: "Completed" })
              }
              icon={
                <MaterialCommunityIcons
                  name="timer-sand-complete"
                  size={30}
                  color="green"
                />
              }
            />
            <Categories
              title="Weather Alert"
              show={show}
              Onpress={() =>
                navigation.navigate("AllAlert", { route: "Weather Alert" })
              }
              icon={
                <MaterialCommunityIcons
                  name="weather-cloudy-clock"
                  size={30}
                  color="black"
                />
              }
            />
            <Categories
              title="Location Alerts"
              show={show}
              Onpress={() =>
                navigation.navigate("AllAlert", { route: "Location Alert" })
              }
              icon={<Entypo name="location" size={24} color="black" />}
            />
            <Categories
              title="All Categories"
              show={show}
              Onpress={() =>
                navigation.navigate("AllAlert", { route: "All Categories" })
              }
              icon={<MaterialIcons name="category" size={24} color="black" />}
            />
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
