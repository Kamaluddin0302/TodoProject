import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import Button from "../Components/Button";
import firebase from "firebase";
import { SignInFunc } from "./../Config/Functions/AuthFunc";
import AddInput from "../Components/AddInput";

export default function SignIn({ navigation }) {
  let [email, setEmail] = useState("");
  let [Password, setPassword] = useState("");
  let [spiner, setSpiner] = useState(false);

  // useEffect will check if user is already logined then it will redirect to Home
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        navigation.navigate("Home");
      }
    });
  }, []);

  // Login which is calling on login button

  let LoginF = async () => {
    setSpiner(true); // when it true a spiner will show in login
    try {
      let SigninRespoce = await SignInFunc(email, Password); // call login function it will login user from firebase

      if (SigninRespoce === "true") {
        navigation.navigate("Home");
        setSpiner(false);
      }
    } catch (error) {
      alert(error);
      setSpiner(false); // when it false spiner will be hide-
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.FormView}>
        <Image
          source={require("./../../assets/logo.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <Text style={styles.title}> Login</Text>

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
          title="Login"
          style={{ paddingHorizontal: 100 }}
          Onpress={LoginF}
          spiner={spiner}
        />
        <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.newaccount}>Create New Account? Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  logo: {
    width: 140,
    height: 140,
    alignSelf: "center",
    borderRadius: 10,
    position: "absolute",
    zIndex: 1,
    marginTop: -70,
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
    fontWeight: "bold",
    fontSize: 11,
  },
  title: {
    fontSize: 35,
    color: "black",
    textAlign: "center",
    marginVertical: 30,
    fontWeight: "bold",
  },
});
