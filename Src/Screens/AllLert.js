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
  GetAllCategories,
  GetLocationAlert,
  GetWeatherAlert,
} from "../Config/Functions/GetFunctions";
import {
  DeleteAlertFunc,
  DeleteTaskFunc,
} from "../Config/Functions/updateFunctions";
import AlertCard from "../Components/AlertCard";

export default function Allalter({ navigation, route }) {
  let [AllTasks, setAllTasks] = useState([]);
  let [NotFound, setNotFound] = useState("");
  let [Spiner, setSpiner] = useState(false);

  let GetWeatherAlertFunc = async () => {
    setSpiner(true);
    try {
      let getAllTask = await GetWeatherAlert();
      setAllTasks(getAllTask);
      setSpiner(false);
    } catch (error) {
      setSpiner(false);
      setAllTasks([]);
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
      setAllTasks([]);
    }
  };

  let GetCategoriesFunc = async () => {
    setSpiner(true);
    try {
      let getAllTask = await GetAllCategories();
      setAllTasks(getAllTask);
      setSpiner(false);
    } catch (error) {
      setSpiner(false);
      setAllTasks([]);
    }
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
            console.log(route.params.route);
            if (route.params.route === "Weather Alert") {
              DeleteAlertFunc("weather", id).then(() => {
                CheckFunc();
                alert("Deleted Successfully");
              });
            }
            if (route.params.route === "Location Alert") {
              DeleteAlertFunc("Locations", id).then(() => {
                CheckFunc();
                alert("Deleted Successfully");
              });
            }
            if (route.params.route === "All Categories") {
              DeleteAlertFunc("Categories", id).then(() => {
                CheckFunc();
                alert("Deleted Successfully");
              });
            }
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

  console.log(route.params.route);

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        path="AlertSearch"
        Title={route.params.route}
        back={true}
      />
      <View style={styles.MainContainer}>
        <ScrollView>
          {Spiner ? (
            <ActivityIndicator size="large" color="red" />
          ) : AllTasks.length > 0 ? (
            AllTasks.map((val, ind) => (
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
  container: {},
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
