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
} from "../Config/Functions/GetFunctions";
import { DeleteTaskFunc } from "../Config/Functions/updateFunctions";

export default function AllTasks({ navigation, route }) {
  let [AllTasks, setAllTasks] = useState([]);
  let [NotFound, setNotFound] = useState("");
  let [Spiner, setSpiner] = useState(false);

  let GetUpcommingTasks = async () => {
    setSpiner(true);
    let todaydate = new Date().toLocaleString().split(" ");
    console.log(todaydate);

    try {
      let getAllTask = await GetAllTasks();
      let filterTask = getAllTask.filter(
        (val, ind) => todaydate[4] <= val.date.split(" ")[4]
      );
      setAllTasks(filterTask);
      setSpiner(false);
    } catch (error) {
      setSpiner(false);
      setAllTasks([]);
    }
  };

  let GetPendingTasks = async () => {
    setSpiner(true);

    try {
      let getAllTask = await GetAllPendingTasks();
      setAllTasks(getAllTask);
      setSpiner(false);
    } catch (error) {
      setSpiner(false);
      setAllTasks([]);
    }
  };
  let GetCompletedTasks = async () => {
    setSpiner(true);

    try {
      let getAllTask = await GetAllCompletedTasks();
      setAllTasks(getAllTask);
      setSpiner(false);
    } catch (error) {
      setSpiner(false);
      setAllTasks([]);
    }
  };

  let EditTodo = (val) => {
    navigation.navigate("EditTask", { data: val });
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
    if (route.params.route === "Upcoming Tasks") {
      GetUpcommingTasks();
    }
    if (route.params.route === "Pending") {
      GetPendingTasks();
    }
    if (route.params.route === "Completed") {
      GetCompletedTasks();
    }
  };
  useState(async () => {
    navigation.addListener("focus", () => {
      CheckFunc();
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header
        navigation={navigation}
        path="TodoSearch"
        Title={route.params.route}
        back={true}
      />
      <View style={styles.MainContainer}>
        <ScrollView>
          {Spiner ? (
            <ActivityIndicator size="large" color="red" />
          ) : AllTasks.length > 0 ? (
            AllTasks.map((val, ind) => (
              <TodoCard
                navigation={navigation}
                key={ind}
                val={val}
                DeleteTodo={DeleteTodo}
                EditTodo={EditTodo}
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
