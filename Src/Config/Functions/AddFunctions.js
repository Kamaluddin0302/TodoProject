import firebase from "firebase";
import * as ImagePicker from "expo-image-picker";

let AddCategoryFunc = (category) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("Categories")
      .add(category)
      .then(() => resolve("true"))
      .catch((error) => reject(error));
  });
};

let AddImage = async () => {
  return new Promise(async (resolve, reject) => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(result);
    if (!result.cancelled) {
      let uri = result.uri;
      var name = Math.random();
      var ref = await firebase.storage().ref("/").child(`Profile/${name}`);
      const response = await fetch(uri);
      const blob = await response.blob(uri);
      let metadata = {
        contentType: "image/jpeg",
      };
      await ref.put(blob, metadata);
      ref.getDownloadURL().then((url) => {
        resolve(url);
      });
      //   console.log(this.state.imageURL);
    } else {
      reject("Some Thing is wrong");
    }
  });
};

export { AddCategoryFunc, AddImage };
