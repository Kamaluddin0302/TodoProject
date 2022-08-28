import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import AddHeader from "../Components/AddHeader";
import AddInput from "../Components/AddInput";
import DateTimePicker from "@react-native-community/datetimepicker";
import { Fontisto, Ionicons } from "@expo/vector-icons";
import DropDown from "../Components/DropDown";

export default function Edittask({ title }) {
  const [date, setDate] = useState(new Date(1598051730000));
  const [time, setTime] = useState(new Date());
  const [dateShow, setDateShow] = useState(false);
  const [TimeShow, setTimeShow] = useState(false);

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
  console.log(dateShow, "fknknk");
  return (
    <ScrollView>
      <View style={styles.container}>
        <AddHeader title="Edit Task" />
        <View style={styles.MainView}>
          <AddInput title="Title" />
          <AddInput title="Description" multiple={true} />
          <TouchableOpacity
            style={styles.button}
            onPress={() => setDateShow(true)}
          >
            <Fontisto name="date" size={30} color="white" />
            <Text style={styles.buttonTitle}>Set Date</Text>
          </TouchableOpacity>
          <Text>selected: {date.toLocaleString()}</Text>

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
            />
          )}
          {TimeShow && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode={"time"}
              is24Hour={true}
              onChange={onChange2}
            />
          )}

          <DropDown title="Location" />
          <DropDown title="Set Pirority " />
          <DropDown title="Select category" />
        </View>
      </View>
    </ScrollView>
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
});
