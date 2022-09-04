import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import DropDownPicker from "react-native-dropdown-picker";

export default function DropDown({ title, data, onChange, select }) {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const [items, setItems] = useState(data);

  useEffect(() => {
    console.log(select, "======>");
    setValue(select);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        onChangeValue={(text) => onChange(text)}
        setValue={setValue}
        placeholder={title}
        labelStyle={{ borderBottomWidth: 1, borderBottomColor: "black" }}
        containerStyle={{ borderWidth: 0 }}
        style={{ backgroundColor: "white", elevation: 15, borderWidth: 0 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
