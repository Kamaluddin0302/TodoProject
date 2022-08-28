import firebase from "firebase";

let SignUpFunc = (email, password, user_Name) => {
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((user) => {
        firebase
          .firestore()
          .collection("user")
          .doc(user.uid)
          .set({
            email,
            password,
            user_Name,
          })
          .then(() => resolve("true"));
      })
      .catch((error) => {
        console.log(error);
        reject(error);
      });
  });
};

let SignInFunc = (email, password) => {
  console.log(email, password);
  return new Promise((resolve, reject) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => resolve("true"))
      .catch((errror) => reject(errror));
  });
};

export { SignUpFunc, SignInFunc };
