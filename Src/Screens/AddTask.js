import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import AddHeader from "../Components/AddHeader";
import AddInput from "../Components/AddInput";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import DropDown from "../Components/DropDown";
import firebase from "firebase";
import { AddTasks } from "../Config/Functions/AddFunctions";
import { GetCategories } from "../Config/Functions/GetFunctions";
import { Priority } from "../Config/Objects/Priority";

export default function AddTask({ title, navigation }) {
  let [Title, setTitle] = useState("");
  let [Description, setDescription] = useState("");
  let [uid, setUid] = useState("");
  let [Location, setLocation] = useState("");
  let [Pirority, setPirority] = useState("");
  let [Categories, setCategories] = useState([]);
  let [selectCategories, setSetSelectCatrgories] = useState("");

  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [dateShow, setDateShow] = useState(false);
  const [TimeShow, setTimeShow] = useState(false);

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateShow(false);
    setDate(currentDate);
  };
  const onChange2 = (event, selectedDate) => {
    console.log(selectedDate.toLocaleString(), "=====>");

    const currentDate = selectedDate;
    setTimeShow(false);
    setDate(currentDate);
    console.log(currentDate);
  };

  let AddFunction = async () => {
    console.log(
      Title,
      "title",
      Description,
      "Description",
      Location,
      "Location",
      Pirority,
      "Pirority"
    );
    try {
      if (
        (Title === "" ||
          Description === "" ||
          Location === "" ||
          Pirority === "",
        selectCategories === "")
      ) {
        alert("Enter All Data");
      } else {
        await AddTasks({
          Title,
          Description,
          uid,
          Location,
          status: "pending",
          date: date.toLocaleString(),
          Pirority,
          Categories: selectCategories,
        });
        alert("Weather Alert Successfully Added");
        navigation.goBack();
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        await GetCategories(user.uid)
          .then((catres) => {
            setCategories(catres);
            setUid(user.uid);
          })
          .catch(() => {
            alert("First Add Any Category");
            navigation.navigate("AddNewCategory");
          });
      } else {
        navigation.navigate("SignIn");
      }
    });
  }, []);
  console.log(Categories, "fknkn");
  return (
    <View style={styles.container}>
      <AddHeader
        title="Add New Tasks"
        navigation={navigation}
        AddFunction={AddFunction}
      />
      <ScrollView>
        <View style={styles.MainView}>
          <AddInput
            title="Title"
            value={Title}
            onChange={(text) => setTitle(text)}
          />
          <AddInput
            title="Description"
            multiple={true}
            value={Description}
            onChange={(text) => setDescription(text)}
          />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setDateShow(true)}
          >
            <Fontisto name="date" size={30} color="white" />
            <Text style={styles.buttonTitle}>Set Date</Text>
          </TouchableOpacity>
          <Text style={styles.selectDate}>{date.toLocaleString()}</Text>

          <TouchableOpacity
            style={styles.button}
            onPress={() => setTimeShow(true)}
          >
            <Ionicons name="time-outline" size={30} color="white" />
            <Text style={styles.buttonTitle}>Set Time</Text>
          </TouchableOpacity>

          {dateShow && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"date"}
              onChange={onChange1}
              minimumDate={new Date()}
            />
          )}
          {TimeShow && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"time"}
              is24Hour={false}
              onChange={onChange2}
            />
          )}

          <AddInput
            title="Set Location"
            value={Location}
            onChange={(text) => setLocation(text)}
          />
          <DropDown
            title="Set Pirority "
            data={Priority}
            onChange={(text) => setPirority(text)}
          />
          {Categories.length > 0 && (
            <DropDown
              title="Select category"
              data={Categories}
              onChange={(text) => {
                setSetSelectCatrgories(text);
              }}
            />
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  MainView: {
    padding: 20,
  },
  button: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginLeft: 20,
  },
  selectDate: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign: "center",
  },
});
