import firebase from "firebase";

let CompleteTaskFunc = (data) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("Tasks")
      .doc(data)
      .update({ status: "completed" })
      .then(() => resolve("true"))
      .catch((error) => reject(error));
  });
};

let DeleteTaskFunc = (data) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("Tasks")
      .doc(data)
      .delete()
      .then(() => resolve("true"))
      .catch((error) => reject(error));
  });
};

let DeleteAlertFunc = (collection, docid) => {
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection(collection)
      .doc(docid)
      .delete()
      .then(() => resolve("true"))
      .catch((error) => reject(error));
  });
};

let UpdadteTaskFunc = (data, id) => {
  console.log(id, "++++++");
  return new Promise((resolve, reject) => {
    firebase
      .firestore()
      .collection("Tasks")
      .doc(id)
      .update(data)
      .then(() => resolve("true"))
      .catch((error) => reject(error));
  });
};
export { CompleteTaskFunc, DeleteTaskFunc, UpdadteTaskFunc, DeleteAlertFunc };
