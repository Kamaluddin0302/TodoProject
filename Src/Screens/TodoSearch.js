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

export default function Search({ navigation, route }) {
  let [AllTasks, setAllTasks] = useState([]);
  let [NotFound, setNotFound] = useState("");
  let [Spiner, setSpiner] = useState(false);
  let [Search, setSearch] = useState("");

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
    }
  };

  let GetAllTodos = async () => {
    setSpiner(true);

    try {
      let getAllTask = await GetAllTasks();
      setAllTasks(getAllTask);
      setSpiner(false);
    } catch (error) {
      setSpiner(false);
    }
  };

  let DeleteTodo = (id, Title) =>
    Alert.alert("Are You want to Delete", Title, [
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
    if (route.params.route === "All Todos") {
      GetAllTodos();
    }
  };
  useState(async () => {
    navigation.addListener("focus", () => {
      CheckFunc();
    });
  }, [navigation]);

  // Filter Function For filter todo when some thing enter in to search it will check

  let filterTodo = AllTasks.filter((val) =>
    val.Title.toLocaleLowerCase().includes(Search.toLocaleLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* <Header navigation={navigation} Title={route.params.route} back={true} /> */}
      <SearchBar onChange={(text) => setSearch(text)} navigation={navigation} />
      <View style={styles.MainContainer}>
        <ScrollView>
          {Spiner ? (
            <ActivityIndicator size="large" color="red" />
          ) : filterTodo.length > 0 ? (
            filterTodo.map((val, ind) => (
              <TodoCard
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
