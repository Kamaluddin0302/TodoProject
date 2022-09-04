import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import EditDeleteModal from "./EditDeleteModal";

export default function TodoCard({
  show,
  val,
  CompteTask,
  navigation,
  DeleteTodo,
  EditTodo
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        { backgroundColor: show ? "#e1e1e7" : "white" },
      ]}
      onPress={() => navigation.navigate("TaskDetail", { val: val })}
    >
      <TouchableOpacity style={styles.mark}>
        {val.status === "completed" ? (
          <Ionicons name="ios-checkmark" size={24} color="green" />
        ) : (
          <TouchableOpacity
            style={styles.mark}
            onPress={() => CompteTask(val.id)}
          ></TouchableOpacity>
        )}
      </TouchableOpacity>
      <View style={styles.detailItem}>
        <Text style={styles.title}>Task Name: </Text>
        <Text style={styles.value}>{val.Title}</Text>
      </View>
      <TouchableOpacity
        style={styles.down}
        onPress={() => setModalVisible(!modalVisible)}
      >
        <AntDesign name="down" size={20} color="black" />
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <EditDeleteModal
          onPress={() => setModalVisible(!modalVisible)}
          navigation={navigation}
          val={val}
          DeleteTodo={DeleteTodo}
          EditTodo= {EditTodo}
        />
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "white",
    elevation: 5,
    padding: 10,
    marginVertical: 5,
    borderRadius: 5,
  },
  detailItem: {
    flexDirection: "row",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  value: {
    fontSize: 16,
  },
  mark: {
    backgroundColor: "white",
    height: 30,
    width: 30,
    elevation: 10,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  subtitle: {
    fontSize: 11,
    width: "35%",
    fontWeight: "bold",
  },
  subvalue: {
    width: "50%",
    fontSize: 11,
  },
  down: {
    padding: 10,
  },
});
