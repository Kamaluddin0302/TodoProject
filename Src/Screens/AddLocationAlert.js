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
import { AddLocationFunc } from "../Config/Functions/AddFunctions";
import firebase from "firebase";

export default function AddLocationAlert({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());
  const [dateShow, setDateShow] = useState(false);
  const [TimeShow, setTimeShow] = useState(false);
  let [Title, setTitle] = useState("");
  let [Description, setDescription] = useState("");
  let [uid, setUid] = useState("");
  let [Location, setLocation] = useState("");

  const onChange1 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setDateShow(false);
    setDate(currentDate);
    console.log(currentDate);
  };
  const onChange2 = (event, selectedDate) => {
    const currentDate = selectedDate;
    setTimeShow(false);
    setDate(currentDate);
    console.log(currentDate);
  };

  // add Weather Function which is called from header mark button from header
  let AddFunction = async () => {
    try {
      if (Title === "" || Description === "" || Location === "") {
        alert("Enter All Data");
      } else {
        await AddLocationFunc({
          Title,
          Description,
          Location,
          uid,
          date,
        });
        alert("Location Alert Successfully Added");
        navigation.goBack();
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setUid(user.uid);
      } else {
        navigation.navigate("SignIn");
      }
    });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView>
        <AddHeader
          title="Add Location Alert"
          navigation={navigation}
          AddFunction={AddFunction}
        />
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
              is24Hour={true}
              onChange={onChange1}
              minimumDate={new Date()}
            />
          )}
          {TimeShow && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"time"}
              is24Hour={true}
              onChange={onChange2}
              minimumDate={new Date()}
            />
          )}

          <AddInput
            title="Set Location"
            value={Location}
            onChange={(text) => setLocation(text)}
          />
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
