import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { SignUpFunc } from "../Config/Functions/AuthFunc";
import AddInput from "../Components/AddInput";
import Button from "../Components/Button";

export default function Signup({ navigation }) {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  let [spiner, setSpiner] = useState(false);

  let SignupF = async () => {
    setSpiner(true);
    if ((name === "" && email === "", Password === "")) {
      alert("Please Enter All Data");
      setSpiner(false);
    } else {
      try {
        let SignupRespoce = await SignUpFunc(email, Password, name);
        if (SignupRespoce === "true") {
          setSpiner(false);
          navigation.navigate("Home");
        }
      } catch (errror) {
        alert(errror);
        setSpiner(false);
      }
    }
  };

  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <View style={styles.container}>
        <View style={styles.FormView}>
          <Image
            source={require("./../../assets/logo.png")}
            style={styles.logo}
            resizeMode="contain"
          />
          <Text style={styles.title}> Sign Up</Text>
          <AddInput
            value={name}
            title="Name"
            onChange={(text) => setName(text)}
          />
          <AddInput
            value={email}
            title="Email"
            onChange={(text) => setEmail(text)}
          />
          <AddInput
            value={Password}
            title="Password"
            security={true}
            onChange={(text) => setPassword(text)}
          />

          <Button
            title="Sign Up"
            style={{ paddingHorizontal: 100 }}
            Onpress={SignupF}
            spiner={spiner}
          />
          <TouchableOpacity onPress={() => navigation.navigate("SignIn")}>
            <Text style={styles.newaccount}>Already An Account? Sign In</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    // justifyContent: "center",
    // flex: 1,
    marginTop: 100,
  },
  logo: {
    width: 120,
    height: 120,
    alignSelf: "center",
    borderRadius: 10,
    position: "absolute",
    zIndex: 1,
    marginTop: -60,
  },
  FormView: {
    backgroundColor: "white",
    elevation: 20,
    marginHorizontal: 10,
    paddingVertical: 20,
    paddingTop: 50,
    borderRadius: 5,
    paddingHorizontal: 10,
  },
  newaccount: {
    textAlign: "center",
    color: "black",
    fontSize: 11,
    fontWeight: "bold",
  },
  title: {
    fontSize: 35,
    color: "black",
    textAlign: "center",
    marginVertical: 30,
    fontWeight: "bold",
  },
});
