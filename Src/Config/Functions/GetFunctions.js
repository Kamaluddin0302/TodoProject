import firebase from "firebase";

let GetCategories = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      let AllObjects = [];
      firebase
        .firestore()
        .collection("Categories")
        .where("uid", "==", user.uid)
        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              let obj = {};
              obj.label = snap.data().Title;
              obj.value = snap.data().Title;
              obj.uid = snap.id;
              AllObjects.push(obj);
            });
            resolve(AllObjects);
          } else {
            reject("false");
          }
        });
    });
  });
};

let GetAllCategories = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      let AllObjects = [];
      firebase
        .firestore()
        .collection("Categories")
        .where("uid", "==", user.uid)
        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              let obj = {};
              obj = snap.data();
              obj.id = snap.id;
              AllObjects.push(obj);
            });
            resolve(AllObjects);
          } else {
            reject("false");
          }
        });
    });
  });
};

let GetAllTasks = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      let AllObjects = [];
      firebase
        .firestore()
        .collection("Tasks")
        .where("uid", "==", user.uid)

        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              let obj = {};
              obj = snap.data();
              obj.id = snap.id;
              AllObjects.push(obj);
            });
            resolve(AllObjects);
          } else {
            reject("false");
          }
        });
    });
  });
};

let GetAllPendingTasks = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      let AllObjects = [];
      firebase
        .firestore()
        .collection("Tasks")
        .where("uid", "==", user.uid)
        .where("status", "==", "pending")

        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              let obj = {};
              obj = snap.data();
              obj.id = snap.id;
              AllObjects.push(obj);
            });
            resolve(AllObjects);
          } else {
            reject("false");
          }
        });
    });
  });
};

let GetAllCompletedTasks = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      let AllObjects = [];
      firebase
        .firestore()
        .collection("Tasks")
        .where("uid", "==", user.uid)
        .where("status", "==", "completed")

        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              let obj = {};
              obj = snap.data();
              obj.id = snap.id;
              AllObjects.push(obj);
            });
            resolve(AllObjects);
          } else {
            reject("false");
          }
        });
    });
  });
};

let GetHighPriorityTasks = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      let AllObjects = [];
      firebase
        .firestore()
        .collection("Tasks")
        .where("uid", "==", user.uid)
        .where("Pirority", "==", "High Priority")

        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              let obj = {};
              obj = snap.data();
              obj.id = snap.id;
              AllObjects.push(obj);
            });
            resolve(AllObjects);
          } else {
            reject("false");
          }
        });
    });
  });
};

let GetMediumPriorityTasks = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      let AllObjects = [];
      firebase
        .firestore()
        .collection("Tasks")
        .where("uid", "==", user.uid)
        .where("Pirority", "==", "Medium Priority")

        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              let obj = {};
              obj = snap.data();
              obj.id = snap.id;
              AllObjects.push(obj);
            });
            resolve(AllObjects);
          } else {
            reject("false");
          }
        });
    });
  });
};

let GetLowPriorityTasks = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      let AllObjects = [];
      firebase
        .firestore()
        .collection("Tasks")
        .where("uid", "==", user.uid)
        .where("Pirority", "==", "Low Priority")

        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              let obj = {};
              obj = snap.data();
              obj.id = snap.id;
              AllObjects.push(obj);
            });
            resolve(AllObjects);
          } else {
            reject("false");
          }
        });
    });
  });
};

let GetNoPriorityTasks = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      let AllObjects = [];
      firebase
        .firestore()
        .collection("Tasks")
        .where("uid", "==", user.uid)
        .where("Pirority", "==", "No priority")

        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              let obj = {};
              obj = snap.data();
              obj.id = snap.id;
              AllObjects.push(obj);
            });
            resolve(AllObjects);
          } else {
            reject("false");
          }
        });
    });
  });
};

let GetLocationAlert = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      let AllObjects = [];
      firebase
        .firestore()
        .collection("Locations")
        .where("uid", "==", user.uid)

        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              let obj = {};
              obj = snap.data();
              obj.id = snap.id;
              AllObjects.push(obj);
            });
            resolve(AllObjects);
          } else {
            reject("false");
          }
        });
    });
  });
};

let GetWeatherAlert = () => {
  return new Promise((resolve, reject) => {
    firebase.auth().onAuthStateChanged((user) => {
      let AllObjects = [];
      firebase
        .firestore()
        .collection("weather")
        .where("uid", "==", user.uid)

        .onSnapshot((snapshot) => {
          if (!snapshot.empty) {
            snapshot.forEach((snap) => {
              let obj = {};
              obj = snap.data();
              obj.id = snap.id;
              AllObjects.push(obj);
            });
            resolve(AllObjects);
          } else {
            reject("false");
          }
        });
    });
  });
};

export {
  GetCategories,
  GetAllTasks,
  GetLocationAlert,
  GetWeatherAlert,
  GetAllPendingTasks,
  GetAllCompletedTasks,
  GetHighPriorityTasks,
  GetMediumPriorityTasks,
  GetLowPriorityTasks,
  GetNoPriorityTasks,
  GetAllCategories
};
