import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";

export default function AddInput({
  title,
  multiple,
  security,
  onChange,
  value,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}:</Text>
      {multiple ? (
        <TextInput
          style={[
            styles.input,
            {
              textAlignVertical: "top",
            },
          ]}
          multiline={true}
          selectionColor="black"
          value={value}
          numberOfLines={8}
          onChangeText={(text) => onChange(text)}
        />
      ) : (
        <TextInput
          style={styles.input}
          secureTextEntry={security}
          value={value}
          onChangeText={(text) => onChange(text)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  input: {
    backgroundColor: "white",
    elevation: 15,
    // borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});
