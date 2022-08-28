import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, LogBox } from "react-native";
import firebase from "firebase";
import "firebase/firestore";

//import firebase config from firebase file
import config from "./Src/Config/Firebase/Firebase";
import MainNaviation from "./Src/Config/Navigation/Navigation";

//for ignore yellow box
LogBox.ignoreLogs(["Setting a timer for a long period of time"]);
LogBox.ignoreAllLogs();

// connect Firebase with app
if (!firebase.apps.length) {
  firebase.initializeApp(config);
  firebase
    .firestore()
    .settings({ experimentalForceLongPolling: true, merge: true }); // this is for to remove setting time warning..
}

export default function App() {
  return (
    <View style={styles.container}>
      <MainNaviation />
      {/* <StatusBar style="light" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
});
