import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useEffect, useState } from "react";
import AddHeader from "../Components/AddHeader";
import AddInput from "../Components/AddInput";
import { AddCategoryFunc, AddImage } from "../Config/Functions/AddFunctions";
import firebase from "firebase";

export default function AddNewCategory({ navigation }) {
  let [Title, setTitle] = useState("");
  let [Description, setDescription] = useState("");
  let [image, setImage] = useState(null);
  let [spiner, setSpiner] = useState(false);
  let [uid, setUid] = useState("");
  let Imagepicker = async () => {
    setSpiner(true);
    try {
      let imageResult = await AddImage();
      console.log(imageResult);
      setImage(imageResult);
      setSpiner(false);
    } catch (error) {
      setSpiner(false);
      alert(error);
    }
  };

  let AddFunction = async () => {
    if (Title == "" || Description == "" || image == null) {
      alert("Please Add All Data");
    } else {
      try {
        await AddCategoryFunc({
          Title,
          Description,
          image,
          uid,
        });
        alert("Category Add Successfully");
        navigation.goBack();
      } catch (error) {
        alert(error);
      }
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
          title="Add New Category"
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
          <Text style={styles.ImageTitle}>Add Image</Text>
          <TouchableOpacity
            style={styles.addImage}
            onPress={Imagepicker}
            disabled={spiner}
          >
            <ImageBackground source={{ uri: image }} style={styles.backImage} />
            <Text style={styles.chooseimage}>Choose Image</Text>
            {spiner && (
              <ActivityIndicator
                size="large"
                color="white"
                style={{ position: "absolute" }}
              />
            )}
          </TouchableOpacity>
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
  ImageTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 5,
  },
  addImage: {
    backgroundColor: "white",
    elevation: 15,
    justifyContent: "center",
    alignItems: "center",
    height: 200,
    borderRadius: 5,
  },
  chooseimage: {
    fontSize: 20,
    fontWeight: "bold",
    position: "absolute",
    color: "gray",
  },
  backImage: {
    height: 200,
    width: "100%",
  },
});
