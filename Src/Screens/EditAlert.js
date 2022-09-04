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
  import { UpdadteTaskFunc } from "../Config/Functions/updateFunctions";
  
  export default function EditTask({ title, navigation, route }) {
    let [Title, setTitle] = useState("");
    let [Description, setDescription] = useState("");
    let [uid, setUid] = useState("");
    let [id, setId] = useState("");
    let [Location, setLocation] = useState("");
    let [selectPirority, setselectPirority] = useState(null);
    let [Categories, setCategories] = useState([]);
    let [selectCategories, setSetSelectCatrgories] = useState(null);
  
    const [date, setDate] = useState(new Date());
    const [time, setTime] = useState(new Date());
    const [dateShow, setDateShow] = useState(false);
    const [TimeShow, setTimeShow] = useState(false);
    const [update, setUpdate] = useState(false);
  
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
      try {
        if (
          Title === "" ||
          Description === "" ||
          Location === "" ||
          selectPirority === "" ||
          selectCategories === ""
        ) {
          alert("Enter All Data");
        } else {
          await UpdadteTaskFunc(
            {
              Title,
              Description,
              Location,
              date: date.toLocaleString(),
              Pirority: selectPirority,
              Categorie: selectCategories,
            },
            id
          );
          alert("Task Updated Alert Successfully Added");
          navigation.goBack(-1);
        }
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      let { data } = route.params;
      console.log(data);
      setTitle(data.Title);
      setDescription(data.Description);
      setLocation(data.Location);
      setselectPirority(data.Pirority);
      setSetSelectCatrgories(data.Categorie);
      setId(data.id);
      firebase.auth().onAuthStateChanged(async (user) => {
        if (user) {
          let catres = await GetCategories(user.uid);
          setCategories(catres);
          setUid(user.uid);
          setUpdate(update);
        } else {
          navigation.navigate("SignIn");
        }
      });
    }, []);
    console.log(selectPirority, "fknkn");
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
            {selectPirority && (
              <DropDown
                title="Set Pirority "
                data={Priority}
                onChange={(text) => setselectPirority(text)}
                select={selectPirority}
              />
            )}
            {Categories.length > 0 && (
              <DropDown
                title="Select category"
                data={Categories}
                select={selectCategories}
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
  