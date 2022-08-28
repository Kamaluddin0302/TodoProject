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

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        navigation.navigate("Home");
      }
    });
  }, []);

  let LoginF = async () => {
    setSpiner(true);
    try {
      let SigninRespoce = await SignInFunc(email, Password);

      if (SigninRespoce === "true") {
        navigation.navigate("Home");
        setSpiner(false);
      }
    } catch (error) {
      alert(error);
      setSpiner(true);
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
