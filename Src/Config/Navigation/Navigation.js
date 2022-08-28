import * as React from "react";
import { View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../Screens/Home";
import Search from "../../Screens/Search";
import AddTask from "../../Screens/AddTask";
import AddWeatherAlert from "../../Screens/AddWatherAlert";
import AddLocationAlert from "../../Screens/AddLocationAlert";
import AddNewCategory from "../../Screens/AddCategory";
import Edittask from "../../Screens/EditTask";
import SignIn from "../../Screens/SignIn";
import Signup from "../../Screens/SignUp";

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
          name="Search"
          component={Search}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainNaviation;
