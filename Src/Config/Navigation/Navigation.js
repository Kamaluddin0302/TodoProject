import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// all Screen
import Home from "../../Screens/Home";
import Search from "../../Screens/TodoSearch";
import AddTask from "../../Screens/AddTask";
import AddWeatherAlert from "../../Screens/AddWeatherAlert";
import AddLocationAlert from "../../Screens/AddLocationAlert";
import AddNewCategory from "../../Screens/AddCategory";
import Edittask from "../../Screens/EditTask";
import SignIn from "../../Screens/SignIn";
import Signup from "../../Screens/SignUp";
import AllTasks from "../../Screens/AllTasks";
import TaskDetail from "../../Screens/TaskDetail";
import Allalter from "../../Screens/AllLert";
import AlertDetail from "../../Screens/AlertDetail";
import AlertSearch from "../../Screens/AlertSearch";

const Stack = createNativeStackNavigator();

function MainNaviation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="SignUp"
          component={Signup}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="EditTask"
          component={Edittask}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddNewCategory"
          component={AddNewCategory}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddLocation"
          component={AddLocationAlert}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Addweather"
          component={AddWeatherAlert}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AddTask"
          component={AddTask}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TodoSearch"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AlertSearch"
          component={AlertSearch}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AllTasks"
          component={AllTasks}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="TaskDetail"
          component={TaskDetail}
          options={{
            headerShown: false,
          }}
        />

        <Stack.Screen
          name="AlertDetail"
          component={AlertDetail}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="AllAlert"
          component={Allalter}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNaviation;
