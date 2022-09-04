import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import React, { useState } from "react";
import SearchBar from "../Components/SearchBar";
import TaskCard from "../Components/TaskCard";
import TodoCard from "../Components/TodoCard";
import Header from "../Components/Header";
import {
  GetAllCompletedTasks,
  GetAllPendingTasks,
  GetAllTasks,
  GetCategories,
  GetLocationAlert,
  GetWeatherAlert,
} from "../Config/Functions/GetFunctions";
import { DeleteTaskFunc } from "../Config/Functions/updateFunctions";
import AlertCard from "../Components/AlertCard";

export default function Allalter({ navigation, route }) {
  let [AllTasks, setAllTasks] = useState([]);
  let [NotFound, setNotFound] = useState("");
  let [Spiner, setSpiner] = useState(false);
  let [Search, setSearch] = useState("");

  let GetWeatherAlertFunc = async () => {
    setSpiner(true);

    try {
      let getAllTask = await GetWeatherAlert();

      setAllTasks(getAllTask);
      setSpiner(false);
    } catch (error) {
      setSpiner(false);
    }
  };

  let GetLocationAlertFunc = async () => {
    setSpiner(true);

    try {
      let getAllTask = await GetLocationAlert();

      setAllTasks(getAllTask);
      setSpiner(false);
    } catch (error) {
      setSpiner(false);
    }
  };

  let GetCategoriesFunc = async () => {
    setSpiner(true);

    try {
      let getAllTask = await GetCategories();

      setAllTasks(getAllTask);
      setSpiner(false);
    } catch (error) {
      setSpiner(false);
    }
  };

  let EditTodo = (val) => {
    navigation.navigate("EditAlert", { data: val });
  };

  let DeleteTodo = (id, Title) =>
    Alert.alert("Are you sure you want to Delete this task?", Title, [
      {
        text: "Cancel",
        onPress: () => console.log("Cancel Pressed"),
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          try {
            DeleteTaskFunc(id);
            alert("Deleted Successfully");

            CheckFunc();
          } catch (error) {
            alert(error);
          }
        },
      },
    ]);

  let CheckFunc = () => {
    if (route.params.route === "Weather Alert") {
      GetWeatherAlertFunc();
    }
    if (route.params.route === "Location Alert") {
      GetLocationAlertFunc();
    }
    if (route.params.route === "All Categories") {
      GetCategoriesFunc();
    }
  };
  useState(async () => {
    navigation.addListener("focus", () => {
      CheckFunc();
    });
  }, [navigation]);

  let filterTodo = AllTasks.filter((val) =>
    val.Title.toLocaleLowerCase().includes(Search.toLocaleLowerCase())
  );
  return (
    <View style={styles.container}>
      <SearchBar onChange={(text) => setSearch(text)} navigation={navigation} />
      <View style={styles.MainContainer}>
        <ScrollView>
          {Spiner ? (
            <ActivityIndicator size="large" color="red" />
          ) : filterTodo.length > 0 ? (
            filterTodo.map((val, ind) => (
              <AlertCard
                navigation={navigation}
                key={ind}
                val={val}
                DeleteTodo={DeleteTodo}
              />
            ))
          ) : (
            <Text style={styles.Notfound}> Data Not Found</Text>
          )}
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 40,
  },
  MainContainer: {
    padding: 20,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
  },
  Notfound: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
  },
});
